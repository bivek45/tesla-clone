import React, { useState } from 'react';



const Popup = ({ isOpen, close, title1, title2, title3, image1, image2, image3  }) => {
    if (!isOpen) return null;


    return (
        <>
            <div className='left-0 w-full h-1/2 flex bg-white  px-10 justify-center absolute my-5 z-10 overflow-hidden'>
                <button className='absolute top-0 right-10 ' onClick={close}></button>
                <div className='m-5 flex flex-col h-full'>
                    <ul className='flex gap-20 m-10'>
                        <li className='flex flex-col items-center"'>
                           <img className='w-60' src={image1} alt="Model S" />
                            <span className='justify-center text-center m-2'>{title1}</span>
                        </li>
                        <li className='flex flex-col items-center"'>
                            <img className='w-60' src={image2} alt="Cyber-Truck" />
                            <span className='justify-center text-center m-2'>{title2}</span>
                        </li>
                        <li className='flex flex-col items-center"'>
                            <img className='w-60' src={image3} alt="Model-X" />
                            <span className='justify-center text-center m-2'>{title3}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Popup
