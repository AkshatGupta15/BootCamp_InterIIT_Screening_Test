import React, { useState, useEffect } from 'react';
import Charts from '../components/chart';
import BannerDashBoard from '../components/Banner';
import DoughnutChart from '../components/DoughnutChart';
import BarChart from '../components/BarChart';
import CardLarge from '../components/BarCard';
import BarCard from '../components/BarCard';
import DoughnutCard from '../components/DoughnutCard';
import CardSmall from '../components/CardSmall';

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const urls = [
                'http://localhost:3000/api/stocks/latest/TCS.NS',
                'http://localhost:3000/api/stocks/latest/RELIANCE.NS',
                'http://localhost:3000/api/stocks/latest/HDFCBANK.NS'
            ];

            const responses = await Promise.all(urls.map(url => fetch(url)));
            const results = await Promise.all(responses.map(response => response.json()));

            setData(results);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(!data.length){
            fetchData();
        }
        fetchData().then(() => console.log('Data fetched!',data));
        // console.log(data);
    }, []);

    if (loading || !data.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className=''>
                <div className="grid grid-cols-3 grid-rows-10 gap-4 p-5">
                    <div className="col-span-3 row-span-3">
                        <BannerDashBoard/>
                    </div>
                    <div className="row-span-2 col-start-1 row-start-4">
                        <CardSmall title={data[0].symbol} stock={data[0].price} change={data[0].change}/>
                    </div>
                    <div className="col-span-2 row-span-4 col-start-1 row-start-6">
                        <BarCard fetchData={data}/>
                    </div>
                    <div className="row-span-2 col-start-2 row-start-4">
                        <CardSmall title={data[1].symbol} stock={data[1].price} change={data[1].change}/>
                    </div>
                    <div className="row-span-2 col-start-3 row-start-4">
                        <CardSmall title={data[2].symbol} stock={data[2].price} change={data[2].change} />
                    </div>
                    <div className="row-span-4 col-start-3 row-start-6">
                        <DoughnutCard fetchData={data}/>
                    </div>
                </div>
            </div> 
        </>
    );
}