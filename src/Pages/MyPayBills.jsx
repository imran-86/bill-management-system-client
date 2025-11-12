import React, { use, useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { AuthContext } from '../Context/AuthContext';
import { Calendar, DollarSign, Download, Edit, FileText, Mail, MapPin, Phone, Trash2, User } from 'lucide-react';

const MyPayBills = () => {
    const {user} = use(AuthContext)
    const [myBills,setMyBills] = useState([]);
        const [loading,setLoading] = useState(true);
        
        
        
        useEffect(()=>{
             if (!user?.email) {
        console.log('No user');
        setLoading(false);
        return;
    }
            fetch(`http://localhost:3000/myPayBills?email=${user.email}`)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                
                setMyBills(data);
                setLoading(false);
            })
        },[user?.email])
        if(loading){
            return <LoadingSpinner></LoadingSpinner>
        }
        // console.log(myBills);
        
    return (
        
         <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Paid Bills</h1>
                    <p className="text-gray-600">Manage and view all your bill payments</p>
                </div>

              
                

                {/* Actions Bar */}
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Payment History</h2>
                        <p className="text-gray-600 text-sm">
                            Showing {myBills.length} bill{myBills.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                    
                    <button
                        
                        disabled={myBills.length === 0}
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                        <Download size={18} />
                        Download Report
                    </button>
                </div>

                {/* Bills Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {myBills.length === 0 ? (
                        <div className="text-center py-12">
                            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">No Bills Found</h3>
                            <p className="text-gray-500">You haven't paid any bills yet.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            User Details
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Amount
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Contact Info
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {myBills.map((bill, index) => (
                                        <tr key={bill._id || index} className="hover:bg-gray-50 transition-colors duration-150">
                                            {/* User Details */}
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <User size={16} className="text-gray-400" />
                                                        <span className="font-medium text-gray-900">{bill.username}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Mail size={14} className="text-gray-400" />
                                                        {bill.email}
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Amount */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <DollarSign size={16} className="text-green-500" />
                                                    <span className="font-semibold text-green-600">৳{bill.amount?.toLocaleString()}</span>
                                                </div>
                                                {bill.billTitle && (
                                                    <p className="text-sm text-gray-500 mt-1 truncate max-w-xs">
                                                        {bill.billTitle}
                                                    </p>
                                                )}
                                            </td>

                                            {/* Contact Info */}
                                            <td className="px-6 py-4">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <MapPin size={14} className="text-gray-400" />
                                                        <span className="text-gray-600 truncate max-w-xs">{bill.Address}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Phone size={14} className="text-gray-400" />
                                                        <span className="text-gray-600">{bill.Phone}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Date */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Calendar size={14} className="text-gray-400" />
                                                    {new Date(bill.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </td>

                                            {/* Actions */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        
                                                        className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-200"
                                                    >
                                                        <Edit size={14} />
                                                        Update
                                                    </button>
                                                    <button
                                                       
                                                        className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-200"
                                                    >
                                                        <Trash2 size={14} />
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Footer Summary */}
                {myBills.length > 0 && (
                    <div className="mt-6 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">Summary</h3>
                                <p className="text-gray-600 text-sm">
                                    Total {myBills.length} bill{myBills.length !== 1 ? 's' : ''} paid
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-green-600">234567890
                                    {/* ৳{totalAmount.toLocaleString()} */}
                                    </p>
                                <p className="text-sm text-gray-600">Total Amount Paid</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
    
};

export default MyPayBills;