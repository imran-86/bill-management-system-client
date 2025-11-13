import React, { use, useEffect, useRef, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { AuthContext } from '../Context/AuthContext';
import { Calendar, DollarSign, Download, Edit, FileText, Mail, MapPin, Phone, Trash2, User } from 'lucide-react';
import Swal from 'sweetalert2';
import { jsPDF } from 'jspdf';
const MyPayBills = () => {
    const {user} = use(AuthContext)
    const updateModalRef = useRef(null)
    const [myBills,setMyBills] = useState([]);
    const [selectedBill,setSelectedBill] = useState(null)
        const [loading,setLoading] = useState(true);
        console.log(user);
        
        
        
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
      let totalAmount = 0;
         myBills.forEach(bill => {
          totalAmount += parseInt(bill.amount);
         });
        //  console.log(totalAmount);
         
        const totalBills = myBills.length;
         const handleUpdateModal = (updatedBill)=>{
            setSelectedBill(updatedBill)
            updateModalRef.current.showModal();
    }
    const handleUpdateSubmit = (e)=>{
        e.preventDefault();
         const updatedData = {
      Phone: e.target.phone.value,
      Address: e.target.address.value,
      date: e.target.date.value,
      amount: e.target.amount.value,
     
       }
    //    console.log(updatedData);
        fetch(`http://localhost:3000/bills/${selectedBill?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(data=> {
         setMyBills(prevBills => 
        prevBills.map(bill => 
            bill._id === selectedBill._id 
                ? { ...bill, ...updatedData } 
                : bill
        )
    );
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
       
    }
     const handleDelete = (bill) => {
        console.log("Selected");
        
        // setSelectedBill(bill);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        fetch(`http://localhost:3000/bills/${bill?._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
     
    })
    .then(res => res.json())
    .then(data=> {
         setMyBills(prevBills => 
    prevBills.filter(bills => bills._id !== bill._id)
);
        // setSelectedBill(null);
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
   
      }
    });
  };
    // console.log(selectedBill);
const downloadPDFReport = (bills, currentUser) => {
    // Create new PDF instance
    const doc = new jsPDF();
    console.log(currentUser , bills);
    
    // Add title
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text('Bill Payment Report', 105, 20, { align: 'center' });
    
   // Add table headers
doc.setFontSize(10);
doc.setTextColor(255, 255, 255);
doc.setFillColor(59, 130, 246); 
doc.rect(20, 80, 170, 8, 'F');
doc.text('Bill ID', 25, 85);
doc.text('Phone', 50, 85);      
doc.text('Address', 90, 85);      
doc.text('Amount', 120, 85);
doc.text('Date', 145, 85);
doc.text('Status', 165, 85);

// Add bill data
doc.setTextColor(0, 0, 0);
let yPosition = 95;

bills.forEach((bill, index) => {
    // Alternate row colors
    if (index % 2 === 0) {
        doc.setFillColor(245, 245, 245);
        doc.rect(20, yPosition - 5, 170, 8, 'F');
    }

    // Fixed: Different X positions for each column
    doc.text(bill.billsId?.substring(18) || 'N/A', 25, yPosition);
    doc.text(bill.Phone || 'N/A', 50, yPosition);        // Changed from 90 to 50
    doc.text(bill.Address?.substring(0, 15) + (bill.Address?.length > 15 ? '...' : '') || 'N/A', 90, yPosition); // Changed from 90 to 75
    doc.text(`৳${bill.amount}`, 120, yPosition);
    doc.text(new Date(bill.date).toLocaleDateString(), 145, yPosition);
    doc.text(bill.status || 'Paid', 165, yPosition);
    
    yPosition += 8;
    
    // Add new page if needed
    if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
    }
});
    
    // Save the PDF
    doc.save(`bill-report-${currentUser.username}-${new Date().toISOString().split('T')[0]}.pdf`);
}
    
    return (
        
         <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Paid Bills</h1>
                    <p className="text-gray-600">Manage and view all your bill payments</p>
                </div>
                 {/* status section  */}
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Bills Paid</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{totalBills}</p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Amount Paid</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">
                                    ৳{totalAmount}
                                    </p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-lg">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                
                                <p className="text-lg font-semibold text-gray-900 mt-1 truncate">{user?.displayName}</p>
                                <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                            </div>
                            <div className="">
                                <img className='w-14 h-14 rounded-full' src={`${user?.photoURL}`} alt="" />
                            </div>
                        </div>
                    </div>
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
                        onClick={()=>downloadPDFReport(myBills,user)}
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
                                                        onClick={()=>handleUpdateModal(bill)}
                                                        className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-200"
                                                    >
                                                        <Edit size={14} />
                                                        Update
                                                    </button>
                                                    
                                                    <button
                                                       onClick={()=>handleDelete(bill)}
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

                
            </div>
            <div>
                <dialog ref={updateModalRef} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                 <h3 className="font-bold text-lg text-black">Payment</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
               <form 
               onSubmit={handleUpdateSubmit}
               >
                 <fieldset className="fieldset">
          
          <label className="label text-black">Amount</label>
          <input name='amount' type="text" className="input text-black" defaultValue={selectedBill?.amount} />
        <label className="label text-black">Address</label>
          <input name='address' type="text" className="input text-black" placeholder="Your Address"
          defaultValue={selectedBill?.Address}
          />
        
        <label className="label text-black">Phone</label>
          <input name='phone' type="text" className="input text-black" placeholder="Your Phone Number" 
          defaultValue={selectedBill?.Phone}
          />
        <label className="label text-black">Date</label>
          <input name='date' type="text" className="input text-black" 
          defaultValue={new Date().toLocaleDateString()}
           />
        
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
    );
    
};

export default MyPayBills;