
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div>
    <div className='w-full p-9 space-y-3 shadow-md'>
        <h1 className='text-3xl font-bold'>About</h1>
        <div className='flex space-x-2'>
            <p className='text-gray-400'>Home</p>
            <p className='text-gray-400'>/</p>
            <p className='text-gray-400'>About</p>
        </div>
        <div className='flex w-[700px] mx-auto '>
          
          <div className=' '>
            <h1 className='font-bold text-2xl' >About Kinzaa's Gadgets</h1>
            <p className='mt-3 '>At Kinzaa's Gadgets, we believe in making the latest technology accessible to everyone. Founded by Kinzaa, a passionate entrepreneur and artist, our mission is to bring you the best gadgets, mobile phones, and accessories at unbeatable prices.

We take pride in offering:

High-quality products: From top brands to trending gadgets.
Customer satisfaction: Ensuring a smooth and enjoyable shopping experience.
Personalized service: Because every customer matters to us.
Join us on this journey to explore innovation, reliability, and style—all under one roof. Thank you for choosing Kinzaa's Gadgets as your trusted tech partner!</p>
          </div>
          <Image src="/hero.png" alt='' width={300} height={200} ></Image>
        </div>
       
       
    </div>
  
</div>
  )
}

export default page
