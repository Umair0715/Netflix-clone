import { Routes , Route , useLocation } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Step1 from './components/auth/Step1/Step1';
import Step2 from './components/auth/step2/Step2';
import Plan1 from './components/auth/plan1/Plan1';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from './pages/payment/Payment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Main from './pages/main/Main';
import { getUser } from './redux/actions/userActions';
import { useDispatch , useSelector } from 'react-redux';

const Router = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const [stripeKey , setStripeKey] = useState(null);

   const { user } = useSelector(state => state.user);

   const getStripePublishKey = async () => {
      const { data : { key } } = await axios.get('/api/stripe/publish-key')
      setStripeKey(key);
   }


   useEffect(() => {
      dispatch(getUser())
      getStripePublishKey()
   }, [location, dispatch])

   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup/regform-1' element={<Step1 user={user}/>} /> 
         <Route path='/signup/regform-2' element={<Step2 user={user}/>} /> 
         <Route path='/subscription/plan-1' element={<Plan1 user={user}/>} /> 
         <Route path='/subscription/payment' element={
            <Elements stripe={loadStripe(stripeKey)}>
               <Payment user={user}/>
            </Elements>
         }
         />
         <Route path='/pk' element={<Main />} />
      </Routes>
   )
}

export default Router