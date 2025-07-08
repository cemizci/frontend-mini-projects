import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook, clearBooks, calculateBookTotal } from "./features/book/bookSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const bookItems  = useSelector((state) => state.books.bookItems);
  const bookTotalCount = useSelector((state) => state.books.bookTotalCount);

  useEffect(() => {
    dispatch(calculateBookTotal());
  }, [bookItems, dispatch]);

  const handleAddBook = () => {
    const newBook =  {
      id: Date.now(),
      title: `Kitap${bookItems.length + 1}`,
      author: "Unkown"
    };
    dispatch(addBook(newBook));
  };

  return (
    <div   className="container mx-auto p-4 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <button onClick={handleAddBook} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" >
        Kitap Ekle 
      </button>   
      
      {bookItems.length === 0 ? (
        <p className='text-gray-600'>Henüz kitap eklenmedi.</p>
      ) : (
        <ul className='space-y-2 mb-4'>
          {bookItems.map((book) => (
            <li key={bookItems.id} className="flex justify-between items-center border bg-gray-100  p-2 rounded">
          <div>
            <p className="font-semibold">{book.title}</p>
            <p className="text-sm text-gray-500">{book.author}</p>
          </div>
          <button onClick={() => dispatch(removeBook(book.id))} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm">Sil</button>
        </li>
          ))}
        </ul>
      )}

      {bookItems.length > 0 && (
        <div className='mt-4 p-4 bg-gray-100 rounded'>
          <h2 className='text-lg font-bold'>
            Toplam Kitap: {bookTotalCount}
          </h2>
          <button  
           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
           onClick={() => dispatch(clearBooks())}>
           Temizle
          </button>
        </div>
      )}
      
    </div>
  )
}

export default App
