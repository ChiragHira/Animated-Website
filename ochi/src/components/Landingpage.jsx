import { FaArrowUpLong } from "react-icons/fa6";

const Landingpage = () => {
  return (
    <div className="w-full h-screen bg-white pt-1">
      <div className="textstructure lg:mt-52 lg:px-20 sm:mt-40 sm:px-10 px-5 mt-40">
            {["We Create", "Eye Opening", "Presentations"].map((items, index) => (
                <div className="masker">
                    <div className="w-full flex items-center">
                        {index === 1 ? (
                        <div className="w-[12vh] h-[5vw] bg-red-500"></div>
                        ) : null}
                        <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["Founders_Gortest"] font-medium'>
                            {items}
                        </h1>
                    </div>
                </div>
            ))}
      </div>

        <div className="border-t border-zinc-900 mt-32 flex justify-between items-center py-2 px-20 text-md">
          {[
            "Presentation and storytelling agency",
            "For innovation teams and global brands",
          ].map((items, index) => (
            <p className="text-lg font-light leading-none tracking-tight">
              {items}
            </p>
          ))}

          <div className="start flex items-center gap-5">
                <div className="px-4 py-2 text-black border-2 rounded-full font-light text-sm hover:bg-black hover:text-white cursor-pointer">
                    START THE PROJECT
                </div>

                <div className="w-12 h-12 flex justify-center items-center rounded-full">
                    <FaArrowUpLong className=" w-6 h-6 rotate-45 hover:animate-bounce cursor-pointer" />
                </div>
           </div>
        </div>
    </div>
  );
};

export default Landingpage;
