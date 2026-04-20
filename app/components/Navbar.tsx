import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='hidden  lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10  mx-auto  py-4'>
            
            <Link className='navbar__link relative' href=''>Home</Link>
             
            <Link className='navbar__link relative' href=''>CATEGORIES</Link>

            <Link className='navbar__link relative' href=''>MEN&apos;S</Link>

            <Link className='navbar__link relative' href=''>WOMEN&apos;S</Link>

            <Link className='navbar__link relative' href=''>JEWELRY</Link>

            <Link className='navbar__link relative' href=''>PERFUME</Link>

            <Link className='navbar__link relative' href=''>BLOG</Link>

           <Link className='navbar__link relative' href=''>HOT OFFERS</Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar
