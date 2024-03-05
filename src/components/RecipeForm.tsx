/* eslint-disable react/jsx-props-no-spreading */
// RecipeForm.tsx

import { useForm } from 'react-hook-form';
import FieldSet from './FieldSet';
import Field from './Field';

interface FormData {
  name: string;
  description: string;
  amount: number;
}

export default function RecipeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const submitForm = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>New recipe</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Basics">
          <Field label="Name" error={errors.name?.message}>
            <input
              {...register('name', {
                required: 'Recipe name is required',
                minLength: {
                  value: 3,
                  message: 'Recipe name must be at least 3 characters long',
                },
              })}
              type="text"
              id="name"
            />
          </Field>
          <Field label="Description" error={errors.description?.message}>
            <textarea
              {...register('description', {
                required: 'description is needed',
                maxLength: {
                  value: 100,
                  message: 'Description must be at most 100 characters long',
                },
              })}
              id="description"
              rows={10}
            />
          </Field>
          <Field label="Servings" error={errors.amount?.message}>
            <input
              {...register('amount', {
                min: {
                  value: 1,
                  message: 'Amount of servings has to be at least 1',
                },
                max: {
                  value: 10,
                  message: 'A recipe can have max 10 servings',
                },
              })}
              type="number"
              id="amount"
            />
          </Field>
        </FieldSet>

        <Field>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </Field>
      </form>
    </div>
  );
}
