import React from 'react';

const CardSmall = ({ title, stock, change }) => {
    const color = change > 0 ? 'text-green-500' : 'text-red-500';
    // const percent = stock? change ? change/stock : 0 : 0;
    const arrow = change > 0 ? "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" : "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3";
    return (
        <div className='w-full h-full rounded-xl bg-white flex p-3 justify-center items-center '>
            <div className='font-extralight text-sm'>
                <h2 className='mb-4'><span className='font-semibold'>Stock: </span> {title ? title : "Chart Title"}</h2>
                <span className='block mb-3'><span className='font-semibold'>Stock Price: </span>{stock ? "Rs " + String(stock) : "00.0"}</span>
                <p className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${color}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={arrow} />
                    </svg>
                    <span>{change}</span>
                </p>
            </div>
        </div>
    );
};

export default CardSmall;
