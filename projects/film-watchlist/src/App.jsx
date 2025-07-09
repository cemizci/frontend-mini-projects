import './App.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilm, removeFilm, clearFilm, toggleWatched } from './features/films/filmSlice';

function App() {
  const [title, setTitle] = useState('');
  const { filmItems , totalFilms} = useSelector ((state) => state.films);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;

    dispatch(addFilm(title));
    setTitle('');
  };

  const unwatchedFilmsCount = filmItems.filter(film => !film.watched).length;
 
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="container mx-auto p-4 md:p-8 max-w-3xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-400">Watch List</h1>
          <p className="text-gray-400 mt-2">İzlenecek {unwatchedFilmsCount} film var</p>
        </header>

        <form onSubmit={handleSubmit} className='flex gap-2 mb-10'>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Örn: Matrix' className='flex-grow bg-gray-800 border-1 border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all'></input>
          <button type='submit' className="bg-indigo-600 hover:bg-gray-700 focus:ring-1 focus:ring-gray-500 transition-all text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-101">Ekle</button>
        </form>

        <div className='space-y-4'>
          {filmItems.map((film) => (
            <div key={film.id} 
            className={`flex items-center justify-between bg-gray-800 p-4 rounded-md shadow-md transition-all ${film.watched ? 'opacity-50' : 'opacity-100'}`}>
               <span
                className={`flex-grow text-lg ${
                  film.watched ? 'line-through text-gray-500' : 'text-white'
                }`}
              >
                {film.title}
              </span>

              <div className='flex items-center gap-2'> 
                <button
                  onClick={() => dispatch(toggleWatched(film.id))}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    film.watched
                      ? 'bg-yellow-600 hover:bg-yellow-500'
                      : 'bg-green-800 hover:bg-green-700'
                  }`}
                >
                  {film.watched ? 'İzlenmedi' : 'İzlendi'}
                </button>
                <button
                  onClick={() => dispatch(removeFilm(film.id))}
                  className="bg-red-700 hover:bg-red-600 text-white px-2 py-1 flex items-center justify-center rounded-md font-bold transition-transform transform hover:rotate-12"
                >
                  X
                </button>

                
              </div>
            </div>
                          
          ))}
        </div>
      </div>
      {totalFilms > 0 && (
        <div className='text-center mt-8'>
          <button
            onClick={() => dispatch(clearFilm())}
            className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition-all'
          >
            Tümünü Temizle
          </button>
        </div>
      )}
    </div>
  );  
      
  
}

export default App
