import React from 'react'

const Feature = () => {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b border-zinc-500 pb-20'>
            <h1 className='text-8xl font-["Founders_Gortest"] tracking-tight'>Featured Project</h1>
        </div>

        <div className='px-10'>
            <div className='cards w-full mt-10 flex gap-10'>

                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                    <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#a0b066] z-10 text-6xl leading-none tracking-tighter'>
                        {"Salience".split('').map((char, index) => (
                            <span>
                                {char}
                            </span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-lg overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="img" />
                    </div>
                </div>


                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                   <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#a0b066] z-10 text-6xl leading-none tracking-tighter'>
                        {"Vise".split('').map((char, index) => (
                            <span>
                                {char}
                            </span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-lg overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature 