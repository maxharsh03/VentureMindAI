import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-10 pb-10'>
      <h1 className='text-5xl md:text-7xl underline font-bold pt-4 pb-4'> Meet VentureMind </h1>
      <h3 className='text-lg md:text-xl text-gray-200 text-center break-normal w-3/5 max-w-xl pt-5 px-5'> A comprehensive AI assistant for all of your business and investment needs. Simply enter in your desired message, and VentureMind will give you expert-level advice on the topic. </h3>
    </div>
  )
}

export default Header