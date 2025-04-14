import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../img/image-14.png';
import img2 from '../../img/image-15.png';
import img3 from '../../img/image-16.png';
import img4 from '../../img/image-17.png';







const Solutions = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <div className='container '>
        <div className="xl:flex">
          <div className="xl:w-2/1">
          <h3 className='text-blue-950 font-bold pb-4 xl:text-3xl'>
            CREATIVE SOLUTIONS
          </h3>
          <h1 className='text-blue-950 font-bold text-3xl pb-4 xl:text-5xl'>
            We make unique & memorable brands
          </h1>
          </div>
          <div className="">
          <p className='text-blue-950 font-light pb-4 xl:text-2xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus nulla veniam omnis, distinctio autem quos magni, odit rerum eos sit molestiae. Ab?
          </p>
          <p className='text-blue-950 font-light pb-4 xl:text-2xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus nulla veniam omnis,  repellat error! odit rerum eos sit molestiae. Ab?
          </p>
          <h3 className='text-blue-950 font-bold underline leading-8 xl:pb-20'>
            Read More
          </h3>
          </div>
        </div>

        <div className="slider-container mb-10">
        <div className="slick-list">
        <Slider {...settings}>
        <div >
          <h3><img src={img1} alt=""  className="rounded-2xl "/></h3>
        </div>
        <div>
          <h3><img src={img2} alt="" className="rounded-2xl"/></h3>
        </div>
        <div>
          <h3><img src={img3} alt=""  className="rounded-2xl"/></h3>
        </div>
        <div>
          <h3><img src={img4} alt="" className="rounded-2xl"/></h3>
        </div>
        <div>
          <h3><img src={img1} alt="" className="rounded-2xl"/></h3>
        </div>
        <div>
          <h3><img src={img2} alt=""  className="rounded-2xl"/></h3>
        </div>
      </Slider>
      </div>
      </div>
    
    

        
        </div>
        
       

   </section>
  )
}

export default Solutions;


// import React from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';


// export default () => {
//   return (
//     <Splide
//       options={ {
//         rewind: true,
//         gap   : '1rem',
//       } }
//       aria-label="My Favorite Images"
//     >
//       <SplideSlide>
//         <img src="image1.jpg" alt="Image 1"/>
//       </SplideSlide>
//       <SplideSlide>
//         <img src="image2.jpg" alt="Image 2"/>
//       </SplideSlide>
//       <SplideSlide>
//         <img src="image3.jpg" alt="Image 3"/>
//       </SplideSlide>
//     </Splide>
//   );
// }
