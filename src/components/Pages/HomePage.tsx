import { Link } from 'react-router-dom';
import GoShopButton from '../GoShopButton';

export default function HomePage() {
  return (
    <div className='relative flex flex-col justify-center items-center h-full'>
      <div className='absolute inset-0 bg-cover bg-[url("/src/assets/bg.jpg")] brightness-50 grayscale -z-1'></div>
      <div className='relative flex flex-col items-center z-10'>
        <h1 className='text-4xl font-bold text-slate-200'>Name of the store</h1>
        <p className='tw text-slate-300'>Little description, slogan, whatever</p>
      </div>
      <Link to="/store" className='relative z-10'>
        <GoShopButton />
      </Link>
    </div>
  );
}
