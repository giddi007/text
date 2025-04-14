import React from 'react';

import img1 from '../../img/h3i1.png';
import img2 from '../../img/h3i2.png';
import img3 from '../../img/h32l.png';
import img4 from '../../img/h32r.png';
import imga from '../../img/partner-1-copyright.png';
import imgb from '../../img/partner-2-copyright.png';
import imgc from '../../img/partner-3-copyright.png';
import imgd from '../../img/partner-4-copyright.png';
import imge from '../../img/partner-5-copyright.png';
import imgf from '../../img/partner-6-copyright.png';


const Provider = () => {
  return (
    <section>
      <div className="container">
        <div className=''>
          <div className=''>
            <div className='mt-17'>
              <div className='md:flex md:items-center md:justify-start'>
                <div className='flex items-center justify-center flex-col mb-10 md:w-90 xl:w-140'>
                  <h3 className='font-bold md:justify-start md:text-2xl xl:mb-1 xl:text-4xl'>
                    Who we are
                  </h3>
                  <h1 className='font-bold text-4xl md:text-start md:text-4xl xl:mb-5 xl:text-5xl'>
                    We provide best digital services
                  </h1>
                  <p className='font-light md:text-start md:text-sm xl:text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eum ipsam magni qui blanditiis!
                  </p>
                  <button className='border border-none rounded-4xl bg-blue-400 text-white px-6 py-4 xl:mt-10 xl:mb-4 my-6 md:mb-4'>
                    Discover Now
                  </button>
                </div>
              </div>
            </div>

            <div className='block'>
              <div className='relative md:bottom-75 xl:bottom-100'>
                <div>
                  <img src={img1} alt="" className='absolute top-1 right-50 md:top-1 md:right- xl:right-75 xl:w-25 md:w-16'/>
                  <img src={img2} alt="" className='absolute top-60 right-2 xl:right-2 xl:top-80 xl:w-25 md:w-16 md:top-'/>
                </div>
                <div>
                  <img src={img4} alt=""  className=' w-50 absolute right-0 rounded-3xl md:w-50 xl:w-70'/>
                  <img src={img3} alt=""  className=' w-50 absolute top-17 right-20 rounded-3xl md:w-50 md:top-16 md:right-18 xl:top-23 xl:right-30 xl:w-70'/>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='mt-88 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 md:mt-30 '>
              <img src={imga} alt="" className=''/>
              <img src={imgb} alt="" className=''/>
              <img src={imgc} alt="" className=''/>
              <img src={imgd} alt="" className=''/>
              <img src={imge} alt="" className=''/>
              <img src={imgf} alt="" className=''/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Provider