import React, { useState } from 'react'



const Popup = ({ isOpen, close, title1, title2, title3  }) => {
    if (!isOpen) return null;


    return (
        <>
            <div className='bg-white w-96 rounded-md w- px-10 justify-center absolute my-5 z-10'>
                <button className='absolute top-0 right-10 ' onClick={close}></button>
                <div className='m-5 flex-row h-full'>
                    <ul>
                        <li>
                           <img className='w-60' src="Mega-Menu-Vehicles-Model-S.avif" alt="Model S" />
                            <span className='justify-center'>{title1}</span>
                        </li>
                        <li>
                            <img className='w-60' src="Mega-Menu-Vehicles-Cybertruck-1x.avif" alt="Cyber-Truck" />
                            <span className='justify-center'>{title2}</span>
                        </li>
                        <li>
                            <img className='w-60' src="Mega-Menu-Vehicles-Model-X.avif" alt="Model-X" />
                            <span className='justify-center'>{title3}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Popup
