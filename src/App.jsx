import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Navbar, Header, Dashboard, Task, AddTask, Feed, Login, SignUp }
  from './index.js';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        <Route
          path='/*'
          element={
            <div className='main flex flex-col h-screen'>
              <Header />
              <div className='flex flex-1'>
                <Navbar />
                <section style={{ Height: '100%' }} className='flex-1 mt-14 ml-16'>
                  <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/tasks' element={<Task />} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/tasks/addtask' element={<AddTask />} />
                  </Routes>
                </section>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>


  );
};

export default App;
