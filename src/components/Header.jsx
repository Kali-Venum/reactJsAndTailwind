import React from 'react'

function Header() {
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='flex items-center py-[15px] justify-between max-w-[1240px] mx-auto'>
        <div className='text-3xl font-bold'>
          Nav Bar
        </div>
        <ul className='hidden md:flex text-white gap-10'>
          <li>
            Home
          </li>
          <li>
            Company
          </li>
          <li>
            Resources
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header