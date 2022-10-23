import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Singlepage from '../Pages/Singlepage'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const Allroute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/post/:id" element={<Singlepage />} />
        </Routes>
    )
}

export default Allroute
