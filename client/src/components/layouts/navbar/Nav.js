import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
   return (
      <nav className='nav'>
         <div className='logo'>
            <img src='/images/logo.png' alt='logo' />
         </div>
         <ul className='nav__menu'>
            <li>
               <Link to='/login'>Sign In</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Nav