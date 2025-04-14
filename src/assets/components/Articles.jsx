import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../img/image-9-890x664.jpg';
import img2 from '../../img/image-10-890x664.jpg';
import img3 from '../../img/image-11-890x664.jpg';
import img4 from '../../img/image-12-890x664.jpg';



const Articles = () => {
  const data = [
     {
       image: img1,
       text: 'Loremetur adipisicing elit.  repudiandae reprehenderit non nemo a.',
       occupation: 'MEDIA SEO',
       date: 'Apr21,2020 . 0 Comments'
     },
     {
       image: img2,
       text: 'Lorem ipsum dolor sit amet consectetue reprehenderit non nemo a.',
       occupation: 'MEDIA SEO',
       date: 'Apr21,2020 . 0 Comments'
     },
     {
       image: img3,
       text: 'Lore adipisicing elit. repudiandae reprehenderit non nemo a.',
       occupation: 'MEDIA SEO',
       date: 'Apr21,2020 . 0 Comments'
     },
     {
       image: img4,
       text: 'dolor sit amet consectetur elit. repudiandat non nemo a.',
       occupation: 'MEDIA SEO',
       date: 'Apr21,2020 . 0 Comments'
     }
   ];


  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  }
  return (
    <section>
      <div className='container mt-20 mb-10'>
        <div className=''>
          <h5 className="font-semibold text-blue-950 text-center">OUR BLOG</h5>
          <h1 className="font-bold text-3xl text-blue-950 text-center">Latest articles</h1>
        </div>

        <div className="slider-container mb-10">
        <div className="slick-list">
        <Slider {...settings}>
       
      </Slider>
      </div>
      </div>
        
        <Slider {...settings}>
          {data.map((d) => (
            <div className="flex items-center justify-start">
              <img src={d.image} alt="" className="w-120 rounded-3xl mb-3" />
              <p className="font-bold text-blue-950 mb-3">
                {d.occupation}
              </p>
              <h2 className="font-bold text-blue-950 mb-3">
                {d.text}
              </h2>
              <p className="font-light text-blue-950">
                {d.date}
              </p>
             
          </div>
          ))}
        </Slider>
       
       
      </div>
    </section>
  )
}

export default Articles