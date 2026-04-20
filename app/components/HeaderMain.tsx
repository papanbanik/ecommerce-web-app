import React from 'react'
import { BsSearch} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'


export default function HeaderMain() {
  return (
    <div className='border-b border-gray-200'>
        <div className="container py-5">
            <div className='max-sm:flex-col sm:flex justify-between items-center '>
                <div className=' font-bold text-4xl max-sm:pb-4'>Logo</div>
              <div className='relative '>
                <input className='w-full sm:w-[800px] border border-gray-200 p-2 pl-10 rounded-lg' type="text" placeholder='Enter any product name..'/>
                <BsSearch className='absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-5 text-gray-400 text-gray-400s'/>
              </div>

 <div className="hidden sm:flex gap-4 sm:items-center">
     <BiUser size={25}/>
    <div className="relative">
    <FiHeart size={25} />
    <div className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-red-600 rounded-full text-white text-[10px] flex items-center justify-center">
      0
    </div>
    </div>
    <div className="relative">
    <HiOutlineShoppingBag size={25} />
    <div className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-red-600 rounded-full text-white text-[10px] flex items-center justify-center">
      0
    </div>
   </div>
   </div>

</div>
</div>
</div>
  
  )
}
