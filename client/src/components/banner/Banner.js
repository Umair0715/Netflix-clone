import { useEffect, useState } from 'react';
import './Banner.scss';
import axios from './../../axios';

const Banner = ({ fetchUrl }) => {
   const [fetch , setFetch] = useState(true);
   const [movie , setMovie] = useState([]);

   useEffect(() => {
      const fetchMovies = async () => {
         const { data : { results } } = await axios.get(fetchUrl);
         setMovie(results[Math.floor(Math.random() * results.length - 1)]);
         return ; 
      } 
      if(fetch){
         fetchMovies();
         setFetch(false);
      }else{
         setInterval(() => fetchMovies() , 10000);
      }
     
   }, [fetchUrl , fetch])

   const truncate = (str , n) => {
      return str?.length > n ? str.substr(0 , n - 1) + "..." : str;
   }

   return (
      <div className='banner' style={{
         backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
         backgroundSize: 'cover',
         backgroundPosition: 'center center'
      }}>
         <div className='banner__contents'>
            <h1>{movie?.name || movie?.original_name || movie?.title}</h1>
            <div className='banner__buttons'>
               <button className='bannerBtn'>Play</button>
               <button className='bannerBtn'>My List</button>
            </div>
            <h3>{truncate(movie?.overview , 150)}</h3>
         </div>
         <div className='banner__fadeBottom'></div>
      </div>
   )
}

export default Banner