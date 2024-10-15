import { Link } from "react-router-dom"
import me from '../assets/timi.jpg'
import '../slider.css'
import techstack from "../helpers/helper"
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { BsMailbox } from "react-icons/bs";
import { GrDocument } from "react-icons/gr";


const Home = () => {
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

  const sectionRef1 = useRef(null);

  useEffect(() => {
    if (sectionRef1.current) {
      ScrollReveal().reveal(sectionRef1.current, {
        origin: 'right',
        distance: '20px',
        duration: 3000,
        delay: 100,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true
      });
    }
  }, []);



  return (
    <div className=" h-full w-full">
      <div id='home' ref={sectionRef} className=" h-[60vh] w-full flex flex-col items-center justify-center pt-[100px] px-3">
        <div className=" uppercase text-center " >
          <h1 className=" text-2xl sm:text-4xl md:text-5xl text-[#023047]">Hello 👋🏽, i am oluwatimilehin</h1>
          <h1 className=" text-xl font-thin sm:text-4xl md:text-5xl text-[#023047]">I am a <span className=" text-gray-400">Frontend Developer</span>👨🏽‍💻</h1>
        </div>
        <div className=" w-full flex items-center justify-center mt-5">
          <a href="#contact" className=" flex items-center justify-center mx-3 px-6 py-2 rounded-md border-[#023047] border-2 text-[#023047] hover:text-white hover:bg-[#023047] duration-500"><BsMailbox className=" mx-2"/> Contact</a>
          <Link target="blank" to='https://drive.google.com/file/d/1jDydZ1C1S0K6vTcNH1oALJ1Nft95Lpby/view?usp=sharing' className=" flex items-center justify-center mx-3 px-6 py-2 rounded-md bg-[#023047] border-[#023047] border-2 text-white hover:text-[#023047] hover:border-2 hover:border-[#023047] hover:bg-transparent duration-500"><GrDocument className=" mx-2"/>Resume</Link>
        </div>
      </div>


      {/* About Me */}
      <div ref={sectionRef1} id="about" className=" h-fit w-full px-3 mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-[#023047] flex-grow"></div>
          <div className="px-4 text-3xl font-bold uppercase text-[#023047]">About Me 🧍🏽‍♂️</div>
          <div className="border-t border-[#023047] flex-grow"></div>
        </div>
        <div className=" flex flex-col items-center md:flex-row md:justify-center text-[#023047]">
          <div className=" w-full md:w-[55%]">
            <p className=" mb-4 font-light">
              I am a dedicated front-end developer, I bring a wealth of experience and expertise to every project I work on. I am skilled at creating engaging, responsive web applications that are both functional and visually appealing using technologies like <span className=" font-bold">NextJs, ReactJs, TypeScript, Redux, TailwindCSS</span> and more.
            </p>
            <p className=" mb-4 font-light">
              My passion for programming and attention to detail allows me to craft intuitive user interfaces that enhance the user experience. In addition to my technical skills, I am also a strong communicator and collaborator, able to work effectively with both technical and non-technical team members. Whether working independently or as part of a team, I am committed to delivering high-quality work that meets and exceeds project requirements.
            </p>
          </div>
          <div className=" w-full md:w-[35%]">
            <img src={me} alt="" className=" w-[90%] m-auto border-2 border-[#023047] shadow-md shadow-slate-400 hover:w-[95%] duration-700" />
          </div>
        </div>

      </div>



      {/* Project Section */}
      <div id="projects" className=" h-fit w-full px-3 mb-6 text-[#023047]">
        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-[#023047] flex-grow"></div>
          <div className="px-4 text-3xl font-bold uppercase">Projects 🧱</div>
          <div className="border-t border-[#023047] flex-grow"></div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          {
            techstack.projects.map((project, index) => (
              <div key={index} className=" border-2 border-[#023047] flex flex-col sm:flex-row md:w-[85%] m-auto mb-6">
                <img src={project.image} alt="" className=" w-full sm:w-[45%]" />
                <div className=" px-2 py-4 border-t sm:border-t-0 sm:border-l border-[#023047]">
                  <h1 className=" font-bold text-xl capitalize"> {project.title}</h1>
                  <p className=" font-light">{project.description}</p>
                  <h1 className=" font-bold mt-4 italic"> {project.tech}</h1>
                  <div className=" w-full flex items-center justify-center mt-5">
                    <Link target="blank" to={project.liveLink} className=" mx-3 px-6 py-2 rounded-md bg-[#023047] border-[#023047] border-2 text-white hover:text-[#023047] hover:border-2 hover:border-[#023047] hover:bg-transparent duration-500 ">Live Site</Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>


      {/* Techstack */}
      <div id="techstack" className=" h-fit w-full px-3 mb-6 mt-14 text-[#023047]">
        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-[#023047] flex-grow"></div>
          <div className="px-4 text-3xl font-bold uppercase">Techstack 💻</div>
          <div className="border-t border-[#023047] flex-grow"></div>
        </div>
        <div className=" flex flex-col items-center justify-center">

          <div className=" slider overflow-x-hidden w-full">

            <div className=" slide-track grid items-center">
              {
                techstack.languages.map((language, index) => (
                  <div key={index} className=" h-[150px] px-3 mx-2 w-[350px] border-2 border-[#023047] bg-transparent flex items-center">
                    <img src={language.image} alt="" className=" h-[40%]" />
                    <div className=" ml-4">
                      <div className=' ml-4'>
                        <p className=' font-semibold'>{language.name}</p>
                        <h1 className='  text-sm'>{language.about}</h1>
                      </div>
                    </div>
                  </div>
                ))
              }
              {
                techstack.languages.map((language, index) => (
                  <div key={index} className=" h-[150px] px-3 mx-2 w-[350px] border-2 border-[#023047] bg-transparent flex items-center">
                    <img src={language.image} alt="" className=" h-[40%]" />
                    <div className=" ml-4">
                      <div className=' ml-4'>
                        <p className=' font-semibold'>{language.name}</p>
                        <h1 className='  text-sm'>{language.about}</h1>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>

      </div>

      {/* Conatcat */}
      <div id="contact" className=" h-fit w-full px-3 mb-6 mt-14 text-[#023047]">
        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-[#023047] flex-grow"></div>
          <div className="px-4 text-3xl font-bold uppercase">Contact Me ☎️</div>
          <div className="border-t border-[#023047] flex-grow"></div>
        </div>

        <form action="mailto:rotimioluwatimilehin19@gmail.com" className=" w-full md:w-[50%] m-auto flex flex-col items-center justify-center">
          <input type="text" placeholder="Name" className=" w-full px-4 py-2 mb-6 border-2 border-[#023047] rounded-md bg-transparent text-[#023047] focus:outline-none placeholder:text-[#023047]"  required/>
          <input type="email" placeholder="Email" className=" w-full px-4 py-2 mb-6 border-2 border-[#023047] rounded-md bg-transparent text-[#023047] focus:outline-none placeholder:text-[#023047]"  required/>
          <textarea placeholder="Message" name="" id="" cols={30} rows={10} className=" w-full px-4 py-2 mb-6 border-2 border-[#023047] rounded-md bg-transparent text-[#023047] focus:outline-none placeholder:text-[#023047]" required></textarea>
          <button className=" font-semibold text-white bg-[#023047] rounded-full px-4 py-2 mb-6 hover:text-[#023047] hover:border-2 hover:border-[#023047] hover:bg-transparent duration-500 ">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Home
