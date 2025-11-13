import React from 'react';
import { Users, Target, Award, Heart, Shield, Zap } from 'lucide-react';

const AboutUs = () => {
    const teamMembers = [
        {
            name: "John Smith",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "10+ years in fintech and utility management"
        },
        {
            name: "Sarah Johnson",
            role: "CTO",
            image: "https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?s=2048x2048&w=is&k=20&c=U0nKYf9Ggh8S77U7DvPlFpRE0bKiSOD9gr9naxHEpfM=",
            description: "Expert in secure payment systems and scalability"
        },
        {
            name: "Mike Chen",
            role: "Product Manager",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Passionate about user experience and innovation"
        },
        {
            name: "Emily Davis",
            role: "Customer Success",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Dedicated to ensuring customer satisfaction"
        }
    ];

    const values = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Security First",
            description: "Your data and payments are protected with bank-level security"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Simplicity",
            description: "We make bill management as simple as possible for everyone"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Customer Focus",
            description: "Your satisfaction is our top priority"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Innovation",
            description: "Constantly improving to serve you better"
        }
    ];

    const stats = [
        { number: "50,000+", label: "Bills Processed" },
        { number: "10,000+", label: "Happy Customers" },
        { number: "99.9%", label: "Uptime" },
        { number: "24/7", label: "Support" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
           
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About BillManager</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        We're revolutionizing how people manage and pay their utility bills, 
                        making the process simpler, faster, and more secure.
                    </p>
                </div>
            </section>

          
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Founded in 2020, BillManager was born from a simple observation: 
                            managing utility bills was more complicated than it needed to be. 
                            People were spending hours each month tracking due dates, making payments, 
                            and organizing receipts across multiple platforms.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We set out to create a solution that brings all your utility bills 
                            together in one secure, easy-to-use platform. Today, we serve thousands 
                            of customers who trust us to manage their electricity, gas, water, 
                            and internet bills efficiently.
                        </p>
                    </div>

                   
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

          
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These principles guide everything we do at BillManager
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <div 
                                key={index}
                                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Dedicated professionals working to make bill management better for you
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-8">
                            <Target className="w-10 h-10" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            To simplify utility bill management for everyone, saving time and reducing stress 
                            while providing a secure, transparent, and user-friendly platform that puts 
                            customers in control of their payments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                                Get Started
                            </button>
                            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

          
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Simplify Your Bill Management?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust BillManager with their utility payments.
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300">
                        Start Free Trial
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;