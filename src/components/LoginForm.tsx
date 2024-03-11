/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginFormValues, formValidation } from './formValidation';

function ErrorMessage({ children }: { children?: string }) {
  return children ? <p className="error">{children}</p> : null;
}

ErrorMessage.defaultProps = {
  children: '',
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(formValidation),
  });

  const onSubmit = async (data) => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input {...register('username')} type="text" id="username" />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input {...register('password')} type="password" id="password" />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            {...register('confirmPassword')}
            type="password"
            id="confirm-password"
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>

      <div className="container row">
        <div className="card card-container col-sm">
          <img
            className="card-img-top"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr />
            <a href="google.co.in" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card card-container col-md-3">
          <img
            className="card-img-top"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr />
            <a href="google.co.in" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
