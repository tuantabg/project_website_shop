import { Outlet } from 'react-router-dom';
import './App.css';

// Import Component - Layout =========>
import Header from './component/Layout/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <main className='pt-16 md:px-4'>
          <Outlet />
      </main>
    </div>
  );
}

export default App;
