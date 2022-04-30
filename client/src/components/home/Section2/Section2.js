import './Section2.scss';

const Section2 = () => {
   return (
      <div className='section2'>
         <div className='section2__bg'>
            <div className='section2__content'>
               <div className='section2__left'>
                  <img className='section2__left__img' src='/images/section-2.jpg' alt='Mobile png' />
                  <div className='inner'>
                     <div className='inner__content'>
                        <div className='inner__content__img'>
                           <img src='/images/section-2.1.png' alt='stranger thing' />
                        </div>
                        <div className='inner__content__text'>
                           <p>Stranger Things</p>
                           <span>Downloading...</span>
                        </div>
                        <div className='inner__content__gif'>
                           <img src='/images/section-2-gif.gif' alt='Downloading gif' />
                        </div>
                        
                     </div>
                  </div>
               </div>
               <div className='section2__right'>
                  <h1>Download your shows <br /> to watch offline.</h1>
                  <h3>Save your favorites easily and always have something to watch.</h3>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Section2