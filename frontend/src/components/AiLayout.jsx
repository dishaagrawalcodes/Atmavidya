import React from 'react'
import AiSearchBar from './AiSearchBar'
import Header from './Header'
import Footer from './Footer'
import AiResponseCards from './AiResponseCards'
import Featured from './Featured'

function AiLayout() {
  return (
    <>
    <Header/>
    <AiSearchBar/>
    <AiResponseCards/>
    <Featured/>    
    <Footer/>  
    </>
  )
}

export default AiLayout