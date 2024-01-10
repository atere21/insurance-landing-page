import React from 'react';
import logo from "../assets/logo_sanlam.png";

const Footer = () => {
  return (
    <div name="footer" className='max-w-[1200px] h-auto bg-white text-black px-2 relative'>
      <div className='md:mx-auto grid md:grid-cols-6 py-8 mx-[2rem] w-full '>
        <div className='md:col-span-2 flex items-center justify-center md:justify-start w-[50%]'>
          <img className='md:my-0 mx-12 w-60'  src={logo} alt='/' />
        </div>
        <div className='md:col-span-3 flex flex-col md:flex-row md:justify-between w-[50%] md:ml-[10%] mt-4 md:mt-0'>
          <div className='mb-6 md:mb-0'>
            <h6 className='font-bold uppercase pt-2 pb-2 text-blue-600 text-xl'>Our Products</h6>
            <ul className='text-sm'>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Retail</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Corporate</li>
              {/* Add more items as needed */}
            </ul>
          </div>
          <div className='mb-6 md:mb-0'>
            <h6 className='font-bold uppercase pt-2 text-blue-600 pb-2  text-xl'>About Us</h6>
            <ul className='text-sm'>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Sanlam Nigeria</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Our Values</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>FAQs</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Whistleblowing-policy</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Privacy Statement</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Privacy Policy</li>
              {/* Add more items as needed */}
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercase pt-2 pb-2 text-blue-600 text-xl'>Contact Us</h6>
            <ul className='text-sm'>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Contact Us</li>
              <li className='py-1 hover:text-gray-300 cursor-pointer'>Find Our Sales Outlets</li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
