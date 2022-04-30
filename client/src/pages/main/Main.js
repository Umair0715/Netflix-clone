import './Main.scss'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Row from '../../components/row/Row'
import requests from '../../requests'
import Banner from '../../components/banner/Banner'
import MainNav from '../../components/mainNav/MainNav'

const Main = () => {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.user)
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user?.isSubscribed === false || !isLoggedIn) {
      navigate('/')
    }
  }, [user, navigate, isLoggedIn])

  return (
    <div className="main">
      <MainNav />
      <Banner fetchUrl={requests.fetchTrending}/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  )
}

export default Main
