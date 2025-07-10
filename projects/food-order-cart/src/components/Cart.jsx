import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from '../app/cartSlice.js';

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

  return (
    <div className='w-full lg:w-1/3 lg:pl-1 mt-12 lg:mt-5'>
        <div className='bg-gray-800 rounded-lg p-6 shadow-lg sticky top-8'>
            <h2 className="text-3xl font-bold mb-6 text-indigo-300">Sepetim</h2>
            {cart.cartItems.length === 0 ? (
                <p className="text-gray-400">Sepetiniz şu anda boş.</p>
            ) : (
                <>
                    <div className='space-y-4 mb-6'>
                        {cart.cartItems.map((item) => (
                            <div key={item.id} className='flex justify-between items-center text-white'>
                                 <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-md font-medium text-gray-400">{item.price} TL x {item.quantity}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => dispatch(removeItem(item.id))} className="bg-gray-700 w-7 h-7 rounded-full font-bold">-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(addItem(item))} className="bg-gray-700 w-7 h-7 rounded-full font-bold">+</button>
                                    </div>
                            </div>
                        ))}
                    </div>
                    <div className='border-t border-gray-700 pt-4 space-y-2'>
                        <div className='flex justify-between text-lg font-semibold text-white'>
                            <span>Toplam Adet:</span>
                            <span>{cart.totalQuantity}</span>
                        </div>
                        <div className='flex justify-between text-2xl font-bold text-green-400'>
                             <span>Genel Toplam:</span>
                             <span>{cart.totalAmount.toFixed(2)} TL</span>
                        </div>
                    </div>
                    <button onClick={() => dispatch(clearCart())} 
                    className="w-full mt-6 bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                    >Sepeti Temizle</button>
                </>
            )}
        </div>
    </div>
  )
}

export default Cart