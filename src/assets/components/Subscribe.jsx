import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaQuoteLeft } from "react-icons/fa";

import img1 from '../../img/image-13-300x300.jpg';
import img2 from '../../img/image-1-300x300.jpg';
import img3 from '../../img/image-2-300x300.jpg';

const Subscribe = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const data = [
    {
      image: img1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  repudiandae reprehenderit non nemo a.',
      name: 'John Doe',
      occupation: 'Expert'
    },
    {
      image: img2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.repudiandae reprehenderit non nemo a.',
      name: 'sjay anna',
      occupation: 'newbie'
    },
    {

      image: img3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. repudiandae reprehenderit non nemo a.',
      name: 'paul walker',
      occupation: 'analist'
    }
  ];

 
  return (
    <section >
      <div className="container">
      <div className="flex items-center justify-center flex-col md:flex-row ">
        <div className="">
          <h1 className="text-2xl font-bold text-blue-950 text-start md:text-3xl  xl:text-4xl xl:pr-10">
            Subscribe for the exclusive updates!
          </h1>
        </div>
        <div>
        <div className="flex flex-row gap-4">
          <input 
            type="text" 
            placeholder='Enter your email addr...'
            className="placeholder-gray-500 border border-none rounded-4xl bg-white text-black px-6 py-3 xl:mt-12 xl:mb-4 my-6 md:w-65 md:mb-4 xl:w-130"
          />
          <button className='border border-none rounded-4xl bg-blue-400 text-white px-6 py- xl:mt-12 xl:mb-4 my-6 md:mb-4'>
            Subscribe
          </button>
        </div >
        <div className="flex justify-center items-center flex-row pb-8 gap-4">
          <input type="checkbox" name="" id="" />
          <p >I agree to the<span className="underline"> privacy policy.</span></p>
        </div>
        </div>
      </div>

          <Slider {...settings}>
            {data.map((d) => (
              <div>
                <div className='flex items-center justify-center flex-col'>
                  <img src={d.image} alt="" width={80} className='rounded-full ' />
                  <h3 className='text-center font-light py-8'>{d.text}</h3>
                </div>
                <div className='flex items-center justify-center flex-col'>
                <FaQuoteLeft className=' text-emerald-700'/>
                  <h3 className='text-center font-bold'>{d.name}</h3>
                  <p className='text-center font-light'>{d.occupation}</p>
                </div>
              </div>
            ))}
          </Slider>
          </div>
    </section>
  )
}

export default Subscribe