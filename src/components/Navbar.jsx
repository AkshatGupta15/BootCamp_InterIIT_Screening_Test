import React from 'react';

const Navbar = () => {
    return (
        <header className='bg-white h-[60px]  shadow border-b-2  border-opacity-15 px-6'>
        <div className='flex justify-between py-2 px-4 items-center h-full gap-4'>
            <div className='flex justify-between items-center relative w-full'>
                <div className='flex items-center w-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-2 size-3 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input type='text' placeholder='Search' className=' w-48 bg-bg_light rounded-xl py-2 px-2 text-[10px] font-thin pl-5' />

                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>

                </div>
            </div>
            <div className='flex justify-between items-center text-[11px] font-light gap-4 w-48'>
                <span>Matt Appleyard</span>
                <div className='bg-[#D1E1FE] w-8 h-8 rounded-full  flex justify-center items-center text-[#7A00FF]'>USER</div>
            </div>
        </div>
    </header>
    );
};

export default Navbar;