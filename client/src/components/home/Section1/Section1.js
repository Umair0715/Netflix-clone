import './Section1.scss';

const Section1 = () => {
   return (
      <div className='section1'>
         <div className='section1__bg'>
         <div className='section1__content'>
            <div className='section1__left'>
               <h1>Enjoy on your TV.</h1>
               <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
            </div>
            <div className='section1__right'>
               <img src='/images/desktop.png' alt='desktop' />
               <div className='story__video__container'>
                  <video class="story__video" autoplay='autoplay' muted loop>
                     <source src="/images/section-1.mp4" type="video/mp4" />
                  </video>
               </div>
            </div>
         </div>
         </div>
      </div>
   )
}

export default Section1