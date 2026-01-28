import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='text-black font-["Founders_Gortest"] text-[4vw] leading-[4vw] tracking-tight'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>

        <div className='w-full border-t mt-20 border-[#a1b562] pt-20 flex gap-5'>
          <div className='w-1/2'>
              <p>What you can expect:</p>
          </div>

          <div className='w-1/3 flex flex-col gap-5'>
              {[
                "We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: I want in!",
                "Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.",
                "Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo."
              ].map((items) => (
                    <p>{items}</p>
              ))}
          </div>

        </div>

        <div className='w-full border-t mt-20 border-[#a1b562] pt-20 flex gap-5'>
            <div className='w-1/2 '>
              <h1 className='text-7xl'>Our Approach</h1>
              <button className='px-8 py-3 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center hover:scale-105 transition-transform duration-300'>Read More
                <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
              </button>
            </div>

            <div className='w-1/2  bg-[#a0b066] rounded-2xl hover:scale-95 transition-transform duration-300'>
              <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About