import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name='work' id="work" className='work w-full  text-gray-300 bg-[]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
          <div className='max-w-[1000px] w-full h-full'>
            <div className='text-start md:text-center   pb-6 pl-3'>
              <p className='text-4xl font-bold inline' style={{ color: "pink" }}>
                𝒫𝓇𝑜𝒿𝑒𝒸𝓉𝓈
              </p>
            </div>
          </div>
        </div>

        {/* container for projects */}
        <div className="worksub grid sm:grid-cols-2 md:grid-cols-3 gap-2">

          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              data-aos-duration="1000"
              data-aos="flip-down"
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className=" shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Work;
