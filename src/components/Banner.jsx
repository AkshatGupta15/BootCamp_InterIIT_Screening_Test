import React from 'react';
import DashboardImg from '../assets/Dashboard-amico.png';
const BannerDashBoard = () => {
    return (
       <>
       <div className='bg-cyan w-full flex  p-4 h-full rounded-lg justify-center items-center text-center'> 
                    <div>
                        <span className='font-bold text-gray-900 mb-4 text-3xl block'>Welcome to your dashboard!</span>
                        <p className='font-extralight text-lg  text-gray-500'>Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!</p>
                    </div>
                    <div className='w-80 flex  '>
                        <img src={DashboardImg} alt='Dashboard'  className=''/>
                    </div>
                </div>
       </>
    );
};

export default BannerDashBoard;