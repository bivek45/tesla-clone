import React from 'react'

const Panels = ({title, backgroundImg, desc, }) => {
    return (
        <>
            <div className='relative w-full max-wi-lg'>
                <img className="h-screen w-full object-cover" src={backgroundImg} alt="Solar plan" />
                <div className='absolute top-10 left-0 right-0 bottom-0  items-center justify-center p-10'>
                    <h1 className=" text-3xl font-bold text-center text-neutral-500">{title}</h1>
                    <p  className='text-xs text-center text-neutral-500 p-4'>{desc}</p>
                </div>
                <div className="absolute inset-x-0 bottom-10 flex flex-col justify-center items-center gap-4 px-9 lg:flex-row">
                    <button className="bg-white rounded-md w-60 h-17 text-black text-center font-medium shadow">Order Now</button>
                    <button className="bg-black opacity-75 rounded-md w-60 h-17 text-white text-center font-medium shadow">Learn More</button>
                </div>

            </div>
        </>
    )
}

export default Panels
