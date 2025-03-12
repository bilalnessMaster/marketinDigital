import React from 'react'

const Responsive = () => {
  return (
    <div className='absolute top-12 w-24 h-14 bg-black text-white text-3xl flex items-center justify-center'>
        <span className='block md:hidden'>
            small
        </span>
        <span className='hidden md:block lg:hidden'>
            middle
        </span>
        <span className='hidden lg:block'>
            large
        </span>
    </div>
  )
}

export default Responsive
