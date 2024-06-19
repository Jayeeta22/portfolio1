import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const downloadPDF = () => {
    const pdfUrl = "/Resume/JayeetaResume.pdf";
    saveAs(pdfUrl, 'JayeetaResume.pdf');
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1>𝕁A͜͡Y͜͡ꫀ乇𝘛🅰︎</h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex '>
        <li className='hover:scale-110 duration-500'>
          <Link to='home' className="nav-item" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:scale-110 duration-500'>
          <Link to='about' className="nav-item" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:scale-110 duration-500'>
          <Link to='skills' className="nav-item" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:scale-110 duration-500'>
          <Link to='work' className="nav-item" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:scale-110 duration-500'>
          <button className="nav-item" onClick={downloadPDF}>Resume</button>
        </li>
        <li className='hover:scale-110 duration-500'>
          <Link to='contact' className="nav-item" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <button onClick={downloadPDF}>Resume</button>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
