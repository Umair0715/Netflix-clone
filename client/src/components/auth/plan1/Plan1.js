import './Plan1.scss';
import AuthNav from './../AuthNav/AuthNav';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Plan1 = ({ user }) => {
   const navigate = useNavigate();
   useEffect(() => {
      if(user?.isSubscribed){
         navigate('/')
      }
   }, [user , navigate])

   return (
      <div className='plan1__container'>
         <AuthNav />
         <div className='plan1__content__container'>
            <div className='plan1__content'>
               <div className='plan1__icon'>
                  <CheckCircleOutlineIcon />
               </div>
               <span>STEP 2 OF 3</span>
               <h3>Single Plan Offering</h3>
               <div className='plan1__text'>
                  <div>
                     <CheckIcon />
                     <p>One time Subscription </p>
                  </div>
                  <div>
                     <CheckIcon />
                     <p>No refund system</p>
                  </div>
                  <div>
                     <CheckIcon />
                     <p>No ads and extra fee</p>
                  </div>
                  <div>
                     <CheckIcon />
                     <p>All devices support</p>
                  </div>
                  <div>
                     <CheckIcon />
                     <p>Everything on Netflix for one low price</p>
                  </div>
               </div>
               <div className='plan1__info'>
                  <div>
                     <p><b>Plan:</b></p>
                     <p style={{color: 'red'}}>Ultra Premium</p>
                  </div>
                  <div>
                     <p><b>Fee:</b></p>
                     <p>RS11,455</p>
                  </div>
                  <div>
                     <p><b>Quality:</b></p>
                     <p>4K+HDR</p>
                  </div>
               </div>
               <div className='plan1__nextBtn'>
                  <Link to='/subscription/payment' className='btn-auth'>Next</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Plan1