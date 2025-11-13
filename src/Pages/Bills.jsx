import React, { useEffect, useState } from 'react';
import BillsCard from './BillsCard';
import LoadingSpinner from './LoadingSpinner';

const Bills = () => {
    const [filteredBills, setFilteredBills] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');


    const [bills,setBills] = useState([]);
    const [loading,setLoading] = useState(true);
    const categories = ['All', 'Electricity', 'Gas', 'Water', 'Internet'];
    useEffect(()=>{
        fetch('http://localhost:3000/bills')
        .then(res=>res.json())
        .then((data)=>{
            setBills(data);
            setFilteredBills(data);
            setLoading(false);
        })
    },[])
    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredBills(bills);
        } else {
            const filtered = bills.filter(bill => 
                bill.category === selectedCategory
            );
            setFilteredBills(filtered);
        }
    }, [selectedCategory, bills]);
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='my-30 max-w-7xl mx-auto'>
            <div className='flex justify-between'>
                 <h2 className='text-5xl font-semibold text-center mb-20'>All Utility Bills</h2>
                 <div className="mb-12">
             <div className="flex justify-center">
        <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            {categories.map(category => (
                <option key={category} value={category}>
                    {category} {category !== 'All' && `(${bills.filter(b => b.category === category).length})`}
                </option>
            ))}
        </select>
    </div>
    
    <div className="text-center mt-4">
        <p className="text-gray-600">
            {selectedCategory === 'All' 
                ? `All ${bills.length} bills`
                : ` ${filteredBills.length} ${selectedCategory.toLowerCase()} bills found`
            }
        </p>
    </div>
</div>
            </div>
      
          

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredBills.map(bill => <BillsCard key={bill._id} bill={bill}/>)}
      </div>
        </div>
    );
};

export default Bills;