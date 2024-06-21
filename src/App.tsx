import './App.css'
import './index.css'
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  })

  return (
    <div className=' bg-[#F5F5F5] h-[100vh] w-[100vw] overflow-y-scroll'>
      {
        isLoading ? (
          // <div className=' h-full w-full flex items-center justify-center'>
          //   <div className=' flex items-baseline justify-center h-fit'>
          //     <div className=' h-[25px] w-[25px] mx-4 bg-black rounded-full ball'></div>
          //   <h1 className=' text-3xl font-thin'>&lt; Oluwatimilehin /&gt;</h1>
          //   </div>

          // </div>

          <div className="h-full w-full flex items-center justify-center name-reveal-container">
            <div className=' h-[25px] w-[25px] md:h-[50px] md:w-[50px] mx-4 bg-black rounded-full ball'></div>
            <div className="name-reveal text-4xl md:text-7xl font-thin">&lt; Oluwatimilehin /&gt;</div>
          </div>
        ) : (
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        )
      }

    </div>
  )
}

export default App
