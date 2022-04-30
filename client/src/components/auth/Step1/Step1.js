import './Step1.scss';
import AuthNav from '../AuthNav/AuthNav'
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import TabletMacOutlinedIcon from '@mui/icons-material/TabletMacOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { Link , useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Step1 = ({user}) => {
   const navigate = useNavigate();
   useEffect(() => {
      if(user?.isSubscribed){
         navigate('/')
      }
   }, [user , navigate])

   return (
      <div className='step1'>
         <AuthNav />
         <div className='step1__content__container'>
            <div className='step1__icons__container'>
               <LaptopMacOutlinedIcon style={{fontSize : '3rem'}}/>
               <DesktopWindowsOutlinedIcon style={{fontSize : '5rem'}}/>
               <TabletMacOutlinedIcon style={{fontSize : '2rem'}}/>
               <PhoneIphoneOutlinedIcon />
            </div>
            <span>STEP 1 OF 3</span>
            <h3>Finising setting up your <br/> account</h3>
            <div className='step1__text'>
               <p>Netflix is personalized for you.</p>
               <p>Create a password to watch on any <br /> device at any time.</p>
            </div>
            <div className='step1__nextBtn'>
               <Link to='/signup/regform-2' className='btn-auth'>Next</Link>
            </div>
         </div>
      </div>
   )
}

export default Step1