import React from 'react'

function page() {
  return (
    <div>
        <div className='w-full p-9 space-y-3'>
            <h1 className='text-3xl font-bold'>Card</h1>
            <div className='flex space-x-2'>
                <p className='text-gray-400'>Home</p>
                <p className='text-gray-400'>/</p>
                <p className='text-gray-400'>Card</p>
            </div>
            <div className='flex justify-evenly p-9'>
                <div >
                    <ul className=' w-[700px] flex justify-evenly bg-pink-500 p-2 text-white font-semibold'>
                        <li>Product</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Subtotal</li>
                    </ul>
                </div>
                <div className=' w-[300px] text-center  space-y-6 shadow-md p-9 py-9 '>
                    <h1 className='font-bold text-2xl'>Cart Totals</h1>
                    
                        <div className='flex justify-between text-gray-500'>
                            <h3>Subtotal</h3>
                            <h3>Rs. 0</h3>
                        </div>
                        <div className='flex justify-between text-black font-semibold'>
                            <h3>Total</h3>
                            <h3>Rs. 0</h3>
                    
                    </div>
                    <button className='border border-black p-2 px-5 text-sx'>Check Out</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default page
