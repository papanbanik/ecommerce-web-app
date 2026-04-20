import React from 'react'

const Products = () => {
  const product=[
    {
       id:1,
       img:"/shirt-1.webp",
       title:"Shirt",
       desc:"Pure Garment  Shirt",
       rating:4,
       price:"45.00"
    },
     {
       id:2,
       img:"/sports-1.webp",
       title:"Sports",
       desc:"Tracking & Running Shoes",
       rating:3,
       price:"55.00"
    },
     {
       id:3,
       img:"/watch-1.webp",
       title:"Watch",
       desc:"Smart Watch Vital Plus",
       rating:4,
       price:"100.00"
    },
     {
       id:4,
       img:"/watch-2.webp",
       title:"Watch",
       desc:"Smart Watch Vital Plus",
       rating:4,
       price:"145.00"
    }
    ]
return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 p-6'>
        {product.map((item) =>(
           <div key={item.id} className='container bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group'>
            <div className='p-4 flex flex-col justify-center gap-2  '>
                     <img src={item.img} alt={item.title} className='w-full h-50 object-cover group-hover:scale-110 transition duration-300'/>
                     <p className='text-center text-lg font-semibold'>{item.title}</p>
                     <p>{item.desc}</p>
                     <div className="text-yellow-500 text-sm">
                       {"⭐".repeat(item.rating)}
                     </div>
                     <div className='mt-2 bg-black rounded-md  py-2 hover:bg-gray-800 transition text-white cursor-pointer'>Add To Card</div>

            </div>
           </div>
        ))}
      
       </div>
  )
}

export default Products
