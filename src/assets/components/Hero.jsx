import logo from '../../img/logo-inverse1-nocopyright.png';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";


const Hero = () => {
  return (
    <section className="bg1">
        <div className="container">
            <div>
                <header  className='flex items-center justify-between text-white py-5 xl:my-8 md:my-5'>
                    <div className='flex justify-between items-center  gap-8'>
                        <div className=' w-36'>
                            <img src={logo} logo alt="logo" />
                        </div>
                       
                        <nav className='md:flex items-center hidden '>
                            <ul className='flex items-center flex-row gap-5 font-semibold '>
                                <li className='border-b-2'>home</li>
                                <li>pages</li>
                                <li>portfolio</li>
                                <li>blog</li>
                                <li>contacts</li>
                            </ul>
                        </nav>
                        <div className='md:flex gap-3 w-20 hidden'>
                            <FaSearch />
                        </div>
                    </div>

                    <div className='flex items-center gap-8'>
                        <div className='xl:inline-flex items-center gap-3 hidden'>
                            <MdOutlineWifiCalling3 
                            size={30}
                            className='border border-none bg-blue-900 rounded-full p-1 color="#fff" '/>
                            08050384472
                        </div>
                        <div className='border border-none rounded-4xl bg-blue-600 py-2 px-8 font-bold text-1xl md:flex hidden'>
                            <button>let's talk</button>
                        </div>
                    </div>
                    <div className='flex gap-3 md:hidden '>
                            <FaSearch size={25}/>
                            <CiMenuBurger size={25} />
                        </div>
                </header>
            </div>

            <div className='xl:my-11 xl:p-10 md:my-5 md:py-7'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-white font-sans text-center mx-7'>
                        <h1 className='text-3xl md:text-6xl leading-10 font-extrabold pb-6 quicksand md:mb-4 mt-16 mb-8 xl:mb-8'>
                            Turning Creative ideas
                            <br /> 
                             into Success
                        </h1>

                        <h2>Lorem ipsum dolor sit amet consectetur adipisci elit.
                            <br />
                             Rerum adipisci ipsam ad praesentium corporis.</h2>
                    </div>

                    <div className='border border-none rounded-4xl bg-blue-400 text-white px-6 py-3 xl:mt-12 xl:mb-12 mb-14 mt-11'>
                        <button className='font-semibold'>
                            Discover Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;