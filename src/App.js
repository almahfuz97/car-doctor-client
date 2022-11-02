import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

function App() {
  return (
    <div className='mx-auto max-w-7xl'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
