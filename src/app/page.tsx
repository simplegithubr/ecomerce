import React from 'react'
import Hero from "@/components/Hero"
import Products from '@/components/Products'
import Servirse from '@/components/Servises'
import NewArrival from '@/components/NewArrival'
const getData = async()=>{
  const res = await fetch("https://jsonserver.reactbd.com/phone ")
  if(!res.ok){
    throw new Error("Faild to fetch data ")
    
  }
  return res.json()
}
async function page() {
  const products = await getData()


  return (
    <div>
 
      <Hero/>
      <Products products={products}/>
      <NewArrival/>
      <Servirse/>
    </div>
  )
}

export default page

