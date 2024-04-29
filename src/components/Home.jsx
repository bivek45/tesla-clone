import React from 'react'

const Home = () => {
  return (
    <>
    <div className=''>
        <div className='absolute inset-x-0 lg:top-[17%] sm:top-1  text-center'>
            <h1 className='text-3xl font-bold'>Model Y</h1>
            <h2 className='tezt-2xl font-bold p-1'>From $29,490</h2>
            <p className='text-xs'>After Federal Tax Credit & Est Gas Saving</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center absolute inset-x-0 top-[80%] text-center gap-4'>
            <button className='bg-white rounded-md w-60 h-8 gap-3'>Order Now</button>
            <button className='bg-black opacity-65 rounded-md w-60 h-8 text-white'>Demo Drive</button>
        </div>
        <p className="absolute inset-x-0 lg:top-[88%] sm:bottom-1 text-center text-xs">*Price before incentives is $42990, excluding taxes and fees. Subject to Change.</p>
    </div>
    </>
  )
}

export default Home
