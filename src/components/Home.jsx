import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import jayeeimg from '../assets/jayeimg.png'

const Home = () => {
  return (
    <div name='home' className='home w-full '>
      {/* Container */}
      <div className='home-section1' data-aos="fade-up-right" data-aos-duration="1000">
        <p className='text-pink-600' style={{fontSize:"20px"}}>Hi, my name is</p>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
        𝒥𝒶𝓎𝑒𝑒𝓉𝒶 𝒮𝒶𝒹𝒽𝓊𝓀𝒽𝒶𝓃
        </h1>
        
        <h2 className='animate-charcter-home text-4xl sm:text-6xl font-bold text-[#8892b0]' >
          I'm a Full <br></br> Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[500px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to='work'>
          <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
      <div className='home-section2' data-aos="fade-up-left" data-aos-duration="1000">
      <img src={jayeeimg} alt='Logo Image' style={{ width: '400px',height:"300px" }} />
      </div>
    </div>
  );
};

export default Home;
