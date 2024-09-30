import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './components/cart'
import Order from './pages/Order'
import ItemsPage from './pages/Itemspage'
import MyAccount from './pages/MyAccount'
import ChefsBhojan from './pages/ChefsStory'

function App() {
  return (
    <div className='w-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chefstory" element={<ChefsBhojan />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route exact path="/items/:genre" element={<ItemsPage />} />
        <Route path="/MyAccount" element={<MyAccount />} />
      </Routes>
    </div>
  )
}

export default App
