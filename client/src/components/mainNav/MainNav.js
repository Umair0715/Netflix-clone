import './MainNav.scss'
import { Link , useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux';


const MainNav = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate();

   return (
      <div className='main__nav__container'>
         <div className='main__nav'>
            <Link to='/pk' className='main__nav__logo'>
               <img src='/images/logo.png' alt='Netflix logo' />
            </Link>
            <div>
               <button onClick={() => dispatch(logout(navigate))}>Sign Out</button>
            </div>
         </div>
         
      </div>
   )
}

export default MainNav