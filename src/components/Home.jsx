import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ title, price1, price2, backgroundImg }) => {
  const navigate = useNavigate();
  const goToDemo = () => {
    navigate('/demo');
  };

  return (
    <>
      <div className='relative w-full max-wi-lg'>
        <img className="h-screen w-full object-cover" src={backgroundImg} alt="Car Model" />
        <div className='absolute top-10 left-0 right-0 bottom-0  items-center justify-center p-4'>
          <h1 className="text-black text-3xl font-bold text-center ">{title}</h1>
          <h2 className='tezt-2xl font-bold p-1 text-center'>From {price1}</h2>
          <p className='text-xs text-center'>After Federal Tax Credit & Est Gas Saving</p>
        </div>
        <div className="absolute inset-x-0 bottom-20 lg:bottom-15 flex flex-col justify-center items-center gap-4 px-9  lg:flex-row ">
          <button className="bg-white rounded-md w-60 h-17 text-black text-center font-medium shadow "> Order Now</button>
          <button onClick={goToDemo} className="bg-black opacity-75 rounded-md w-60 h-17 text-white text-center font-medium shadow">  Demo Drive</button>
        </div>
        <p className="absolute inset-x-0 px-20 bottom-10 text-center text-xs">*Price before incentives is {price2}, excluding taxes and fees. Subject to Change.</p>
      </div>
    </>
  )
}

export default Home
