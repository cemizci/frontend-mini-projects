import { useDispatch } from 'react-redux';
import { addItem } from '../app/cartSlice';


const availableItems = [
  { id: 'p1', name: 'Cheeseburger', price: 250 },
  { id: 'p2', name: 'Pizza', price: 400 },
  { id: 'p3', name: 'Patates Kızartması', price: 90 },
  { id: 'p4', name: 'Soğuk Çay', price: 50 },
];

function ProductList() {
  const dispatch = useDispatch();
  
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className='w-full lg:w-2/3'>
       <h2 className="text-3xl font-bold mb-6 text-indigo-300">Ürünler</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>{availableItems.map((item) => (
        <div key={item.id} className='bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-between'>
            <div>
              <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
              <p className="text-xl text-green-400 mt-2">{item.price} TL</p>
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
            >
              Sepete Ekle
            </button>
        </div>
       ))}</div>
    </div>
  )
}

export default ProductList;
// This component displays a list of products and allows users to add them to the cart.
// It uses Redux to manage the cart state and dispatches actions when items are added.