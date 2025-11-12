import React, { useEffect, useState } from 'react';
import BillsCard from './BillsCard';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router';

const Home = () => {
    const [latestBills,setLatestBills] = useState([]);
        const [loading,setLoading] = useState(true);
    
        useEffect(()=>{
            fetch('http://localhost:3000/latest-bills')
            .then(res=>res.json())
            .then((data)=>{
                setLatestBills(data);
                setLoading(false);
            })
        },[])
        if(loading){
            return <LoadingSpinner></LoadingSpinner>
        }
    return (
        <div className='my-30'>
            <h2 className='text-5xl font-bold text-center mb-20'>Recent Bills</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
         {latestBills.map(bill => <BillsCard key={bill._id} bill={bill}/>)}
          </div>
           <Link
            to="/bills"
                className="mx-auto mt-10   cursor-pointer max-w-md z hover:from-blue-600 hover:to-blue-700  font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:shadow-lg active:scale-95 flex items-center justify-center group">
                    See all ...
                    <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
        </div>
    );
};

export default Home;