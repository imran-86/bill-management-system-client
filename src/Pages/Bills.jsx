import React, { useEffect, useState } from 'react';
import BillsCard from './BillsCard';

const Bills = () => {

    const [bills,setBills] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:3000/bills')
        .then(res=>res.json())
        .then((data)=>{
            setBills(data);
            setLoading(false);
        })
    },[])
    if(loading){
        return <p>Loading . . .</p>
    }
    return (
        <div className='my-30'>
            <h2 className='text-5xl font-bold text-center mb-20'>All Utility Bills</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
         {bills.map(bill => <BillsCard key={bill._id} bill={bill}/>)}
      </div>
        </div>
    );
};

export default Bills;