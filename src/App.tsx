import './App.css'
import './index.css'
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';


function App() {

  return (
    <div className=' bg-[#F5F5F5] h-[100vh] w-[100vw] overflow-y-scroll'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
