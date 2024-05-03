import React, { useState } from 'react'

const Demo = () => {
const [form, setForm] =useState({fname:" ", lname:" ", email:" ", phone:" "});

const handleChange = (e) =>{
setForm({...form, [e.target.name]:e.target.value})
}

    return (
        <>
            <div className=''>
                <div className='flex-col justify-center items-center'>
                    <h1 className=' text-3xl text-center '>
                        Demo Drive
                    </h1>
                    <p className='p-3 text-center text-sm'>Experience Full Self-Driving (Supervised), Learn About Charging and Get All Your Questions Answered</p>
                </div>
                <div>
                    <h2 className='text-center'>Conformation Information</h2>
                    <div className='flex items-center justify-center p-10'>
                        <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6 ">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input value={form.fname} onChange={handleChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="fname" id="fname" type="text" placeholder="Jane" />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input value={form.lname} onChange={handleChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lname" id="lname" type="text" placeholder="Doe" />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-5">
                                    <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Email Adress
                                    </label>
                                    <input value={form.email} onChange={handleChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="email" id="email" type="text" placeholder="bibek11@gmail.com" />
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-5">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Phone Number
                                    </label>
                                    <input value={form.number} onChange={handleChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="phone" id="phone" type="tel" placeholder="9819300900" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <p className='p-3 text-center text-xs' >By continuing, I agree to the Terms and Conditions</p>
                    <div className='absolute inset-x-0 lg:bottom-15 flex flex-col justify-center items-center gap-4 px-9  lg:flex-row'>
                        <button onClick='saveDetails' className='bg-[#3e6ae1] hover:bg-[#3457b1] rounded-sm w-60 h-10  text-black text-center font-medium shadow'>Schedule Demo Drive</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Demo
