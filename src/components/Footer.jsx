import React from 'react'

const Footer = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return (
        <>
            <div className='flex justify-center items-center px-5 text-sm font-bold bg-black'>
                <div>
                    <ul className='flex flex-col justify-center hover:cursor-pointer lg:flex-row '>
                        <li className='text-white my-4 py-1 px-3'>Tesla &#169; {currentYear}</li>
                        <li className='text-white my-4 py-1 px-3'>Privacy & Legal</li>
                        <li className='text-white my-4 py-1 px-3'>Vehicle Recalls</li>
                        <li className='text-white my-4 py-1 px-3'>Contact</li>
                        <li className='text-white my-4 py-1 px-3'>News</li>
                        <li className='text-white my-4 py-1 px-3'>Get Updates</li>
                        <li className='text-white my-4 py-1 px-3'>Location</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer
