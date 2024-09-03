import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Gentscollection from '../Components/Gentscollection'
import Ladiescollection from '../Components/Ladiescollection'

import { Gents } from '../data'

const Mainpage = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Gentscollection/>
      <Ladiescollection/>
      <Footer/>
    </div>
  )
}

export default Mainpage
