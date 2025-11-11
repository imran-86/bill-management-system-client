import React from 'react';

const BillsCard = ({ bill }) => {
    const { 
        image, 
        title, 
        category, 
        location, 
        amount 
    } = bill;

    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            {/* Image Section */}
            <div className="h-48 overflow-hidden">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            
            {/* Content Section */}
            <div className="p-6">
                {/* Category Badge */}
                <div className="flex justify-between items-start mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                        ${category === 'Electricity' ? 'bg-blue-100 text-blue-800' : ''}
                        ${category === 'Gas' ? 'bg-orange-100 text-orange-800' : ''}
                        ${category === 'Water' ? 'bg-cyan-100 text-cyan-800' : ''}
                        ${category === 'Internet' ? 'bg-purple-100 text-purple-800' : ''}
                    `}>
                        {category}
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                        ${amount}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{location}</span>
                </div>

                {/* See Details Button */}
                <button
    
                className="cursor-pointer w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:shadow-lg active:scale-95 flex items-center justify-center group">
                    See Details
                    <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BillsCard;