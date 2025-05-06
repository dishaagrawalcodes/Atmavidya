import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import ExploreMore from './ExploreMore'
import Featured from './Featured'
import Footer from './Footer'
import ExploreData from './ExploreData'

function ExploreLayout() {
  return (
    <>
    <Header/>
    <ExploreMore/>
    <ExploreData/>
    <Featured/>
    <Footer/>    
    </>
  )
}

export default ExploreLayout