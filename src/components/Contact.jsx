import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='contact w-full  bg-[] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d0e7279a-0ef3-4728-915f-e6d071f5faab" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
           < div className='max-w-[1000px] w-full h-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-6 pl-3'>
            <p className='text-4xl font-bold inline' style={{color:"pink"}}>
            𝒞𝑜𝓃𝓉𝒶𝒸𝓉
            </p>
          </div>
         
          </div>
            </div>
            <input className='bg-[#FAF9F6] p-2' style={{borderRadius:"20px"}} type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#FAF9F6]' style={{borderRadius:"20px"}} type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#FAF9F6] p-2' style={{borderRadius:"20px"}} name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    
    </div>
  )
}

export default Contact