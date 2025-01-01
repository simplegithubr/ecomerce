import Link from "next/link"
import Image from "next/image"
import Servirse from "@/components/Servises"
const getData = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/phone ")
    if(!res.ok){
      throw new Error("Faild to fetch data ")
      
    }
    return res.json()
  }

async function Product() {
    const products = await getData()
 
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-3 p-2 underline'>Get Your Favtare Phone</h1>
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4  gap-10 py-10'>
            {
                products.map((item: Props)=>(
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
        <Link className="ml-[43%] bg-pink-400 p-2  px-4 rounded text-white" href="/">Back To Home</Link>
        <Servirse/>
        </div>
  )
}

export default Product
