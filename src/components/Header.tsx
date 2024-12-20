import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CartBadge from './CartBadge';

export default function Header() {
  // return (
  //   <header className="p-6 sticky top-0 z-50 bg-white">
  //     <nav className="grid grid-cols-custom-layout justify-items-center justify-between items-center">
  //       <div className="flex justify-self-end gap-12">
  //         <NavLink to="/" className={({ isActive }) => (isActive ? 'underline' : '')}>
  //           Home
  //         </NavLink>
  //         <NavLink to="/store" className={({ isActive }) => (isActive ? 'underline' : '')}>
  //           Store
  //         </NavLink>
  //       </div>
  //       <NavLink to="/">
  //         <h1 className="font-lime font-thin text-4xl">dress.CODE</h1>
  //       </NavLink>
  //       <CartBadge />
  //     </nav>
  //   </header>
  // );

  return (
    <header className='bg-white p-3 sticky top-0 z-[1]'>
      <nav className='flex justify-evenly items-center'>
        <div className='flex flex-row gap-4'>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'underline' : '')}>
            Home
          </NavLink>
          <NavLink to="/store" className={({ isActive }) => (isActive ? 'underline' : '')}>
            Store
          </NavLink>
        </div>
        <NavLink to="/">
          <h1 className='font-lime font-thin text-[1.7rem]'>dress.CODE</h1>
        </NavLink>
        <CartBadge />
      </nav>
    </header>
  );

}
