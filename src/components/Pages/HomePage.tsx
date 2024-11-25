import { Link } from 'react-router-dom';
import Header from '../Header';
import GoShopButton from '../GoShopButton';

export default function HomePage() {
  return (
    <div>
      <img src="" alt="someImage" />
      <div className="text-content">
        <h1>Name of the store</h1>
        <p>Little description, slogan, whatever</p>
      </div>
      <Link to="/store">
        <GoShopButton />
      </Link>
    </div>
  );
}
