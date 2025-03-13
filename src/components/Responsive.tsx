import React from 'react'

const Responsive = () => {
  return (
    <div className='fixed bottom-0 left-0 w-24 h-14 bg-black text-white text-3xl flex items-center justify-center z-50'>
        <span className='block md:hidden'>
            small
        </span>
        <span className='hidden md:block lg:hidden'>
            middle
        </span>
        <span className='hidden lg:block xl:hidden'>
            large
        </span>
        <span className='hidden xl:block'>
            xl
        </span>
    </div>
  )
}

export default Responsive
