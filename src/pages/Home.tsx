import { Link } from "react-router-dom"
import me from '../assets/oluwatimilehin.jpg'
import '../slider.css'
import techstack from "../helpers/helper"
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';


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
      <div className=" h-[60vh] w-full flex flex-col items-center justify-center pt-[100px] px-3">
        <div className=" uppercase text-center " ref={sectionRef}>
          <h1 className=" text-2xl sm:text-4xl md:text-5xl">Hello 👋🏽, i am oluwatimilehin</h1>
          <h1 className=" text-xl font-thin sm:text-4xl md:text-5xl">I am a <span className=" text-gray-400">Frontend Developer</span>👨🏽‍💻</h1>
        </div>
        <div className=" w-full flex items-center justify-center mt-5">
          <a href="#about" className=" mx-3 px-6 py-2 rounded-md border-black border-2 text-black">Contact</a>
          <Link target="blank" to='https://drive.google.com/file/d/1jDydZ1C1S0K6vTcNH1oALJ1Nft95Lpby/view?usp=sharing' className=" mx-3 px-6 py-2 rounded-md bg-black border-black border-2 text-white">Resume</Link>
        </div>
      </div>


      {/* About Me */}
      <div ref={sectionRef1} id="about" className=" h-fit w-full px-3 mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-black flex-grow"></div>
          <div className="px-4 text-3xl font-bold uppercase">About Me</div>
          <div className="border-t border-black flex-grow"></div>
        </div>
        <div className=" flex flex-col items-center md:flex-row md:justify-center">
          <div className=" w-full md:w-[55%]">
            <p className=" mb-4 font-light">
              I am a dedicated front-end developer, I bring a wealth of experience and expertise to every project I work on. I am skilled at creating engaging, responsive web applications that are both functional and visually appealing using technologies like <span className=" text-gray-400">ReactJs, TypeScript, Redux, TailwindCSS</span> and more.
            </p>
            <p className=" mb-4 font-light">
              My passion for programming and attention to detail allows me to craft intuitive user interfaces that enhance the user experience. In addition to my technical skills, I am also a strong communicator and collaborator, able to work effectively with both technical and non-technical team members. Whether working independently or as part of a team, I am committed to delivering high-quality work that meets and exceeds project requirements.
            </p>
          </div>
          <div className=" w-full md:w-[35%]">
            <img src={me} alt="" className=" w-[90%] m-auto border-2 border-black shadow-md shadow-slate-400" />
          </div>
        </div>

      </div>



      {/* Project Section */}
      <div id="projects" className=" h-fit w-full px-3 mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-black flex-grow"></div>
          <div className="px-4 text-3xl font-bold uppercase">Projects</div>
          <div className="border-t border-black flex-grow"></div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          {
            techstack.projects.map((project, index) => (
              <div key={index} className=" border-2 border-black flex flex-col sm:flex-row md:w-[85%] m-auto mb-6">
                <img src={project.image} alt="" className=" w-full sm:w-[45%]" />
                <div className=" px-2 py-4 border-t sm:border-t-0 sm:border-l border-black">
                  <h1 className=" font-bold text-xl capitalize"> {project.title}</h1>
                  <p className=" font-light">{project.description}</p>
                  <h1 className=" font-bold mt-4 italic"> {project.tech}</h1>
                  <div className=" w-full flex items-center justify-center mt-5">
                    <Link target="blank" to={project.liveLink} className=" mx-3 px-6 py-2 rounded-md bg-black border-black border-2 text-white">Live Site</Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>


      {/* Techstack */}
      <div id="techstack" className=" h-fit w-full px-3 mb-6 mt-14">
        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-black flex-grow"></div>
          <div className="px-4 text-3xl font-bold uppercase">Techstack</div>
          <div className="border-t border-black flex-grow"></div>
        </div>
        <div className=" flex flex-col items-center justify-center">

          <div className=" slider overflow-x-hidden w-full">

            <div className=" slide-track grid items-center">
              {
                techstack.languages.map((language, index) => (
                  <div key={index} className=" h-[150px] px-3 mx-2 w-[350px] border-2 border-black bg-transparent flex items-center">
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
                  <div key={index} className=" h-[150px] px-3 mx-2 w-[350px] border-2 border-black bg-transparent flex items-center">
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

          {/* <div className=' w-full '>
            <div className=' w-full h-[420px] overflow-y-scroll scrollbar-hide'>
              <div className=' border-b border-[#3D3A3A] flex items-center justify-start py-3'>
                <div className=' bg-black p-3 rounded-md text-[#E93B81]'>
                  <img src={reactLogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>ReactJs</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</h1>
                </div>
              </div>

              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-black p-3 rounded-md text-[#E93B81]'>
                  <img src={typescriptLogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>Typescript</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>TypeScript extends JavaScript by adding types to the language. TypeScript speeds up your development experience by catching errors and providing fixes.</h1>
                </div>
              </div>

              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-black p-3 rounded-md text-[#E93B81]'>
                  <img src={tailwindLogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>Tailwind CSS</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.</h1>
                </div>
              </div>

              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-black p-3 rounded-md text-[#E93B81]'>
                  <img src={reduxLogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>Redux</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.</h1>
                </div>
              </div>

              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-black p-3 rounded-md text-[#E93B81]'>
                  <img src={viteLogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>Vite</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>Vite JS is majorly used to set up a development environment for various frameworks like React and Vue, and even for a Vanilla JavaScript app with a dev server and hot reloading.</h1>
                </div>
              </div>

              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-white p-3 rounded-md text-[#E93B81]'>
                  <img src={githublogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>Github</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>Git is used to store the source code for a project and track the complete history of all changes to that code.</h1>
                </div>
              </div>

              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-black p-3 rounded-md text-[#E93B81]'>
                  <img src={bitbucketlogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>BitBucket</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>Bitbucket Cloud is a Git-based code and CI/CD tool optimized for teams using Jira.</h1>
                </div>
              </div>

              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-white p-3 rounded-md text-[#E93B81]'>
                  <img src={vercelLogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>Vercel</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.</h1>
                </div>
              </div>


              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-black p-3 rounded-md text-[#E93B81]'>
                  <img src={javscriptLogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>JavaScript</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.</h1>
                </div>
              </div>

              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-[#3D3A3A] p-3 rounded-md text-[#E93B81]'>
                  <img src={nextjsLogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>NextJs</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>Next.js is a React framework that gives you building blocks to create web applications.</h1>
                </div>
              </div>

              <div className=' border-b border-[#3D3A3A] mt-4 flex items-center justify-start py-3'>
                <div className=' bg-black p-3 rounded-md text-[#E93B81]'>
                  <img src={htmllogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>HTML</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.</h1>
                </div>
              </div>

              <div className='mt-4 flex items-center justify-start py-3'>
                <div className=' bg-black p-3 rounded-md text-[#E93B81]'>
                  <img src={csslogo} alt="" className=' w-[50px]' />
                </div>
                <div className=' ml-4'>
                  <p className=' text-white'>CSS</p>
                  <h1 className=' text-[#A6A6A6] text-sm'>Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.</h1>
                </div>
              </div>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default Home
