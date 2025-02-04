import React from 'react';
import Footer from './Footer';
import vision from "/assets/vision-pro.png";
import FluidCursor from '../Components/FluidCursor';

const Test = () => {

  return (
   <div className='cursor-none'>
    <FluidCursor/>
     <div className='bg-gradient-to-br from-purple-800 from-5% via-black via-50% to-indigo-600 to-80% h-[100vh] w-[100vw] flex justify-center items-center'>
        <div className="container-timer flex justify-start items-start z-30 sm:justify-center sm:items-center">
                <div className="container-text-timer h-[50%] w-[100%] relative cursor-default">
                    <div className="image h-[100%] w-[100%]">
                        <img src={vision} alt=""  className='cursor-none'/>
                    </div>
                    <h3 className='text-white text-sm absolute top-1/2 left-[53%] -translate-x-1/2 -translate-y-1/2 w-[80%] sm:text-2xl cursor-none'>CODE YATRA COMING SOON ! STAY TUNED !</h3>
                </div>
            </div>
    </div>
   </div>
  );
};

export default Test;
