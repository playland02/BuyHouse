import { useState,useContext } from 'react'

//contexts
import { UserContext } from './contexts/UserContext'

//react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


//css
import './App.css'

//pages
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  const {user} = useContext(UserContext)
  

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/BuyHouse/' element={user?(<Home/>):(<Navigate to='/BuyHouse/login'/>)} />
          <Route path='/BuyHouse/register' element={<Register />} />
          <Route path='/BuyHouse/login' element={user?(<Navigate to='/'/>):(<Login/>)}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
