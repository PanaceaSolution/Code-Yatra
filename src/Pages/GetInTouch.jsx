import React from 'react'

const GetInTouch = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[50vh] w-[100vw] gap-6 md:h-[80vh]'>
        <h1 className='text-2xl text-white text-center tracking-wider font-semibold sm:text-4xl'>Get In Touch</h1>
        <form action="" className='grid grid-cols-2 gap-6 text-white p-2 z-30'>
           <div className= "flex items-center">
            <label className='text-xs sm:text-xl'>Your Name *</label>
           </div>
            <input type="text" required className='bg-transparent outline-none input-border text-xs p-2 sm:text-xl'/>
            <div className= "flex items-center">
                <label className='text-xs sm:text-xl'>Email*</label>
           </div>
            <input type="text" required className='bg-transparent outline-none input-border text-xs p-2 sm:text-xl'/>
            <div className= "flex items-center">
                <label className='text-xs sm:text-xl'>Your Message</label>
           </div>
            <textarea className='bg-transparent outline-none input-border text-xs p-2 h-[10vh] sm:text-xl'></textarea>
        </form>
        <button className='px-4 py-2 bg-orange-500 p-1 rounded-lg cursor-pointer font-semibold hover:bg-gradient-to-br from-purple-500 to-indigo-400 text-white text-xs sm:text-sm z-20'>Send Message</button>
    </div>
  )
}

export default GetInTouch