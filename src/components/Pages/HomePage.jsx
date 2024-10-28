import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <p>THIS IS THE HOMEPAGE</p>
      <Link to="/store">Go shop!</Link>
    </>
  );
}
