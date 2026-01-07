import React from 'react'
import{easeIn, motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap marquee'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration: 5,repeat:Infinity}} className = "text-[17vw] text-white leading-none -md-[7vw] font-['Founders_Gortest'] uppercase font-semibold">We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration: 5,repeat:Infinity}} className = "text-[17vw] text-white leading-none -md-[7vw] font-['Founders_Gortest'] uppercase font-semibold">We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", duration: 5,repeat:Infinity}} className = "text-[17vw] text-white leading-none -md-[7vw] font-['Founders_Gortest'] uppercase font-semibold">We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee