import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductList from '../productList/components/ProductList'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

const Home = () => {
  return (
    <Navbar>
      <ProductList></ProductList>
    </Navbar>
  )
}

export default Home