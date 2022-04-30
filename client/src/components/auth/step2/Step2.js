import './Step2.scss';
import AuthNav from './../AuthNav/AuthNav';
import { TextField , Alert } from '@mui/material'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { signup } from './../../../redux/actions/userActions';
import CircularProgress from '@mui/material/CircularProgress';

const Step2 = ({ user }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [email , setEmail ] = useState(localStorage.getItem('newEmail') ? JSON.parse(localStorage.getItem('newEmail')) : '');
   const [password , setPassword ] = useState('');

   const { loading , error } = useSelector(state => state.auth);

   const handleSignupSubmit = e => {
      e.preventDefault();
      dispatch(signup({ email , password} , navigate ));
      setPassword('');
   }

   useEffect(() => {
      if(user?.isSubscribed){
         navigate('/')
      }
   }, [user , navigate])

   return (
      <div className='step2'>
         <AuthNav />
         
         <div className='step2__content__container'>
         <div className='step2__content'>
            { error && <Alert sx={{ marginBottom : '2rem'}} severity="error">{error}</Alert> }
            <span>STEP 1 OF 3</span>
            <h3>Create a password to start <br /> your membership</h3>
            <div className='step2__text'>
               <p>Just a few more steps and you're done!</p>
               <p>We hate paper work, too.</p>
            </div>
            <div className='step2__form'>
               <form onSubmit={handleSignupSubmit}>
               <TextField id="filled-basic" label="Email" variant="filled" 
               value={email}
               onChange={e => setEmail(e.target.value)}
               required
              
               />
               <TextField id="filled-basic" label="Password" variant="filled" 
               value={password}
               onChange={e => setPassword(e.target.value)}
               error={password.length < 8 ? true : false }
               helperText={password.length < 8 ? 'Password must contain 8 to 30 characters' : ''}
               required 
               />
               <div className='step2__nextBnt'>
                  <button className='btn-auth'
                  type='submit'
                  disabled={password.length < 8 || password.length > 30 || loading ? true : false }>
                     { loading ? <CircularProgress color='primary'/> : 'Next'}
                  </button>
               </div>
               </form>
            </div>
         </div>
         </div>
      </div>
   )
}

export default Step2