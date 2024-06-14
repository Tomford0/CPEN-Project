import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../components/home/login/Login'
import SignUp from '../components/home/signup/SignUp'
import DashBoard from '../components/home/dashboard/DashBoard'

function AppRouter() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/Dashboard' element={<DashBoard />} />
            </Routes>
        </Router>
    </div>
  )
}

export default AppRouter