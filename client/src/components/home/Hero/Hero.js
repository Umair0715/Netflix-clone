import './Hero.scss';
/* eslint-disable */
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch  } from 'react-redux';
import { logout } from '../../../redux/actions/userActions';

const Hero = () => {
   const dispatch = useDispatch(); 
   const navigate = useNavigate();
   const [email , setEmail] = useState('');

   const { isLoggedIn } = useSelector(state => state.auth);
   const { user } = useSelector(state => state.user);

   const mailSubmitHandler = e => {
      e.preventDefault();
      localStorage.setItem('newEmail' , JSON.stringify(email));
      navigate('/signup/regform-1')
   }

   useEffect(() => {
      if(user && user.isSubscribed){
         navigate('/pk');
      }
   }, [navigate , user])

   return (
      <div className='hero'>
         <img className='banner' src='https://assets.nflxext.com/ffe/siteui/vlv3/59e045df-814d-4342-bf9d-e62ba23e916a/f4316d9f-9aee-49eb-9398-8bdf3296eba8/PK-en-20220418-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
         alt='hero' />
         <div className='overlay'></div>

         <nav className='hero__nav'>
            <Link to='/' className='logo'>
               <img src='/images/logo.png' alt='logo' />
            </Link>
            <ul className='nav__menu'>
               {
                  isLoggedIn ? 
                  <li>
                     <Link to='#' onClick={() => dispatch(logout(navigate))}>Sign Out</Link>
                  </li>
                  :
                  <li>
                     <Link to='/login'>Sign In</Link>
                  </li>
               }
            </ul>
         </nav>

         <div className='hero__content' id='#register'>
            <h1>Unlimited movies, TV <br /> shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            
            {/* REGISTER FORM */}
            {
               !isLoggedIn  ? 
               <>
                  <p>Ready to watch? Enter your email to create or restart your membership.</p>
                  <form className='register__form' onSubmit={mailSubmitHandler}>
                     <input 
                     required 
                     type='email'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     placeholder='Email address'
                     />
                     <div>
                        <button type='submit'
                        disabled={ 
                           !(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email) ? true : false
                        }
                        >Get Started</button>
                        <ArrowForwardIosIcon />
                     </div>
            
                  </form>
                  <div className='email__error'>
                  {  
                     email.length === 0 ? <span>Email is Required</span>
                     :
                     (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email) ? '' :
                     <span>Please Enter Valid Email</span>
                  }
                  </div>
               </>
               : 
               <div style={{marginTop : '1rem'}}>
                  <button className='btn-auth' onClick={() => navigate('/subscription/plan-1')} >
                  Finish Your Subscribtion
                  </button>
               </div>
               

            }
           
         </div>


      </div>
   )
}

export default Hero