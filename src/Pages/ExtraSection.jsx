import React from 'react';

const ExtraSection = () => {
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
    return (
        <div>
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
            
        </div>
    );
};

export default ExtraSection;