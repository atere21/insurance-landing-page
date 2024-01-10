import React from 'react';
import img from '../assets/img.png';

const Hero = () => {
  return (
    <div className='text-black md:mt-20 mt-28'>
      <div className='max-w-[800px] mx-auto  h-screen flex flex-col justify-center text-center'>
        <h1 className='relative text-gray-600 font-bold p-2 md:text-7xl sm:text-6xl text-4xl'>
          Sanlam meets  
        </h1>
        <h1 className='relative md:text-7xl sm:text-6xl text-4xl md:py-6 '> your <span className='text-blue-500 relative font-bold'> 
        <div style={{position: 'absolute', margin: '0px', width: '100%', height: '100%', border: '1px solid rgb(176, 215, 239)', transform: 'rotate(-16deg)', left: '0px', top: '5px', borderRadius: '50%'}}></div>
        needs</span></h1>
        <div className='flex justify-center items-center flex-wrap'>
          <div className='max-w-[600px] flex items-center mr-4'>
            <p className='text-xl m-2 mt-6'>🏡 We have the know-how to help you grow, give you the peace of mind, and the security you need. ⏲️</p>
          </div>
          <div className='flex mt-8 justify-center'>
            <button className='text-white mr-5 bg-blue-600 p-2 rounded-md'>Buy Insurance</button>
            <button className='bg-transparent p-2 rounded-md border border-blue-600
             text-blue-600 hover:bg-blue-700 hover:text-white translate-x-0 duration-20'>Get Recommendations</button>
          </div>
        </div>
        <div className='justify-center mx-auto flex'>
          <img src={img} className='w-[30em]  object-contain mt-10' alt='Sanlam' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
