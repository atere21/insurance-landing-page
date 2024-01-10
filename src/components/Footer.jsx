import React from 'react';
import logo from "../assets/logo_sanlam.png";
import { FaPhoneAlt, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLocationSharp, IoLogoFacebook } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-between mb-3 p-10'>
            <div>
            <img src={logo} className='w-[210px]' alt='Sanlam logo' />
            <div className='flex flex-col mt-10 md:flex-row md:items-center'>
          <FaPhoneAlt className='w-[13px]' />
          <div className='ml-3'>
            <p>01-9054444</p>
            <p>01-9054365</p>
          </div>
        </div>
        <div className='flex flex-row items-center mt-2'>
          <IoMdMail className='w-[13px]' />
          <p className='ml-3'>wecare@sanlam.com.ng</p>
        </div>
        <div className='flex flex-row items-center mt-2'>
          <IoLocationSharp className='w-[13px]' />
          <p className='ml-3 text-sm'>NIPOST Building Marina, 34 Marina Rd, Lagos, Nigeria</p>
        </div>
      </div>
      <div className='flex flex-col mt-2 md:mt-0 md:flex-row w-[50%] grid-cols-3'>
        <div className='mr-4 lg:mr-10'>
          <p className='text-xl font-semibold text-[#007dcc] mb-4'>Our Products</p>
          <p className='text-sm mb-2 text-[#414141]'>Retail</p>
          <p className='text-sm text-[#414141]'>Cooperate</p>
        </div>

        <div className='mr-4 lg:mr-10'>
          <p className='text-xl font-semibold text-[#007dcc] mb-4'>About Us</p>
          <p className='text-sm mb-2 text-[#414141]'>Sanlam Nigeria</p>
          <p className='text-sm mb-2 text-[#414141]'>Our Values</p>
          <p className='text-sm mb-2 text-[#414141]'>FAQs</p>
          <p className='text-sm mb-2 text-[#414141]'>Whistleblowing-policy</p>
          <p className='text-sm mb-2 text-[#414141]'>Privacy Statement</p>
          <p className='text-sm mb-2 text-[#414141]'>Privacy Policy</p>
        </div>
        <div>
          <p className='text-xl font-semibold text-[#007dcc] mb-4'>Contact Us</p>
          <p className='text-sm mb-2 text-[#414141]'>Contact Us</p>
          <p className='text-sm mb-2 text-[#414141]'>Find our sales outlets</p>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row justify-between mb-5 p-10'>
      <div>
        <p className='text-xs'>Copyright © 2022. Sanlam Life Insurance Ltd. RC 707564</p>
        <p className='text-xs'>All Rights Reserved and also Authorized and Regulated by the National Insurance Commission. RIC NO. 050</p>
      </div>
      <div className='flex flex-row mt-0 md:mt-2 pr-10'>
        <FaYoutube className='text-xl text-[#007dcc] mr-7' />
        <FaTwitter className='text-xl text-[#007dcc] mr-7' />
        <FaInstagram className='text-xl text-[#007dcc] mr-7' />
        <IoLogoFacebook className='text-xl text-[#007dcc] mr-7' />
        <FaLinkedin className='text-xl text-[#007dcc] mr-10' />
      </div>
    </div>

    
        </div>
  )
}

export default Footer


