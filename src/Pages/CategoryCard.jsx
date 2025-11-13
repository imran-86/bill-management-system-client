import React from 'react';
import { Zap, Flame, Droplets, Wifi } from 'lucide-react';

const CategoryCard = () => {
    const categories = [
        {
            name: "Electricity",
            icon: Zap,
            gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
            stats: "1.2K bills"
        },
        {
            name: "Gas", 
            icon: Flame,
            gradient: "from-orange-400 via-orange-500 to-orange-600",
            stats: "856 bills"
        },
        {
            name: "Water",
            icon: Droplets, 
            gradient: "from-blue-400 via-blue-500 to-blue-600",
            stats: "942 bills"
        },
        {
            name: "Internet",
            icon: Wifi,
            gradient: "from-purple-400 via-purple-500 to-purple-600", 
            stats: "1.5K bills"
        }
    ];

    return (
        <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Bill Categories
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Choose a category to manage your bills
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                
                                <div className="relative p-8">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent size={32} className="text-white" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {category.name}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-4">
                                        {category.stats}
                                    </p>
                                    
                                    <div className="flex items-center text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                                        <span className="font-medium">Explore</span>
                                        <div className="w-0 group-hover:w-4 h-0.5 bg-current ml-2 transition-all duration-300"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;