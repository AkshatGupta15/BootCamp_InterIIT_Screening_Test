import React from 'react';
import DoughnutChart from './DoughnutChart';

const DoughnutCard = ({title, stock, change, fetchData}) => {
    if(fetchData.length === 0){
        return <div>Loading...</div>;
    }   
    return (
        <div className='w-full h-full rounded-xl bg-white p-3'>
            <div className=''><DoughnutChart fetchData={fetchData}/></div>
        </div>
    );
};

export default DoughnutCard;
