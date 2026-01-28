import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setrotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouusex = e.clientX;
            let mouusey = e.clientY;

            let deltax = mouusex - window.innerWidth / 2;
            let deltay = mouusey - window.innerHeight / 2;
            let angle = Math.atan2(deltay, deltax);

            let degree = angle * (180 / Math.PI);

            setrotate(degree-180);
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>

        <div data-scroll  data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                    <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                        <div style={{transform: `rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10'>
                            <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                    <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                        <div style={{transform: `rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10'>
                            <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Eyes;