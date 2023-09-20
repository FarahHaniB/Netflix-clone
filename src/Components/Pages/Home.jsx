import React from 'react'
import Main from '../Main'
import Row from '../Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main/>
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpComing}/>
      <Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID='4' title='Popular TV Series' fetchURL={requests.requestPopularTVSeries}/>
    </>
  )
}

export default Home
