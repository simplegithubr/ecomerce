"use client"
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
interface Productsprops{
    _id: number;
    title: string
    description: string
    image: string
    price: number
    previousPrice: number
    isNew: boolean
    catgegory: string
    brand:string

}
interface Props {
    products: Productsprops[]
}

function Products({products }: Props) {
  return (
    <div>
        <h1 className='text-center text-2xl font-bold mt-3 p-2 underline'>Get Your Favtare Phone</h1>
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4  gap-10 py-10'>
        {
            products.map((item)=>(
                <Link href={{pathname: "/singleproduct", query: {_id: item?._id}}} key={item._id}>
                    <div className='border-[1px] border-gray-400 rounded-md overflow-hidden  '>
                    <Image src={item?.image} alt="produt img" width={400} height={400}/>
                    <div className='px-4 pb-2 text-sm flex flex-col gap-1'>
                        <p className='text-gray-400'>{item?.title}</p>
                        <p className='font-semibold'>${item?.price}</p>
                        <div className='flex items-center justify-between'>
                            <button>Add To Card</button>
                            <button>More Info</button>
                        </div>
                    </div>

                    </div>
                </Link>
                
            ))
        }
       
      
    </div>
    <Link className=' ml-[43%] bg-pink-400 p-2  px-4 rounded text-white' href="/product">Red More</Link>
    </div>
  )
}

export default Products
