import { useState } from 'react'
import Navbar from './Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Createproduct from './Createproduct'
import Registeruser from './Registeruser'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Homepage from './Homepage'
import DetailsPage from './DetailsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/createproduct' element={<Createproduct />}></Route>
    <Route path='/registeruser' element={<Registeruser />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/' element={<Homepage />}></Route>
    <Route path="/details/:_id"  element={<DetailsPage />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
