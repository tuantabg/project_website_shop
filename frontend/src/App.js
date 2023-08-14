import { Outlet } from 'react-router-dom';
import './App.css';

// Import Component - Layout =========>
import Header from './component/layout/header/Header';

function App() {
  return (
    <div className="w-[calc(100vw)]">
      <Header />
      <main className='relative pt-16 md:px-4 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
      </main>
    </div>
  );
}

export default App;
