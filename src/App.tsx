import './App.css'
import './index.css'
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import { useEffect, useRef, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  })


  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true
      });
    }
  }, []);

  

  return (
    <div className=' bg-[#F5F5F5] h-[100vh] w-[100vw] overflow-y-scroll scroll-smooth urbanist'>
      {
        isLoading ? (
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
