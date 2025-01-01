import React from 'react'
import { MdAddLocation } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { BsFillStopwatchFill } from "react-icons/bs";

function contact() {
  return (
    <div>
        <div className='w-full p-9 space-y-3'>
            <h1 className='text-3xl font-bold'>Contact</h1>
            <div className='flex space-x-2'>
                <p className='text-gray-400'>Home</p>
                <p className='text-gray-400'>/</p>
                <p className='text-gray-400'>Contact</p>
            </div>
           </div>
           <div >
            <div className='text-center space-y-3'>
            <h1 className='text-2xl font-bold '>Get In Touch With Us</h1>
            <p className='text-xs'>For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitat</p>
            </div>
            <div className='md:flex-row flex flex-col justify-evenly w-full mx-auto p-8 mt-9'>
              <div className='flex flex-col justify-evenly'>
                <div className='flex  '>
                <MdAddLocation size={33} />
                <div>
                  <h1>Address</h1>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
                </div>
                <div className='flex gap-2'>
                <MdAddIcCall size={33} className='mt-2'/>
                <div>
                  <h1>Phone</h1>
                  <p>Mobile: +(84) 546-6789</p>
                </div>
                </div>
                <div className='flex gap-2 '>
                <BsFillStopwatchFill size={33} className='mt-2'/>
                <div>
                  <h1>Working Time</h1>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00 </p>
                </div>
                </div>
              </div>
              <div className='md:w-[400px] w-full md:h-[50h0px] h-full shadow-md text-center '>
                <form action="" className='space-y-4'>
                <label className='   mr-[44%]' htmlFor="">Your Name:</label>  <br />
                <input type="text" placeholder='Enter Your Name' className='border border-gray-300 p-3 px-9  ' /> <br/>
                <label className='   mr-[44%]' htmlFor="">Email address</label><br/>
                <input type="text" placeholder='Enter Your Email' className='border border-gray-300 p-3 px-9 '/> <br/>
                <label className='  mt-2 mr-[44%]' htmlFor="">Subject</label> <br/>
                <input type="text" placeholder='Enter Your Subject' className='border border-gray-300 p-3 px-9 ' /><br/>
                <label className='  mt-2 mr-[44%]' htmlFor="">Message</label> <br/>
                <input type="text" placeholder='Enter Your Message' className='border border-gray-300 p-9 text-start px-9  '/> <br/>
                <button className='border border-gray-400 p-2 px-5'>Submit</button>
                </form>
              </div>
            </div>
           </div>
      
    </div>
  )
}

export default contact
