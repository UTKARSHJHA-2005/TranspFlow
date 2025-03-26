import Products from './pages/Products'
import './App.css'
import ProductList from './pages/ProductList'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/list' element={<ProductList />} />
      </Routes>

    </>
  )
}

export default App
