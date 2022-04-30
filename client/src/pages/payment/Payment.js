import './Payment.scss';
import React, { useRef, useState , useEffect } from 'react'
import AuthNav from '../../components/auth/AuthNav/AuthNav';
import {
   CardNumberElement,
   CardCvcElement,
   CardExpiryElement,
   useStripe,
   useElements,
 } from "@stripe/react-stripe-js";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/actions/userActions';

const Payment = ({ user }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const submitBtn = useRef();
   const stripe = useStripe();
   const elements = useElements();

   const [ paymentLoading , setPaymentLoading ] = useState(false);
   const amount = Number(10455 * 100);

   const paymentSubmitHandler = async e => {
      setPaymentLoading(true);
      e.preventDefault();
      submitBtn.current.disabled = true ;
      try{
         const result = await axios.post('/api/stripe/payment-intent' , {
            amount
         });
         if(result.status === 200 ){
            const confirmPayment = await stripe.confirmCardPayment(
               result.data.client_secret,
               {
                  payment_method: {
                     card: elements.getElement(CardNumberElement),
                  },
               }
            );
            if(confirmPayment.paymentIntent.status === "succeeded"){
               dispatch(updateUser(user._id , { isSubscribed : true }));
               alert('Your Subsctiption done successfully.')
               setPaymentLoading(false);
               navigate('/pk');
            }else{
               setPaymentLoading(false);
               submitBtn.current.disabled = false;
               alert('Something went wrong during Subscription')
            }
         }

      }catch(err){
         console.log(err);
      }
   }

   useEffect(() => {
      if(user?.isSubscribed){
         navigate('/')
      }
   }, [user , navigate])


   return (  
      <div className='payment__wrapper'>
         <AuthNav />
         <div className='payment__container'>
            <div className='payment'>
               <span>STEP 3 OF 3</span>
               <h3>Confirm Your Subscription</h3>
               <p>Just one step to go</p>
               <h6>Card Info</h6>
               <form className="paymentForm" onSubmit={paymentSubmitHandler}>
                  <div className='formItem'>
                     <CreditCardIcon />
                     <CardNumberElement className="paymentInput" />
                  </div>
                  <div className='formItem'>
                     <EventIcon />
                     <CardExpiryElement className="paymentInput" />
                  </div>
                  <div className='formItem'>
                     <VpnKeyIcon />
                     <CardCvcElement className="paymentInput" />
                  </div>
 
                  <button
                     ref={submitBtn}
                     type="submit"
                     className="paymentFormBtn btn-auth"
                     style={{ width: '100%'}}
                  >
                     {paymentLoading ? 'Please wait...' : `Pay RS:${amount}` }
                  </button>
               </form>
            </div>
         </div>
     </div>
   )
}

export default Payment