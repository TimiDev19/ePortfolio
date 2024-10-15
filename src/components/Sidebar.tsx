import me from '../assets/timi.jpg'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';


const Sidebar = () => {
    const [isDropdown, setIsDropdown] = useState(false)
    const sectionRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current) {
            ScrollReveal().reveal(sectionRef.current, {
                origin: 'top',
                distance: '20px',
                duration: 1000,
                delay: 200,
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                reset: true
            });
        }
    }, []);
    return (
        <div ref={sectionRef} className=' z-50 fixed w-full'>
            <div className={` bg-white  h-[100px] ${!isDropdown && `border-b border-b-[#023047]`} p-2 flex w-full items-center justify-between`}>
                <div className=' flex items-center justify-center h-full'>

                    <img src={me} alt="" className=' h-[70%] rounded-full border-2 border-[#023047] mr-2' />

                    <div>
                        <h1 className=' text-[#023047]'>Oluwatimilehin Rotimi</h1>
                        <h1 className=' text-gray-500'>Software Engineer</h1>
                    </div>
                </div>

                <div className=' hidden md:flex items-center'>
                    <a href='/#home'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>Home</li></a>
                    <a href='/#about'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>About</li></a>
                    <a href='/#projects'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>Projects</li></a>
                    <a href='/#techstack'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>Techstack</li></a>
                    <a href='/#contact'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>Contact</li></a>
                </div>

                <div onClick={() => setIsDropdown(!isDropdown)} className=' md:hidden'>
                    {
                        isDropdown ? (<CloseOutlinedIcon className=' cursor-pointer text-[#023047]' />) : (<MenuOutlinedIcon className=' cursor-pointer text-[#023047]' />)
                    }
                </div>
            </div>
            {
                isDropdown && <div className=' bg-white border-b-[#023047] border-b'>
                    <ul >
                        <a href='/#home'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>Home</li></a>
                        <a href='/#about'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>About</li></a>
                        <a href='/#projects'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>Projects</li></a>
                        <a href='/#techstack'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>Techstack</li></a>
                        <a href='/#contact'><li className=' py-1 mb-1 hover:bg-[#f5f5f5] px-4 hover:text-[#333333] text-[#023047] duration-500 flex items-center font-thin'>Contact</li></a>
                    </ul>
                </div>
            }

        </div>
    )
}

export default Sidebar
