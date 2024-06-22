import React from 'react';
import { data } from "../data/data.js";

const Work = () => {

  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name='work' id="work" className='work w-full  text-gray-300 bg-[]'>
      <div className=' mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='mx-auto p-4 flex flex-col justify-center w-full h-full' >
          <div className=' w-full h-full'>
            <div className='text-start md:text-center   pb-6 pl-3'>
              <p className='text-4xl font-bold inline' style={{ color: "pink" }}>
                𝒫𝓇𝑜𝒿𝑒𝒸𝓉𝓈
              </p>
            </div>
          </div>
        </div>

        {/* container for projects */}
        <div className="w-[80%] m-auto p-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Gird Item */}
          {project.map((item, index) => (
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={index}>
            <div
              
              style={{ backgroundImage: `url(${item.image})` }}
              className=" shadow-lg bg-black shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            > </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <img
        src={item.image}
        alt='p'
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{item.name}</h1>
        <p className="mt-2 text-gray-300">{item.name}</p>
      </div>
    </div>
              
              {/* Hover effect for images */}
              {/* <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                 
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div> */}
           
            </div>
          ))}


        </div>
        <div>
         
        </div>
      </div>
    </div>
  );
};

export default Work;
