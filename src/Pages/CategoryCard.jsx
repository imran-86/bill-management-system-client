import React from 'react';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router';

const CategoryCard = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center py-20">
            <div className="container mx-auto px-4 text-center">
              
                <Fade direction="down" duration={800} triggerOnce>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                        Manage Your
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                            {" "}Utility Bills
                        </span>
                    </h1>
                </Fade>

                {/* Subtitle with Zoom Animation */}
                <Zoom duration={1000} delay={300} triggerOnce>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Simple, fast, and secure way to manage all your electricity, gas, water, and internet bills in one place.
                    </p>
                </Zoom>

                {/* Features Grid with Slide Animation */}
                <Slide direction="up" duration={800} delay={500} triggerOnce>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        {[
                            { icon: '⚡', title: 'Electricity', desc: 'Power bills' },
                            { icon: '🔥', title: 'Gas', desc: 'Gas bills' },
                            { icon: '💧', title: 'Water', desc: 'Water bills' },
                            { icon: '🌐', title: 'Internet', desc: 'Internet bills' }
                        ].map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </Slide>

                {/* CTA Buttons with Fade Animation */}
                <Fade direction="up" duration={800} delay={700} triggerOnce>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get Started Free
                        </button>
                        
                        <Link
                        to="/about-us"
                        className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                            About Us
                        </Link>
                    </div>
                </Fade>

                {/* Stats with Fade Animation */}
                <Fade direction="up" duration={800} delay={900} triggerOnce>
                    <div className="flex flex-wrap justify-center gap-8 mt-16 text-gray-600">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">10K+</div>
                            <div className="text-sm">Happy Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">50K+</div>
                            <div className="text-sm">Bills Paid</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">24/7</div>
                            <div className="text-sm">Support</div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default CategoryCard;