import React from 'react'
import plus from './images/icons/plus.png'

function Notes() {
  return (
    <div className='w-full h-auto   grid sm:grid-cols-2 '>
        <div className=' flex justify-center p-8'>
            <div className='h-56 w-80 rounded-2xl bg-white border-[1px] border-[#33160a] mt-24'>
                <p className='text-center mt-20'>See Saved Notes!</p>
            </div>
        </div>
        <div className=' flex justify-center p-8'>
            <div className='h-56 w-80 rounded-2xl bg-white border-[1px] border-[#33160a] sm:mt-24'>
                 <img src={plus} className='h-12 m-auto mt-20' alt="" />
                 <p className='text-center'>Create New Note</p>
            </div>
        </div>
    </div>
  )
}

export default Notes