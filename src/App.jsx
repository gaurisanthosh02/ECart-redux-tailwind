
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:id/view' element={<View/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
