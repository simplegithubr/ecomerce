import { getSingleProduct } from "@/helper"
import Image from "next/image"

type Props = {
    searchParams: {[key: string]: string | string[] | undefined }
}

export default async function SingleProduct({searchParams}: Props) {
  const idString = searchParams?._id
  const _id = Number (idString)
  const produt = await getSingleProduct(_id)
  
  
  
    
  return (
    < div className="max-w-screen-xl mx-auto flex items-center gap-10 mt-3 ">
   
    <Image src={produt?.image} alt="product img " width={400} height={500}/>
    <div className="flex flex-col gap-3 ">
      <p className="text-xl font-semibold">{produt?.title}</p>
      <p>{produt?.description}</p>
      <p>Price ${produt?.price}</p>
      <p>{produt?.catgegory}</p>
      <p>{produt?.isNew && "New Item"}</p>
    </div>
   
   
      
    </div>
  )
}
