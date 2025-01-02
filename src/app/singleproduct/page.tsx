import { getSingleProduct } from "@/helper"
import Image from "next/image"


type Props = {
    searchParams: {[key: string]: string | string[] | undefined }
}

export default async function SingleProduct({searchParams}: Props) {
  const idString = searchParams?._id
  const _id = Number (idString)
  const product = await getSingleProduct(_id)
  
  
  
    
  return (
    < div className="max-w-screen-xl mx-auto flex items-center gap-10 mt-3 ">
   
    <Image src={product?.image} alt="product img " width={400} height={500}/>
    <div className="flex flex-col gap-3 ">
      <p className="text-xl font-semibold">{product?.title}</p>
      <p>{product?.description}</p>
      <p>Price ${product?.price}</p>
      <p>{product?.catgegory}</p>
      <p>{product?.isNew && "New Item"}</p>
    </div>
   
   
      
    </div>
  )
}



