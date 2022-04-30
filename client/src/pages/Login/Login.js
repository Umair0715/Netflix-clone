import './Login.scss';
/* eslint-disable */
import { CircularProgress, FilledInput, FormControl, IconButton, InputAdornment, InputLabel , TextField , Alert } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDispatch , useSelector } from 'react-redux';
import { login } from '../../redux/actions/userActions';

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { loading , error } = useSelector(state => state.auth);
   const [showPassword , setShowPassword] = useState(false);
   const [password , setPassword] = useState('');
   const [ email , setEmail ] = useState('')
   
   const { isLoggedIn } = useSelector(state => state.auth);

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
   };
  
   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const loginSubmitHandler = e => {
      e.preventDefault();
      setPassword(''); 
      dispatch(login({ email , password} , navigate))
   }

   useEffect(() => {
      if(isLoggedIn){
         navigate('/')
      }
   }, [isLoggedIn])

   return (
      <div className='login'>
         <img className='login__banner' src='https://assets.nflxext.com/ffe/siteui/vlv3/59e045df-814d-4342-bf9d-e62ba23e916a/f4316d9f-9aee-49eb-9398-8bdf3296eba8/PK-en-20220418-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='banner' />
         <div className='overlay'></div>
         <div className='login__logo'>
            <Link to='/' className='login__logo'>
               <img src='/images/logo.png' alt='logo' />
            </Link>
         </div>
         <div className='login__form'>
            <h1>Sign In</h1>
            <form onSubmit={loginSubmitHandler}>
               { error && <Alert severity="error">{error}</Alert> }
               <TextField type='email' required id="filled-basic" label="Enter Your Email" variant="filled" color='warning' 
               value={email}
               onChange={e => setEmail(e.target.value)}
               />
               {  
                  (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email) ? '' :
                  <span>Please Enter Valid Email</span>
               }
               <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" color='warning'>
               <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
               <FilledInput
               id="filled-adornment-password"
               type={showPassword ? 'text' : 'password'}
               value={password}
               required
               onChange={e => setPassword(e.target.value)}
               endAdornment={
               <InputAdornment position="end">
                  <IconButton
                     aria-label="toggle password visibility"
                     onClick={handleClickShowPassword}
                     onMouseDown={handleMouseDownPassword}
                     edge="end"
                  >
                     {showPassword ? <VisibilityOff style={{ color: 'white'}}/> : <Visibility style={{ color: 'white'}}/>}
                  </IconButton>
               </InputAdornment>
               }
               label="Password"
               />
               </FormControl>
               {
                  password.length < 8 || password.length > 30 
                  ? <span>Password Must contain 8 to 30 characters</span> 
                  : ''
               }

               <div className='login__submitBtn'>
                  <button
                  disabled={ !(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email) 
                  || 
                  password.length < 8 || password.length > 30 
                  || loading 
                  ? true : false }
                  type='submit'
                  >
                     { loading ? <CircularProgress color='primary'/> : 'Sign In'}
                  </button>

               </div>

            </form>
           
            <div className='register__page__btn'>
               <Link to='/#register'>
                  <span>New to Netflix?</span>
                  <p>Sign Up Now</p>
               </Link>
            </div>

         </div>
      </div>
   )
}

export default Login