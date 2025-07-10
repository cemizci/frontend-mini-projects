import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from './app/cartSlice.js';
import ProductList from './components/ProductLİst.jsx';
import Cart from './components/Cart.jsx';





function App() {
 
  return (
    <div className='container mx-auto p-4 bg-gray-500 min-h-screen text-white'>
      <ProductList />
      <Cart />
    </div>
  )
}

export default App
