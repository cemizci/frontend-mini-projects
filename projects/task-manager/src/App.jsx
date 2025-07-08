import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTask, removeTask, clearTasks, calculateTotalTasks } from './features/tasks/taskSlice';

function App() {
  const dispatch = useDispatch();
  const taskItems = useSelector((state) => state.tasks.taskItems);
  const totalTasks = useSelector((state) => state.tasks.totalTasks);

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: `Task ${taskItems.length + 1}`,
      description: "Yapılacak bir şey..",
    };
    dispatch(addTask(newTask));
  }

  useEffect(() => {
    dispatch(calculateTotalTasks());
  },[taskItems, dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-2xl font-bold mb-4'>Görev Yöneticisi</h1>
      <button onClick={handleAddTask}
      className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded mb-4">Görev Ekle</button>

      {taskItems.length === 0 ? (
        <p className="text-gray-600">Henüz Görev Eklenmedi</p>
      ) : (
        <ul>
          {taskItems.map((task) => (
            <li key={task.id}
            className='flex justify-between items-center border p-2 mt-2 rounded'>
              <div>
                <h6 className='font-semibold'>{task.title}</h6>
                <p className='text-sm text-gray-500'>{task.description}</p>
              </div>
              <button onClick={() => dispatch(removeTask(task.id))}
              className='bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded'>Sil</button>
            </li>
          ))}
        </ul>
      )}

      {taskItems.length > 0 && (
        <div className='mt-4 bg-gray-100 p-4 rounded'>
          <h2 className='font-bold text-lg'>Toplam Görev : {totalTasks}</h2>
          <button onClick={() => dispatch(clearTasks())}
          className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mt-4'>Tüm Görevleri Temizle</button>
        </div>
      )}
    </div>
  );
}

export default App
