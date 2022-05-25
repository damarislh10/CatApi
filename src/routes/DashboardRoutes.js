import React from 'react'
import { Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { ListCats } from '../components/ListCats'
import Home from '../pages/Home'

const DashboardRoutes = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<ListCats />} />
    <Route path="*" element={<Navigate to='/' />} />
    </Routes>
    </>
  )
}

export default DashboardRoutes