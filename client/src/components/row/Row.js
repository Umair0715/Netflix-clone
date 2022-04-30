import './Row.scss';
import { useEffect, useState } from 'react';
import axios from './../../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import 'swiper/swiper.min.css'
import "swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper";
import { CircularProgress } from '@mui/material'


const baseUrl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title , fetchUrl , isLargeRow }) => {
   const [movies , setMovies ] = useState([])
   const [trailerUrl , setTrailerUrl] = useState('');
   const [loading , setLoading ] = useState(false);

   useEffect(() => {
      const fetchMovies = async () => {
         setLoading(true);
         const response = await axios.get(fetchUrl);
         if(response.status === 200){
            setLoading(false);
            setMovies(response.data.results);
            return ;
         }
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
                  delay:isLargeRow ? 3000 : 60 * 1000
               }}
               modules={[Autoplay]}
               breakpoints={{
                  1250: {
                     slidesPerView: isLargeRow ? 6.9 : 6.7 ,
                  },
                  1115: {
                    slidesPerView: isLargeRow ? 5.8 : 5.6 ,
                  },
                  // when window width is >= 768px
                  1050: {
                     slidesPerView: isLargeRow ? 5.4 : 5 ,
                  },
                  900: {
                     slidesPerView: isLargeRow ? 4.7 : 4.5 ,
                  },
                  800: {
                     slidesPerView: isLargeRow ? 4.4 : 4.3 ,
                  },
                  700: {
                     slidesPerView: isLargeRow ? 4 : 3.8 ,
                  },
                  600: {
                     slidesPerView: isLargeRow ? 3.2 : 3 ,
                  },
                  500: {
                     slidesPerView: isLargeRow ? 2.6 : 2.4 ,
                  },
                  410: {
                     slidesPerView: isLargeRow ? 2 : 2 ,
                  },
                  350: {
                     slidesPerView: isLargeRow ? 1.9 : 1.8 ,
                  },
                  280: {
                     slidesPerView: isLargeRow ? 1.5 : 1.4 ,
                  },
                  
               }}
                
            >
            {  
               loading ? 
               <div className='movies__loading'>
                  <CircularProgress color='error' />
               </div>
               :
               movies?.map(movie => (
                  <SwiperSlide  key={movie.id}>
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