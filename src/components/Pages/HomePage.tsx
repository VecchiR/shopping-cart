import { Link } from 'react-router-dom';
import GoShopButton from '../GoShopButton';

export default function HomePage() {
  return (
    <div className='relative flex flex-col flex-1 justify-center items-center h-full'>
      <div className='absolute inset-0 bg-cover bg-[url("/src/assets/bg.jpg")] brightness-75  -z-1'></div>
      <div className='relative flex flex-col items-center z-10'>
        <h1 className='font-hill font-thin  text-8xl text-white'>Style is the code</h1>
      </div>
      <Link to="/store" className='relative z-10'>
        <GoShopButton />
      </Link>
    </div>
  );
}
