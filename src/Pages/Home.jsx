import { useEffect } from 'react'
// import Typed from 'react-typed'
import Navbar from '../Components/Navbar'
import Profileimg from '../../images/Deepak.png'
import Outline from '../../images/Outline.svg'
import Dots from '../../images/Dots.svg'
import Quote from '../../images/quote.svg'
import Rectangle from '../../images/Rectangle.svg'
import View from '../../images/view.svg'
import Docslot from '../../images/DocSlot.svg'
import Todo from '../../images/Todo.svg'
import Chat from '../../images/Chatting-pana.svg'
import AOS from 'aos';
import PortImage from '../../images/Image-pro.svg'
import Union from '../../images/union.svg'
import Twitter from '../../images/Twitter.svg'
import Linkedin from '../../images/Linkedin.svg'
import 'aos/dist/aos.css';
import Typed from 'typed.js';
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const options = {
      strings: ['A Full Stack MERN Developer with the', 'strong foundation in Data  Structures and Algorithms.'],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Navbar>
    <div className="bg-[#282C33] h-full md:w-full w-screen flex" style={{'font-family': 'Fira Code'}}>
        <div className='flex   w-full flex-col'>
          <div className='flex w-full md:flex-row flex-col'> 
          <div className='md:w-1/3 w-full  md:h-full  h-40 flex flex-col justify-center'>
            <div className=' h-1/3 '>
            <h1 className='text-gray-400'>Hi, I am</h1>
            <h1 className='text-fuchsia-500 text-2xl font-bold'>Deepak Kumar Chauhan</h1>
            <p className="typed-text text-gray-400"></p>
            {/* <p className=''> </p> */}
            {/* <Typed className='text-gray-400'
            strings={[
          ]}
          typeSpeed={150}
         backSpeed={100}
         loop
            /> */}
            </div>
            <div className=''>
            <button className="w-32 h-10 text-[14px] border hidden md:inline-block border-fuchsia-400 bg-info text-white  hover:bg-fuchsia-400 transition ease-in-out duration-500">Contact me!!</button>
            </div>
          </div>
          <div className='md:w-2/3 flex'>
            <div className='relative w-28 md:h-32 h-28 md:top-28 md:left-20 top-24 left-12'>
              <img className='w-32' style={{ zIndex: '-1' }} src={Outline} alt="" />
              <img src={Dots} alt="" />
            </div>
            <div className='md:w-full w-96 mr-20 relative z-10'>
              <img className='md:h-80' style={{ zIndex: '1' }} src={Profileimg} alt="" />
            </div>
          </div>

          </div>
          <div className='flex flex-col'>
           <div className='flex '>
           <div>
              <img src={Quote} alt="" />
            </div>
            <div className='hidden md:flex  justify-end w-1/6'>
              <img src={Rectangle} alt="" />
            </div>
           </div>
           <br />
           <div>
            <div className='flex w-full '>
              <div className='flex w-5/6 h-full items-center gap-3'>
              <h1 className='text-fuchsia-400 text-2xl'>#</h1>
              <h1 className='text-white text-2xl'>projects</h1>
              <div className='w-1/2 h-[1.5px] bg-fuchsia-400 flex '></div>
              </div>
              <div className=' w-1/6 flex items-center'>
              <img src={View} alt="" />
              </div>
            </div>
            <br />
            <div id='projectcard' className='flex flex-col  w-full'>
              <div className='flex w-full gap-5'>
              <div className='flex md:flex-row flex-col w-full h-full gap-3'>
                <div data-aos="zoom-in-up" className='h-80 md:w-1/3  w-screen border border-gray-400 flex flex-col'>
                  <div className='border border-gray-400 h-1/2 w-full'>
                    <img className='h-full w-full' src={Docslot} alt="" />
                  </div>
                  <div className='w-full h-1/2 flex flex-col'>
                    <div className='border border-gray-400 h-1/4 w-full'>
                      <p className='text-gray-400 text-[13px]'>REACT HTML JAVA-SCIPT MONGODB NODE.js TAILWIND-CSS EXPRESS.js REDUX</p>
                    </div>
                    <div className='h-3/4 '>
                      <h1 className='text-white text-2xl p-1'>DOC-SLOT</h1>
                      <p className='p-2 text-gray-400'>Vercel server hosting</p>
                      <button className='border border-fuchsia-400 h-6 ms-4 w-1/4 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-white transition ease-in-out duration-500'>Live</button>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in-up" className='h-80 md:w-1/3  w-screen border border-gray-400 flex flex-col md:mt-8'style={{zIndex:1}}>
                <div className='border border-gray-400 h-1/2 w-full '>
                    <img className='h-full w-full' src={Todo} alt="" />
                  </div>
                  <div className='w-full h-1/2 flex flex-col ' >
                    <div className='border border-gray-400 h-1/4 w-full'>
                      <p className='text-gray-400 text-[13px]'>REACT HTML JAVA-SCIPT MONGODB NODE.js TAILWIND-CSS EXPRESS.js</p>
                    </div>
                    <div className='h-3/4'>
                      <h1 className='text-white text-2xl p-1'>TODO-LIST</h1>
                      <p className='p-2 text-gray-400'>Vercel server hosting</p>
                      <button className='border  border-fuchsia-400 h-6 ms-4 w-1/4 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-white transition ease-in-out duration-500'>Live</button>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in-up" className='h-80 md:w-1/3  w-screen border border-gray-400 flex flex-col'>
                <div className='border border-gray-400 h-1/2 w-full '>
                    <img className='h-full w-full' src={Chat} alt="" />
                  </div>
                  <div className='w-full h-1/2 flex flex-col'>
                    <div className='border border-gray-400 h-1/4 w-full'>
                      <p className='text-gray-400 text-[13px]'>REACT HTML JAVA-SCIPT MONGODB NODE.js TAILWIND-CSS EXPRESS.js Websocket.io</p>
                    </div>
                    <div className='h-3/4'>
                      <h1 className='text-white text-2xl p-1'>CHAT-APP</h1>
                      <p className='p-2 text-gray-400'>Vercel server hosting</p>
                      <button className='border  border-fuchsia-400 h-6 ms-4 w-1/4 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-white transition ease-in-out duration-500'>Live</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' flex items-center'>
                <img className='' src={Rectangle} alt="" />
              </div>
              </div>
              <br />
              <div className='w-full flex flex-col'>
                <div className='flex flex-col h-full'>
                  <div className='flex w-full gap-5 '>
                    <div className='flex items-center gap-2'>
                      <h1 className='text-fuchsia-400 text-2xl'>#</h1> <h1 className='text-white text-3xl'>skills</h1>
                    </div>
                    <div className=' flex w-full items-center'>
                    <div className='h-[1.5px] w-1/2 flex bg-fuchsia-400'></div>
                    </div>
                  </div>
                  <br />
                  <div className='md:h-72 w-full  flex '>
                    <div className='w-1/3 md:flex hidden h-full gap-10'>
                    <img className='h-1/2' src={Dots} alt="" />
                    <div className=' h-full w-full md:flex hidden justify-end items-end'>
                    <img className='h-1/2' src={Outline} alt="" />
                    </div>
                    </div>
                    <div className='md:w-2/3 w-full h-full md:flex-nowrap flex-wrap flex gap-4'>
                      <div  className='md:w-1/3  w-1/2 h-1/2  border border-gray-400'>
                        <div className='w-full h-1/3 border-b border-gray-400'>
                          <h1 className='text-white'>Languages</h1>
                        </div>
                        <div className='text-gray-400'>
                          <h3>Java C JavaScript </h3>
                          <h3>Python </h3>
                        </div>
                      </div>
                      <div className='md:w-1/3  w-2/5  h-5/6 flex flex-col gap-4'>
                        <div  className='border border-gray-400 md:w-full  h-1/2'>
                          <div className='w-full h-[38px] border-b border-gray-400'>
                            <h1 className='text-white'>Databases</h1>
                          </div>
                          <div className='w-full text-gray-400'>
                            <h3>Sql Mongodb</h3>
                          </div>
                        </div>
                        <div  className='w-full h-1/2 border  border-gray-400'>
                          <div className='w-full h-[38px] border-b border-gray-400'>
                            <h1 className='text-white'>Frameworks</h1>
                          </div>
                          <div className='text-gray-400'>
                          <h3>React  Nodejs </h3>
                            <h3>Express </h3>
                          </div>
                        </div>
                      </div>
                      <div className='md:w-1/3 w-full h-full mr-1 flex md:flex-col gap-4'>
                        <div  className='md:w-full w-3/4 h-1/2  border border-gray-400'>
                          <div className='w-full h-[38px] border-b border-gray-400 text-white'>
                           <h1>Tools</h1> 
                            </div>
                          <div className='text-gray-400'>
                            <h3>VSCode IntellijIdea Pycharm Linux  Leetcode Git GitHub</h3>
                          </div>
                        </div>
                        <div  className='md:w-full h-1/2 border border-gray-400 '>
                          <div className='w-full h-[38px] border-b border-gray-400 text-white'>
                            <h1>Others</h1>
                          </div>
                          <div className='text-gray-400'>
                          <h3>HTML EJS CSS JWT </h3>
                          <h3>XML OperatingSystem</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className='flex flex-col w-full  h-full'>
                  <div className='flex flex-col md:h-screen h-full w-full'>
                    <div className='flex w-full h-1/4 gap-5  '>
                      <div className='flex  items-center'>
                        <h1 className='text-2xl text-fuchsia-400'># <span className='md:text-3xl text-2xl text-white'>about-me</span></h1>
                      </div>
                      <div className=' w-1/2 md:h-full flex items-center'>
                        <div className='w-full bg-fuchsia-400 h-[1.5px]'></div>
                      </div>
                    </div>
                    <div id='aboutsection' className='w-full flex md:flex-row flex-col-reverse md:h-4/5 h-full '>
                      <div className='md:w-1/2 h-4/5  text-gray-400'>
                        <h1 >Hello, I’m <span className='text-2xl text-fuchsia-400' >Deeapk</span>,</h1>
                        <p> A 2nd-year CSE student at Chitkara University, Punjab, deeply passionate about software development. Specializing in <span className='text-fuchsia-400'>Data Structures and Algorithms </span>(DSA) using Java, 
                          I've tackled 300+ questions on <span className='text-blue-400 border-b border-blue-300'><a href="https://leetcode.com/DeepakChauhan_75/">leetcode</a></span>, showcasing expertise in various DSA concepts.As a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) developer, I transform ideas into powerful applications.
                          I am proficient in languages like Java, C, and JavaScript.</p>
                        <br />
                        <p>My team and I secured the first position in the "Best Web3 Hack" category at the Hack4Sustainability hackathon organized by Thapar University, Punjab.
                        I am proud to be a part of "The Xiting Way". As a technical core member, I actively contribute to the technical aspects, ensuring we deliver innovative and impactful solutions to our clients.
                        </p>
                      </div>
                      <div className='md:w-1/2 md:h-full h-1/5 '> 
                        <img data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="3500" className='w-full md:h-full h-80' src={PortImage} alt="" />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div id='contactsection' className=' h-40 w-full border-t border-gray-400'>
                    <div className='h-full w-full flex flex-col'>
                      <div className='flex '>
                      <div className='flex justify-center flex-col w-full h-full gap-3'>
                    <div className='flex  items-center gap-3'>
                    <img className='h-4' src={Union} alt="" />
                    <h1 className='text-gray-400'>Deepak <span><a href="">kumard18791@gmail.com</a></span></h1>
                    </div>
                    <div className=' w-full'>
                      <h1 className='text-gray-400 text-sm '>Mob.no.:- +91 7505194069</h1>
                    <h1 className='text-gray-400'>A full stack developer</h1>
                    </div>
                    </div>
                    <div className=' w-full h-full flex flex-col justify-center pr-10'>
                      <div className='flex justify-end'>
                      <h1 className='text-gray-400'>media</h1>
                      </div>
                      <div className='flex  justify-end'>
                      <img src={Twitter} alt="" />
                      <img src={Linkedin} alt="" />
                      </div>
                    </div>
                    </div>
                    <div className='w-full h-full  flex items-center md:justify-center'>
                      <h1 className='text-gray-400 flex gap-2'><span className='text-2xl  flex'>©</span> Copyright 2023. Made by Deepak Kumar</h1>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
        </div>
    </Navbar>
  )
}

export default Home