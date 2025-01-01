
import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-12  border border-gray-500 '>
        <div className='flex justify-evenly space-x-9 p-4 mt-4'>
            <ul className='space-y-4'>
                <h3 className='text-gray-500 font-semibold'>Links</h3>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul className='space-y-4'>
            <h3 className='text-gray-500 font-semibold'>Help</h3>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
               
            </ul>
            <div className='space-y-4'>
                <h3 className='text-gray-500 font-semibold'>Newsletter</h3>
                <div className='flex border border-gray-500 '>
                <input type="text" placeholder='Enter Your Email'  className='p-2'/>
                <button className='bg-red-700 text-white  p-2 px-5'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <hr />
        <div className='text-center mt-2 p-3 '>
            <p>2022 Meubel House. All rights reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
