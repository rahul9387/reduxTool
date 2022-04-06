import React, { useEffect } from 'react'
import MovieListing from '../movieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { ApiKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../features/movies/movieSlice';
const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
     const res = await movieApi.get(`?apikey=${ApiKey}&s=${movieText}&type=movie`)
     .catch(err => console.log(err))
     dispatch(addMovie(res.data))
    };
    fetchData();
  })


  return (
    <div>
      <div className='banner-img '>

      </div>
      <MovieListing />

    </div>
  )
}

export default Home
