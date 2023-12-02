import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Pages/Dashboard';
import Task from './Components/Tasks/Task';
import AddTask from './Components/Tasks/AddTask';

const App = () => {

  return (
    <BrowserRouter>
      <div className='main flex flex-col h-screen'>
        <Header />
        <div className='flex flex-1'>
          <Navbar />
          <section style={{ Height: '100%' }} className='flex-1 mt-14 ml-16'>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/tasks' element={<Task />} />
              <Route path='/tasks/addtask' element={<AddTask />} />
            </Routes>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
