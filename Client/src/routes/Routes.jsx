import React, { Suspense } from 'react'
import { Routes as Switch, Route } from 'react-router-dom';
import { Login, Home, Register, Products } from "../utils/Lazy";
import Loader from 'src/utils/Loader';
import Cart from 'src/components/Cart';
import Confirmation from 'src/components/Confirmation';

const Routes = () => {

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route index element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Products/:name' element={<Products />} />
          <Route path='/cart' element={<Cart/>} />
        </Switch>
      </Suspense>
    </>
  )
}

export default Routes
