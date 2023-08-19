import React from 'react'

// Images.
import laptopImage from "../assets/images/laptop.jpg"
import Button from './Button'

function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%] text-center'>
          <img src={laptopImage} alt='laptop image' className='inline' />
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
          <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
          <p className='my-2 text-justify'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe totam modi eos culpa consequatur quod praesentium sit, non inventore atque ut reiciendis amet ullam earum exercitationem nemo iure esse voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe totam modi eos culpa consequatur quod praesentium sit, non inventore atque ut reiciendis amet ullam earum exercitationem nemo iure esse voluptate.
          </p>
          <Button styles={"bg-black text-white p-3 rounded w-[30%]"}>Get Started</Button>
        </div>
    </div>
  )
}

export default Experts