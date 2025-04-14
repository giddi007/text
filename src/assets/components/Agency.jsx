import React, { useState } from 'react'
import pic1 from '../../img/h3r.png'
import pic2 from '../../img/h3l.png'
import svg1 from '../../img/polaroid-svgrepo-com.svg'
import svg2 from '../../img/airplane-svgrepo-com.svg'
import Countup from "react-countup";


const Agency = () => {

  return (
    <section className='my-20'>
        <div className='container md:flex '>

          <div className='flex flex-col  md:flex-row'>
          <div className='relative mb-60 h-30 w-80 md:w-190 md:pr-10'>
            <div className='absolute'>
              <img 
                src={pic2} 
                alt="" 
                width={260}
                className='xl:w-80'
              />
            </div>
            <div className='absolute top-18 md:top-23 left-20 md:left-24 '>
              <img 
                src={pic1} 
                alt="" 
                width={260}
                className='xl:w-78'
              />
            </div>
          </div >


          <div className='md:pl-10'>
              <div className='flex flex-col justify-start text-blue-950 gap-3'>
                <p className='text-2xl font-semibold md:'>
                  Creative agency
                </p>
                <h1 className='text-3xl font-bold md:text-2xl'>
                  We help your business grow
                </h1>
                <p className='font-light color-[#6b6e7c] md:mb-2'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, necessitatibus at. Ea, voluptatum facere. Illum.
                </p>
              </div>
              
              <div className='flex items-center justify-center flex-col gap-6 mb-10'>
                  <div className='flex items-center gap-6'>
                    <div className=''>
                      <img src={svg1} alt="" width={100} />
                    </div>
                    <div>
                      <h2 className='text-3xl font-bold md:mb-2 md:text-2xl'>
                        creative design
                      </h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing, illo?</p>
                    </div>
                  </div>
                
                <div className='flex items-center gap-6 '>
                  <div >
                    <img src={svg2} alt="" width={100} />
                  </div>
                  <div className=''>
                    <h2 className='text-3xl font-bold md:mb-2 md:text-2xl'>
                      Endless possibilities
                    </h2>
                    <p>Lorem sit amet consectetur adipisicing,sit amet cons?</p>
                  </div>
                </div>
              </div>
          </div>
          </div>

        <div className=' md:mb-15'>
         <div className='flex items-center justify-center gap-6 flex-col md:flex-row md:gap-16'>
            <div >
              <div className='relative xl:border-e-blue-500 xl:border-r-1 xl:pr-10'>
                <Countup 
                  end={90} 
                  duration={5}
                  delay={2}
                  className="text-9xl xl:text-[120px] font-extrabold text-amber-50 "
                />
                <p className='text-2xl font-semibold absolute top-11 right-7 xl:right-16'>
                  Projects
                </p>
              </div>
            </div>
            
            <div  className='relative  xl:border-e-blue-500 xl:border-r-1 xl:pr-10'>
              <Countup 
                end={65} 
                duration={5}
                delay={2}
                className="text-9xl xl:text-[120px] font-extrabold text-amber-50"
              />
              <p className='text-2xl font-semibold absolute top-11 right-7 xl:right-16'>
                People
              </p>
            </div>
             
            <div  className='relative  xl:border-e-blue-500 xl:border-r-1 xl:pr-10'>
              <Countup 
                end={10} 
                duration={5}
                delay={2}
                className="text-9xl xl:text-[120px] xl:text-6xl font-extrabold text-amber-50 "
              />
              <p className='text-2xl font-semibold absolute top-11 right-6 xl:right-16'>
                years
              </p>
            </div>
            <div  className='relative '>
              <Countup 
                end={15} 
                duration={5}
                delay={2}
                className="text-9xl xl:text-[120px] font-extrabold text-amber-50 "
              />
              <p className='text-2xl font-semibold absolute top-10 right-4 '>
                Offices
              </p>
            </div>
         </div>
        </div>

      </div>
    </section>
  )
}

export default Agency;