import {Outlet, Link} from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className='flex flex-row w-full'>
      <nav className='bg-foreground flex flex-col p-sm'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex flex-col flex-1'>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
