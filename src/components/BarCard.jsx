import React from 'react';
import BarChart from './BarChart';

const BarCard = ({title, stock, change, fetchData}) => {
    if(fetchData.length === 0){
        return <div>Loading...</div>;
    }   
    return (
        <div className='w-full h-full rounded-xl bg-white p-3'>
            <div className=''><BarChart fetchData={fetchData}/></div>
        </div>
    );
};

export default BarCard;
