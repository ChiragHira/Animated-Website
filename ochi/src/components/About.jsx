import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='text-black font-["Founders_Gortest"] text-[4vw] leading-[4vw] tracking-tight'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>

        <div className='w-full border-t mt-20 border-[#a1b562] pt-20 flex gap-5'>
            <div className='w-1/2 '>
              <h1 className='text-7xl'>Our Approach</h1>
              <button className='px-8 py-3 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center'>Read More
                <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
              </button>
            </div>

            <div className='w-1/2 h-[70vh] bg-[#a0b066] rounded-2xl'></div>
        </div>
    </div>
  )
}

export default About