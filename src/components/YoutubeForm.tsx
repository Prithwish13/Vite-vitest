/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface FormValues {
  username: string;
  email: string;
  channel: string;
}

export default function YouTubeForm() {
  const { register, control, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data);
  };

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

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
