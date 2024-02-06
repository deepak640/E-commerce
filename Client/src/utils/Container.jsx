import React from 'react'
import Header from 'src/shared/Header'
import Footer from 'src/shared/Footer'

const Container = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Container

