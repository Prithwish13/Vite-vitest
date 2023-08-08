import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <h1>Not Found</h1>
      <Link to="/">Go home</Link>
    </>
  );
}
