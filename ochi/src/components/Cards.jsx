import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center gap-5 px-32'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center hover:scale-105 transition-transform duration-300'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 border-white text-white rounded-full'>&copy;</button>    
            </div>  
        </div>

        <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
            <div className='card relative rounded-xl w-1/2 h-full bg-[#131514] flex justify-center items-center hover:scale-105 transition-transform duration-300'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 border-white text-white rounded-full'>&copy;</button>    
            </div> 
            <div className='card relative rounded-xl w-1/2 h-full bg-[#131514] flex justify-center items-center hover:scale-105 transition-transform duration-300'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 border-white text-white rounded-full'>&copy;</button>    
            </div> 
        </div>
    </div>
  )
}

export default Cards    