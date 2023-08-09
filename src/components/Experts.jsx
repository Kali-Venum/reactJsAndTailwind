import React from 'react'

// Images.
import laptopImage from "../assets/images/laptop.jpg"
import Button from './Button'

function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 grid grid-cols-2'>
        <div className='col-span-1 w-[80%]'>
          <img src={laptopImage} alt='laptop image' />
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
          <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
          <p className='my-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe totam modi eos culpa consequatur quod praesentium sit, non inventore atque ut reiciendis amet ullam earum exercitationem nemo iure esse voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe totam modi eos culpa consequatur quod praesentium sit, non inventore atque ut reiciendis amet ullam earum exercitationem nemo iure esse voluptate.
          </p>
          <Button styles={"bg-black text-white p-3 rounded w-[30%]"}>Get Started</Button>
        </div>
    </div>
  )
}

export default Experts