import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center px-5 text-sm font-bold'>
        <div>
            <img className="h-20 px-4 " src="Tesla logo.svg" alt="Tesla Logo" />
        </div>
        <div className='hidden lg:inline'>
            <ul className='flex justify-center hover:cursor-pointer'>
                <li className='py-1 px-3 hover:rounded hover:bg-black/5'>hicles</li>
                <li className='py-1 px-3 hover:rounded hover:bg-black/5'>Energy</li>
                <li className='py-1 px-3 hover:rounded hover:bg-black/5'>arging</li>
                <li className='py-1 px-3 hover:rounded hover:bg-black/5'>Discover</li>
                <li className='py-1 px-3 hover:rounded hover:bg-black/5'>Shop</li>
            </ul>
        </div>
        <div className='hidden lg:inline'>
            <ul className='flex justify-between'>
                <li className='py-1 px-3 hover:rounded hover:bg-black/5' >Support</li>
                <li className='py-1 px-3 hover:rounded hover:bg-black/5' >Language</li>
                <li className='py-1 px-3 hover:rounded hover:bg-black/5' >Account</li>
            </ul>
        </div>
        <div className='lg:hidden'>
            <button className='inline-flex items-center py-1 px-3 bg-black/5 hover:rounded hover:bg-black/10'>Menu</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
