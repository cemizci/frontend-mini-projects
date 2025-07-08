import Header from './components/Header'
import './App.css'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {addToCart, removeFromCart, clearCart , getCartTotal} from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  
  const products = [
  { id: 1, name: "Laptop", price: 1500 , image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/IMac_and_MacBook.jpg" },
  { id: 2, name: "Telefon", price: 800 , image: "https://www.apple.com/tr/iphone/home/images/meta/iphone__kqge21l9n26q_og.png"},
  { id: 3, name: "Kulaklık", price: 150,  image: "https://productimages.hepsiburada.net/s/777/375-375/110000681723081.jpg"},
];

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);


  return (
    <>
      <Header />
      <div className='container mx-auto p-4'>
        <h1 className="text-2xl font-bold mb-4">Ürünler</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {products.map((product) => (
            <div key={product.id} className='border p-4 rounded shadow'>
              <h2 className='text-xl font-semibold'>{product.name}</h2>
              <img src={product.image} alt={product.name} className='w-full h-80 object-cover mb-2'></img>
              <p className='text-gray-600'>{product.price}$</p>
              <button onClick={() => dispatch(addToCart(product))}
                className='mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>Sepete Ekle</button>
            </div>
          ))}
        </div>
      </div>

      <div className='container mx-auto p-4'> 
          <h1 className='text-2xl font-bold mt-8'>Sepet</h1>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className='flex items-center justify-between border-b py-2'>
                <span className='m3-1'>{item.name} - {item.price}$</span>
                <button onClick={() => dispatch(removeFromCart(item.id))} 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">Sil</button>
              </li>
            ))}
          </ul>
          <div className='flex justify-between items-center mt-4'>
            <div>
            {cartItems.length > 0 && (
            <button onClick={() => { if(confirm("Sepeti silmek istediğine emin misin?")) {dispatch(clearCart()); }}}
              className='mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>Sepeti Temizle</button>
          )}
          {cartItems.length === 0 && <p>Sepetiniz boş.</p>}
          </div>
          <h2 className=''>
            Toplam Ürün :  {cartTotalQuantity} <br />
            Toplam Tutar : {cartTotalAmount}$
          </h2>
          </div>
      </div>
        
    </>
  )
}

export default App
