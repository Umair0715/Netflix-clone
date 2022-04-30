import './AuthNav.scss';
import { Link , useNavigate } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/userActions';


const AuthNav = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { isLoggedIn } = useSelector(state => state.auth);

   const logoutHandler = () => {
      dispatch(logout(navigate));
   }

   return (
      <div className='authNav__container'>
         <div className='authNav'>
            <div className='authNav__logo'>
               <Link to='/'>
                  <img src='/images/logo.png' alt='auth logo' />
               </Link>
            </div>
            <div className='authNav__menu'>
               { 
                  isLoggedIn && isLoggedIn ? 
                  <Link to='#' onClick={logoutHandler}>
                     Sign Out
                  </Link>
                  : 
                  <Link to='/login'>
                     Sign In
                  </Link>   
               }
            </div>
         </div>
      </div>
   )
}

export default AuthNav