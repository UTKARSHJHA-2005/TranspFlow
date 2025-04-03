import Products from './pages/Products'
import './App.css'
import ProductList from './pages/ProductList'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NewsPage from './pages/NewsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/list' element={<ProductList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>

    </>
  )
}

export default App
