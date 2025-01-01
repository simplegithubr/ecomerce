
import React from 'react'


function Singhup() {
  return (
    <div>
      <div className='w-[1305px] h-[781px] gap-[129px]  '>
     <div className=' flex '>
        <div className='w-[919px] h-[706px] relative left-[-8px] mt-9 ml-9 '>
            <img src="/logoin.png" alt="" className='h-100px w-[80%]'/>

        </div>
        <div className='w-[371px] h-[530px] gap-[48px] mr-[69px]'>
            <div className='w-[339px] h-[78px] gap-[24px]'>
            <div className='w-[339px] h-[78px] mt-[84px]'>
                
                <h2 className=' font-bold text-2xl text-black leading-[24px] '>Log in to Exclusive</h2>
                <p className='text-black loading-[24px]  p-3'>Enter your details below</p>

            </div>
            <div className='w-[370px] h-[176px] gap-[40px]'>
                <div  className='w-[370px] h-[32px] gap-[8px]'>
                    <div className='w-[49px] h-[24px] '>
                        <form action="">
                            <input type="text" placeholder='Email or Phone Number' />
                        </form>

                    </div>
                    <hr />
                    <div className='w-[49px] h-[24px] mt-9 '>
                        <form action="">
                            <input type="text" placeholder='Password' />
                        </form>

                    </div>
                    <hr />
                   
                    <div className='space-x-[72px]'>
                    <button className='mt-9 bg-[#DB4444] rounded-md text-white p-3 '>Create Account</button>
                    <a className='text-red-500' href="">Forget Password?</a>
                    </div>
                    
                </div>
            </div>

            </div>

        </div>

     </div>
      </div>
    </div>
  )
}

export default Singhup