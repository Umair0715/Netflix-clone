import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.scss';

const Form = () => {
   const navigate = useNavigate();
   const [email , setEmail] = useState('');

   const mailSubmitHandler = e => {
      e.preventDefault();
      localStorage.setItem('newEmail' , JSON.stringify(email));
      navigate('/signup/regform-1')
   }

   return (
      <form className='register__form' onSubmit={mailSubmitHandler}>
         <input 
         required 
         type='email'
         value={email}
         onChange={e => setEmail(e.target.value)}
         placeholder='Email address'
         />
         <div>
            <button type='submit'>Get Started</button>
            <ArrowForwardIosIcon />
         </div>
         
      </form>
   )
}

export default Form