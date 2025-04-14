import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className=' py-10 bg-gray-800 border-0 shapedividers_com-8832 pt-30'>
        <div className='md:flex md:items-start md:justify-between md:px-5'>
        <div className='md:flex md:items-start md:justify-between md:px-5'>
          <div className='my-5 md:mr-12 md:flex md:items-start'>
            <ul>
              <li className='font-extrabold mb-1'>Office</li>
              <li>785 15h Street, Office 478</li>
              <li>Berlin, De 81566</li>
              <li className='underline'>info@email.com</li>
              <li className='font-extrabold'>+1 840 841 25 69</li>
            </ul>
          </div>
          <div className='flex items-start justify-between md:gap-12'>
            <div >
              <ul className='mb-5'>
                <li className='font-extrabold mb-1'>Links</li>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='font-extrabold mb-1'>Socials</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Dribble</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='md:flex md:items-center md:justify-start md:flex-col'>
          <h2 className='font-extrabold '>
            Newsletter
          </h2>

          <div className='flex items-center justify-center gap-2'>
            <input type="email" name="" id="" placeholder='Enter your email address' className='placeholder-gray-500 border border-none rounded-4xl  text-black px-6 py-3 xl:mt-12 xl:mb-4 mt-3 md:mb-4 xl:w-130 bg-transparent md:w-40'/>
            <button className='border border-none rounded-4xl bg-blue-400 text-white px-6 py-3 xl:mt-12 xl:mb-4 mt-3 md:mb-4'> yup</button>
          </div>
          <div  className='py-2 flex items-center justify-center gap-2 mb-8'>
            <input type="checkbox" name="" id="" />
            <p>I agree to the <span className='underline'>Privacy Policy</span></p>
          </div>
        </div>
        </div>
        <hr />
        <h3 className='py-3 md:mt-20'>
          AxiomThemes 2025. All Rights Reserved
        </h3>
      </div>
    </footer>
  )
}

export default Footer




