import React, { use, useEffect, useRef, useState } from 'react';
import { ArrowLeft, Calendar, MapPin, DollarSign, FileText, Clock, User } from 'lucide-react';
import {  useNavigate, useParams } from 'react-router';
import LoadingSpinner from './LoadingSpinner';
import { AuthContext } from '../Context/AuthContext';

const BillDetails = () => {
    const {user} = use(AuthContext);
    const paymentModalRef = useRef(null)
    const { id } = useParams();
    
    const navigate = useNavigate();
    const [bill, setBill] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
     const isCurrentMonthBill = (billDate) => {
        if (!billDate) return false;
        
        const billDateObj = new Date(billDate);
        const currentDate = new Date();
        if(billDateObj.getMonth()===currentDate.getMonth() && billDateObj.getFullYear()===currentDate.getFullYear()){
            return true;
        }
        else{
            return false;
        }
        
    };
    const handlePaymentModal = ()=>{
        paymentModalRef.current.showModal();
    }
    const handlePaymentSubmit = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const amount = e.target.amount.value;
        const date = e.target.date.value;
        const billId = e.target.billId.value;
        console.log(name,email,address,phone,amount,billId,date);
        const payment  = {
           billsId : billId,
           username : name,
           Phone : phone,
           Address : address,
           email : email,
           amount : amount,
           date : date
        }

        fetch('http://localhost:3000/payments-history',{
           method: 'POST',
           headers: {
             'content-type' : 'application/json'
           },
           body: JSON.stringify(payment)
        })
        .then(res =>res.json())
        .then(data =>{
        console.log('After placing payment ',data);
        
        })


    }
    useEffect(() => {
        const fetchBillDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:3000/bill-details/${id}`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch bill details');
                }
                
                const data = await response.json();
                setBill(data);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching bill:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBillDetails();
    }, [id]);

    const getCategoryColor = (category) => {
        const colors = {
            Electricity: 'bg-gradient-to-r from-blue-500 to-blue-600',
            Gas: 'bg-gradient-to-r from-orange-500 to-orange-600',
            Water: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
            Internet: 'bg-gradient-to-r from-purple-500 to-purple-600'
        };
        return colors[category] || 'bg-gradient-to-r from-gray-500 to-gray-600';
    };

    const getCategoryIcon = (category) => {
        const icons = {
            Electricity: '⚡',
            Gas: '🔥',
            Water: '💧',
            Internet: '🌐'
        };
        return icons[category] || '📄';
    };

    if (loading) {
        return (
            <div className="min-h-screen  flex items-center justify-center">
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
                <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Error</h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    if (!bill) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
                <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
                    <div className="text-gray-500 text-6xl mb-4">📄</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Bill Not Found</h2>
                    <p className="text-gray-600 mb-6">The requested bill could not be found.</p>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen  py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
                    >
                        <ArrowLeft size={20} />
                        Back to Bills
                    </button>
                    
                    <div className={`px-4 py-2 rounded-full text-white font-semibold ${getCategoryColor(bill.category)}`}>
                        {getCategoryIcon(bill.category)} {bill.category}
                    </div>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Image Section */}
                    <div className="relative h-80 overflow-hidden">
                        <img
                            src={bill.image}
                            alt={bill.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <h1 className="text-3xl font-bold text-white mb-2">{bill.title}</h1>
                            <div className="flex items-center gap-4 text-white/90">
                                <div className="flex items-center gap-1">
                                    <MapPin size={18} />
                                    <span className="text-sm">{bill.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar size={18} />
                                    <span className="text-sm">{new Date(bill.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column - Details */}
                            <div className="lg:col-span-2">
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <FileText size={20} />
                                        Description
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {bill.description}
                                    </p>
                                </div>

                                {/* Additional Info */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Bill Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                            <span className="text-gray-600">Reported By</span>
                                            <span className="font-medium text-gray-800">{bill.email}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                            <span className="text-gray-600">Category</span>
                                            <span className="font-medium text-gray-800">{bill.category}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                                            <span className="text-gray-600">Location</span>
                                            <span className="font-medium text-gray-800">{bill.location}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <span className="text-gray-600">Date Reported</span>
                                            <span className="font-medium text-gray-800">
                                                {new Date(bill.date).toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Amount Card */}
                            <div className="lg:col-span-1">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                                    <div className="text-center mb-6">
                                        <DollarSign size={48} className="mx-auto mb-2 opacity-80" />
                                        <h3 className="text-2xl font-bold">Total Amount</h3>
                                    </div>
                                    
                                    <div className="text-center mb-6">
                                        <span className="text-5xl font-bold">${bill.amount}</span>
                                        <p className="text-blue-100 mt-2">Bill Charge</p>
                                    </div>

                                    <div className="space-y-3">
                                        {
    isCurrentMonthBill(bill.date) ? 
        <button
            onClick={handlePaymentModal}
            className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors duration-200"
        >
            Pay Now
        </button> : 
        <button 
            disabled
            className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors duration-200 opacity-50 cursor-not-allowed"
        >
            Pay Now
        </button>
}
                                        
                                        <button className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 rounded-lg transition-colors duration-200">
                                            Download Invoice
                                        </button>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-blue-400/30">
                                        <div className="flex items-center justify-center gap-2 text-blue-100 text-sm">
                                            <Clock size={16} />
                                            <span>Last updated: {new Date().toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                   
                                    
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
              {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog ref={paymentModalRef} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                 <h3 className="font-bold text-lg text-black">Payment</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
               <form 
               onSubmit={handlePaymentSubmit}
               >
                 <fieldset className="fieldset">
          <label className="label text-black">Email</label>
          <input name='email' type="email" className="input text-black" readOnly defaultValue={user?.email} />
          <label className="label text-black">Username</label>
          <input name='name' type="text" className="input text-black" defaultValue={user?.displayName}
          readOnly
          />
           <label className="label text-black">BillId</label>
          <input name='billId' type="text" className="input text-black" defaultValue={id}
          readOnly
          />
          <label className="label text-black">Amount</label>
          <input name='amount' type="text" className="input text-black" defaultValue={bill.amount} readOnly/>
        <label className="label text-black">Address</label>
          <input name='address' type="text" className="input text-black" placeholder="Your Address" />
        
        <label className="label text-black">Phone</label>
          <input name='phone' type="text" className="input text-black" placeholder="Your Phone Number" />
        <label className="label text-black">Date</label>
          <input name='date' type="text" className="input text-black" defaultValue={new Date().toLocaleDateString()} />
        
        <button className="btn btn-neutral mt-4">Pay</button>
        </fieldset>

               </form>
               
               
               <div className="modal-action">
                <form method="dialog">
               {/* if there is a button in form, it will close the modal */}
                   <button className="btn">Close</button>
                </form>
               </div>
                    </div>
                     </dialog>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillDetails;