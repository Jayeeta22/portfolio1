import React from 'react';
import img from '../assets/jayeetaimg.png'

const About = () => {
  return (
    <div name='about' className='about w-full bg-[] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-6'>
          <div className='sm:text-right pb-6 pl-3'>
            <p className='text-4xl font-bold inline' style={{color:"pink"}}>
           𝒜𝒷𝑜𝓊𝓉 𝓂𝑒
            </p>
          </div>
         
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-left text-4xl font-bold'>
            <div class="wrapper six">
        <div>
            <p class="flicker">
              Hi. I'm Jayeeta, nice to meet you guys!</p>
        </div>
    </div>
            
            
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. A motivated individual who is good at problem solving and programming, with an emphasis on writing 
            clean and maintainable code. Experienced with data structure/algorithm and
            designing optimal solution.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
