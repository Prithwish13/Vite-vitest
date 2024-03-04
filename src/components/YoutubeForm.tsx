/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';

interface FormValues {
  username: string;
  email: string;
  channel: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
}


export default function YouTubeForm() {
  const {
    register,
    control,
    handleSubmit,
    formState,
    getValues,
    setValue,
    watch,
    reset,
    trigger,
  } = useForm<FormValues>({
    // we can do also async call here

    // defaultValues: async () => {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/users/1'
    //   );
    //   const data = await response.json();
    //   return {
    //     username: data.username,
    //     email: data.email,
    //     channel: data.website,
    //   };
    // },

    defaultValues: {
      email: '',
      username: '',
      channel: '',
      social: {
        twitter: '',
        facebook: '',
      },
      phoneNumbers: ['', ''],
      phNumbers: [
        {
          number: '',
        },
      ],
      age: 0,
      dob: new Date(),
    },
    mode: 'onBlur',
  });
  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control,
  });
  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } =
    formState;

  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data);
  };

  const handleGetValues = () => {
    console.log(getValues());
  };

  const handleSetValue = () => {
    setValue('username', 'Prithwish Dey', {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <h1>YouTube Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required',
              },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Invalid',
              },
              // validate: (inputField) => {
              //   return (
              //     inputField !== 'admin@example.com' ||
              //     'enter a different email'
              //   );
              // },
              validate: {
                notAdmin: (inputField) => {
                  return (
                    inputField !== 'admin@example.com' ||
                    'enter a different email'
                  );
                },
                restrictedDomain: (inputField) => {
                  return (
                    !inputField.endsWith('good.com') ||
                    'this is restricted domain'
                  );
                },
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const data = await response.json();
                  return data.length === 0 || 'this email is already exists';
                },
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register('channel', {
              required: {
                value: true,
                message: 'channel is required',
              },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register('social.twitter')} />
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register('social.facebook')} />
        </div>
        <div className="form-control">
          <label htmlFor="primary-phone">Primary Phone Number</label>
          <input
            type="text"
            id="primary-phone"
            {...(register('phoneNumbers.0'),
            {
              disabled: watch('channel') === '',
            })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary Phone Number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register('phoneNumbers.1')}
          />
        </div>
        <div>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={field.id} className="form-control">
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number` as const)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      remove
                    </button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: '' })}>
              add
            </button>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register('age', {
              valueAsNumber: true,
              required: {
                value: true,
                message: 'Age is required',
              },
            })}
          />
        </div>
        {/* <div className="form-control">
          <label htmlFor="dob">Date of birth</label>
          <input
            type="datetime-local"
            id="dob"
            {...register('dob', {
              validate: (inputField) => {
                const isDateValid = !Number.isNaN(
                  new Date(inputField).valueOf()
                );

                return !isDateValid || 'Please enter a valid date time';
              },
              required: {
                value: true,
                message: 'date of birth is required',
              },
            })}
          />
        </div> */}
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
        <button type="button" onClick={handleGetValues}>
          Get Values
        </button>
        <button type="button" onClick={() => trigger('channel')}>
          Triggered Validation
        </button>
        <button type="button" onClick={handleSetValue}>
          Set Value
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
