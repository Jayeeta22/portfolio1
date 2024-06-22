import React, { useState } from 'react';
import { data } from '../data/data';

const ProjectShowcase = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % data.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + data.length) % data.length);
    };

    const project = data[currentProject];

    return (
        <div>
            <div className='text-start md:text-center  p-8 pl-3'>
                <p className='text-4xl px-4  font-bold inline' style={{ color: "pink" }}>
                    𝒫𝓇𝑜𝒿𝑒𝒸𝓉𝓈
                </p>
            </div>
            <div className="flex  w-full items-center justify-center   text-white px-8" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <div className="flex w-[95%] flex-col md:flex-row ">
                    <div className="w-full md:w-1/2 pr-8">
                        <h2 className="text-8xl   leading-none mb-4  text-[#ccd6f6]" style={{ color:"transparent", WebkitTextStroke: "1px gray"}}>{String(project.id).padStart(2, '0')}</h2>
                        <h3 className="text-4xl font-semibold mb-4">{project.title}</h3>
                        <p className="mb-4 text-gray-400">{project.description}</p>
                        <p className="text-[#FFC0CB]">{project.technologies}</p>
                        <div className="flex mb-4 mt-4 md:mb-0 md:mt-8 space-x-4">
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-3 rounded-full">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                          {project.github && 
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                      </a>
                          }  
                        </div>
                    </div>
                    <div className=" w-full md:w-1/2">
                        <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
                        <div className="flex justify-center md:justify-end mt-4 space-x-2">
                            <button onClick={prevProject} className="bg-[#FFC0CB] text-white p-2 w-10 h-10 flex items-center justify-center rounded">
                                &lt;
                            </button>
                            <button onClick={nextProject} className="bg-[#FFC0CB] text-white p-2 w-10 h-10 flex items-center justify-center rounded">
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;