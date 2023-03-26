import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Router = () => {
  return (
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile/:user' element={<Profile />}> </Route>
     </Routes>
  )
}

export default Router;