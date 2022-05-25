import React from 'react'
import { Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Cats } from '../pages/Cats'
import Home from '../pages/Home'

const DashboardRoutes = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cats" element={<Cats />} />
    <Route path="*" element={<Navigate to='/' />} />
    </Routes>
    </>
  )
}

export default DashboardRoutes