import { Grid } from '@mui/material';
import './Footer.scss';

const Footer = () => {
   return (
      <div className='footer'>
         <div className='footer__bg'>
            <div className='footer__content'>
               <Grid container>
                  <Grid item xs={6} sm={4} md={3}>
                     <ul>
                        <li>FAQ</li>
                        <li>Investors</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                     </ul>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                     <ul>
                        <li>Help Center</li>
                        <li>jobs</li>
                        <li>Cookies</li>
                        <li>Legal Notice</li>
                     </ul>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                     <ul>
                        <li>Account</li>
                        <li>Ways to Watch</li>
                        <li>Information</li>
                        <li>Only on Netflix</li>
                     </ul>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                     <ul>
                        <li>Media Center</li>
                        <li>Terms Of Use</li>
                        <li>Contact Us</li>
                     </ul>
                  </Grid>
               </Grid>
            </div>
         </div>
      </div>
   )
}

export default Footer