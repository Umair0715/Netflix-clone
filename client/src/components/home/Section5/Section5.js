import './Section5.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Section5 = () => {
   return (
      <div className='section5'>
         <div className='section5__bg'>
            <div className='section5__content'>
               <h1>Frequently Asked Questions</h1>
               <div className='section5__accordions'>
                  <Accordion sx={{ background: '#303030' , color: 'white'}}>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography sx={{ fontSize : '1.4rem'}}>What is Netflix?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography sx={{ fontSize : '1.4rem'}}>
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                        <br />
                        <br />
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                     </Typography>
                  </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ background: '#303030' , color: 'white' , marginTop: '5px'}}>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography sx={{ fontSize : '1.4rem'}}>How much does Netflix cost?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography sx={{ fontSize : '1.4rem'}}>
                     Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.
                     </Typography>
                  </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ background: '#303030' , color: 'white' , marginTop: '5px'}}>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography sx={{ fontSize : '1.4rem'}}>Where can I watch?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography sx={{ fontSize : '1.4rem'}}>
                     Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                     <br />
                     <br />
                     You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                     </Typography>
                  </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ background: '#303030' , color: 'white' , marginTop: '5px'}}>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography sx={{ fontSize : '1.4rem'}}>How do I cancel?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography sx={{ fontSize : '1.4rem'}}>
                     Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                     </Typography>
                  </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ background: '#303030' , color: 'white' , marginTop: '5px'}}>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography sx={{ fontSize : '1.4rem'}}>What can I watch on Netflix?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography sx={{ fontSize : '1.4rem'}}>
                     Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                     </Typography>
                  </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ background: '#303030' , color: 'white' , marginTop: '5px'}}>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography sx={{ fontSize : '1.4rem'}}>Is Netflix good for kids?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography sx={{ fontSize : '1.4rem'}}>
                     The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                     <br />
                     <br />
                     Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                     </Typography>
                  </AccordionDetails>
                  </Accordion>
               </div>
            </div>
         </div>
         
      </div>
   )
}

export default Section5;