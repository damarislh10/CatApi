import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <BrowserRouter>
    <Routes>
        <Route 
        path='/login'
        element={
            <PublicRoutes isAuth={isLoggedIn}>
                <Login />
            </PublicRoutes>
        }
        />

    <Route path='/register' element={
              <PublicRoutes isAuth={isLoggedIn}>
                  <Register />
              </PublicRoutes>
            }/>

    <Route path='/*' element={
              <PrivateRoutes isAuth={isLoggedIn}>
                  <DashboardRoutes />
              </PrivateRoutes>
            }/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter