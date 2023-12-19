import Union from '../../images/Union.svg'
import Line from '../../images/line.svg'
import Github from '../../images/Github.svg'
import Dribble from '../../images/Dribble.svg'
import Outline from '../../images/Outline.svg'
import { useState } from 'react'
const Navbar = ({children}) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handledisplay=()=>{
    setMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <div className='flex w-full h-full bg-[#282C33] 'style={{'font-family': 'Fira Code'}}>
         <div className='w-1/6 md:flex hidden flex-col item-center'>
          <div className='flex flex-col h-1/3 '>
            <div className='w-full flex justify-center'>
            <img className='h-32  ' src={Line} alt="" />
            </div>
            <div className='flex flex-col items-center'>
              <a href="https://github.com/DeepakKumar1482"> <img className='h-6' src={Github} alt="" /></a>
              <a href=""> <img className='h-6' src={Dribble} alt="" /></a>
            </div>
          </div>
          <div className='flex items-end h-1/2'>
            <img data-aos="flip-right" className='w-5/6' src={Outline} alt="" />
          </div>
          <div className=' w-full h-full flex items-end'>
            <div className='w-full h-40 border-t border-gray-400 mb-[1.5px]'></div>
          </div>
      </div>
      <div className='flex flex-col w-11/12  '>
        <div className="w-full flex md:flex-row flex-col md:justify-around  md:h-10 items-center ">
          <div className='md:w-1/3 w-full flex  items-center md:justify-center justify-start'>
            <div className='flex items-center gap-2'>
            <img className='h-4' src={Union} alt="" />
            <h1 className='text-white'>Deepak</h1>
            </div>
            <div className='md:hidden text-white w-full flex justify-end pr-3'>
              <button className='text-3xl font-bold' onClick={handledisplay}>
              {isMobileMenuOpen ?'✕' :<h1 className='text-3xl'>☰</h1> }
              </button>
            </div>
          </div>
          <div className='text-gray-400 md:flex  w-3/4 justify-center gap-24 hidden'>
           <a href=""> <h3 className='hover:text-white hover:cursor-pointer transition ease-in-out duration-500'><span className='text-fuchsia-500'>#</span>home</h3></a>
            <h3 className='hover:text-white hover:cursor-pointer transition ease-in-out duration-500'><span className='text-fuchsia-500'>#</span><a href="#projectcard">works</a></h3>
            <h3 className='hover:text-white hover:cursor-pointer transition ease-in-out duration-500'><span className='text-fuchsia-500'>#</span><a href="#aboutsection" >about-me</a></h3>
            <h3 className='hover:text-white hover:cursor-pointer transition ease-in-out duration-500'><span className='text-fuchsia-500'>#</span><a href="#contactsection">contacts</a></h3>
          </div>
          {isMobileMenuOpen &&(
          <div className='flex flex-col md:hidden w-full gap-6 text-xl text-gray-400 pt-5 pl-3'>
          <h3 className='hover:text-white hover:cursor-pointer transition ease-in-out duration-500'><span className='text-fuchsia-500'>#</span>home</h3>
            <h3 className='hover:text-white hover:cursor-pointer transition ease-in-out duration-500'><span className='text-fuchsia-500'>#</span>works</h3>
            <h3 className='hover:text-white hover:cursor-pointer transition ease-in-out duration-500'><span className='text-fuchsia-500'>#</span>about-me</h3>
            <h3 className='hover:text-white hover:cursor-pointer transition ease-in-out duration-500'><span className='text-fuchsia-500'>#</span>contacts</h3>
            <div className='flex justify-center gap-10'>
            <a href="https://github.com/DeepakKumar1482"> <img className='h-10' src={Github} alt="" /></a>
            <a href=""> <img className='h-10' src={Dribble} alt="" /></a>
            </div>
          </div>
          )}
        </div>
        <br />
        <div className='w-full h-full'>
            {children}
        </div>
    </div>
    </div>
  )
}

export default Navbar