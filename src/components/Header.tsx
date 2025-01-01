

import Link from 'next/link'
import { VscAccount } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
function Header() {
  return (
    <div>
      <div className=' flex justify-evenly p-9 shadow-md  '>
        <h1 className='font-bold text-2xl '>Kinzaa s Gadgets</h1>
        <ul className='space-x-5 text-black   text-xl'>
          <Link href="/">Home</Link>
          <Link href="product">Product</Link>
          <Link href="/about">About</Link>
          <Link href="contact">Contact</Link>
        </ul>
        <div className='flex space-x-9 p-2 '>
          <Link href="/singup"><VscAccount size={25}/></Link>
        
        <FaSearch size={25} />
        <CiHeart size={25}/>
        <Link href="/card"> <FaShoppingCart size={25}/></Link>
       
        </div>
      </div>
    
      
    </div>
  )
}

export default Header
