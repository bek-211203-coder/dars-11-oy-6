import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Error from './pages/Error'
import Login from './pages/Login'
import Register from './pages/Register'
import Mainleout from './leaut/Mainleout'
import Home from './pages/Home.Jsx'
import Detales from './pages/Detales'


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
    else {
      if (!location.pathname.includes('/Register')) {
        navigate('/Login')
      }
    }
  }, [navigate])

  function Peoportiy({ aser, children }) {
    if (!aser) {
      navigate('/Login')
    }
    return children
  }

  return (
      <Routes>
        <Route
          path='/'
          element={
            <Peoportiy aser={!!token}>
              <Mainleout>
                <Home></Home>
              </Mainleout>
            </Peoportiy>
          }
        />
        <Route
          path='/books/:id'
          element={
            <Peoportiy aser={!!token}>
              <Mainleout>
                <Detales></Detales>
              </Mainleout>
            </Peoportiy>
          }
        />


        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/*' element={<Error />} />
      </Routes>
  )
}

export default App