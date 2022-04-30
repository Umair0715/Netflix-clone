import './Row.scss';
import { useEffect, useState } from 'react';
import axios from './../../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import 'swiper/swiper.min.css'
import "swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper";



const baseUrl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title , fetchUrl , isLargeRow }) => {
   const [movies , setMovies ] = useState([])
   const [trailerUrl , setTrailerUrl] = useState('');

   useEffect(() => {
      const fetchMovies = async () => {
         const response = await axios.get(fetchUrl);
         setMovies(response.data.results);
         return ;
      }
      fetchMovies();
   }, [fetchUrl]);

   const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };

   const handlePosterClick = movie =>{
      if(trailerUrl){
         setTrailerUrl('')
      }else{
      movieTrailer(movie?.name || movie?.original_name || movie?.title || '')
         .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
         })
         .catch(() => alert('This movie not available now'));

      }
   }

   return (
      <div className='row'>
         <h3 style={{ marginTop : isLargeRow ? '1rem' : 0}}>{title}</h3>
         <div className='row__posters'>
            <Swiper 
               slidesPerView={ isLargeRow ? 7.2 : 6.8}
               loop
               autoplay={{ 
                  delay:isLargeRow ? 3000 : null
               }}
               modules={[Autoplay]}
               breakpoints={{
                  1250: {
                     slidesPerView: isLargeRow ? 6.8 : 6.4 ,
                  },
                  1115: {
                    slidesPerView: isLargeRow ? 5.7 : 5.5 ,
                  },
                  // when window width is >= 768px
                  1050: {
                     slidesPerView: isLargeRow ? 5.2 : 4.8 ,
                  },
                  900: {
                     slidesPerView: isLargeRow ? 4.5 : 4.3 ,
                  },
                  800: {
                     slidesPerView: isLargeRow ? 4.2 : 4.2 ,
                  },
                  700: {
                     slidesPerView: isLargeRow ? 3.9 : 3.7 ,
                  },
                  600: {
                     slidesPerView: isLargeRow ? 3.2 : 3 ,
                  },
                  500: {
                     slidesPerView: isLargeRow ? 2.3 : 2.2 ,
                  },
                  420: {
                     slidesPerView: isLargeRow ? 2 : 2 ,
                  },
                  350: {
                     slidesPerView: isLargeRow ? 1.7 : 1.5 ,
                  },
                  280: {
                     slidesPerView: isLargeRow ? 1.2 : 1.1 ,
                  },
                  
               }}
                
            >
            {
               movies?.map(movie => (
                  <SwiperSlide>
                  <img className={`row__poster ${isLargeRow && 'large__poster'}`} 
                  key={movie.id}
                  src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie?.name}
                  onClick={() => handlePosterClick(movie)}
                  />
                  </SwiperSlide>
               ))
            }
            </Swiper>
         </div>
         {
            trailerUrl.length > 0 && <YouTube videoId={trailerUrl} opts={opts} />
         }
      </div>
   )
}

export default Row