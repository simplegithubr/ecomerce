





// const getData = async(): Promise< Props[]>=>{
//     const res = await fetch("https://jsonserver.reactbd.com/phone ")
//     if(!res.ok){
//       throw new Error("Faild to fetch data ")
      
//     }
//     return res.json()
//   }
//   export const getSingleProduct = async(_id: number)=>{
//     const item = await getData()
//     const singleItem = await item.find((Product: Props)=>Product._id === _id)
//     return singleItem
//   }



const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getSingleProduct = async (_id: number) => {
  const data = await getData();
  const product = data.find((item: { _id: number }) => item._id === _id);
  return product;
};
