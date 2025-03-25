import React from 'react'
import './index.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Product from './pages/Product'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-[16px] sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/placeorder' element={<Placeorder/>} />
        <Route path='/product/:productID' element={<Product/>} />
        <Route path='/about' element={<About/>} />


      </Routes>
       
    </div>
  )
}

export default App