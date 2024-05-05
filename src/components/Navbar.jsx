import React, { useState } from 'react';
import Popup from './Popup';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const [vechiclePopupOpen, setvechiclePopupOpen] = useState(false);
    const toggleVechiclePopup = () => {
        setvechiclePopupOpen(!vechiclePopupOpen);
    };

    const [energyPopupOpen, setEnergyPopupOpen] = useState(false);
    const toggleEnergyPopup = () => {
        setEnergyPopupOpen(!energyPopupOpen);
    };

    const [chargingPopupOpen, setChargingPopupOpen] = useState(false);
    const toggleChargingPopup = () => {
        setChargingPopupOpen(!chargingPopupOpen);
    };

    const [shopPopupOpen, setShopPopupOpen] = useState(false);
    const toggleShopPopup = () => {
        setShopPopupOpen(!shopPopupOpen);
    };
    return (
        <>
            <div className='flex justify-between items-center px-5 text-sm font-bold'>
                <div>
                    <Link to="/">
                        <img className="h-20 px-4 " src="Tesla logo.svg" alt="Tesla Logo" />
                    </Link>
                </div>
                <div className='hidden lg:inline'>
                    <ul className='flex justify-center hover:cursor-pointer'>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/15'>
                            <button onClick={toggleVechiclePopup}>Vehicles</button>
                            <Popup isOpen={vechiclePopupOpen} close={toggleVechiclePopup}
                                image1="Mega-Menu-Vehicles-Model-S.avif"
                                image2="Mega-Menu-Vehicles-Cybertruck-1x.avif"
                                image3="Mega-Menu-Vehicles-Model-X.avif"
                                title1="Model S"
                                title2="Cyber Truck"
                                title3="Model X"
                            />
                        </li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/15'>
                            <button onClick={toggleEnergyPopup}>Energy</button>
                            <Popup isOpen={energyPopupOpen} close={toggleEnergyPopup}
                                image1="Mega-Menu-Energy-Solar-Panels.avif"
                                image2="Mega-Menu-Energy-Solar-Roof.avif"
                                image3="Mega-Menu-Energy-Powerwall-US.avif"
                                title1="Solar Panels"
                                title2="Solar Roofs"
                                title3="Powerwall"
                            />
                        </li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/15'>
                            <button onClick={toggleChargingPopup}>Charging</button>
                            <Popup isOpen={chargingPopupOpen} close={toggleChargingPopup}
                                image1="Mega-Menu-Charging-Charging.avif"
                                image2="Mega-Menu-Charging-Home-Charging.avif"
                                image3="Mega-Menu-Charging-Supercharging-NA.avif"
                                title1="Charging"
                                title2="Home Charging"
                                title3="Supercharging"
                            />
                        </li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/15'>Discover</li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/15'>
                            <button onClick={toggleShopPopup}>Shop</button>
                            <Popup isOpen={shopPopupOpen} close={toggleShopPopup}
                                image1="Mega-Menu-Shop-Vehicle-Accessories.avif"
                                image2="Mega-Menu-Shop-Apparel.avif"
                                image3="Mega-Menu-Shop-Lifestyle.avif"
                                title1="Vechicle Accessories"
                                title2="Apparel"
                                title3="Lifestyle"
                            />
                        </li>
                    </ul>
                </div>
                <div className='hidden lg:inline'>
                    <ul className='flex justify-between'>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/15' > <img className='h-7 text-black' src="Support.svg" alt="Customer Support" /></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/15' > <img className='h-7 text-black' src="Language.svg" alt="Language" /></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/15' > <img className='h-7 text-black' src="Account.svg" alt="Account" /></li>
                    </ul>
                </div>
                <div className='lg:hidden'>
                    <button id='dropdownDefaultButton' data-dropdown-toggle='dropdown' className='inline-flex items-center py-1 px-3 
                    bg-black/5 hover:rounded hover:bg-black/15' onClick={(e) => setIsActive(!isActive)} >
                        Menu
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {isActive && (
                        <div className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <ul>
                                <li className='my-9 py-1 px-3 hover:rounded hover:bg-black/15'>Vehicles</li>
                                <li className='my-9 py-1 px-3 hover:rounded hover:bg-black/15'>Energy</li>
                                <li className='my-9 py-1 px-3 hover:rounded hover:bg-black/15'>Charging</li>
                                <li className='my-9 py-1 px-3 hover:rounded hover:bg-black/15'>Discover</li>
                                <li className='my-9 py-1 px-3 hover:rounded hover:bg-black/15'>Shop</li>
                                <li className='flex gap-4 my-9 py-1 px-3 hover:rounded hover:bg-black/15'><img className='h-7 text-black' src="Support.svg" alt="Language" />Support</li>
                                <li className='flex gap-4 my-9 py-1 px-3 hover:rounded hover:bg-black/15'><img className='h-7 text-black' src="Language.svg" alt="Language" />Language</li>
                                <li className='flex gap-4 my-9 py-1 px-3 hover:rounded hover:bg-black/15'><img className='h-7 text-black' src="Account.svg" alt="Account" />Account</li>
                            </ul>
                        </div>
                    )}


                </div>
                {/* <div className='bg-black top-o bottom-0 right-0 w-80 h-full z-10'></div> */}
            </div>
        </>
    )
}

export default Navbar
