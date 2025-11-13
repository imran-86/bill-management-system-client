import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Easy Bill Management",
            description: "Manage all your utility bills in one place with our simple and efficient system."
        },
        {
            id: 2,
            image: "https://media.istockphoto.com/id/1401461124/photo/hand-of-businessman-using-smart-phone-with-coin-icon.jpg?s=2048x2048&w=is&k=20&c=XGWH-S7OtF31PcVB0we5yjeTe0hV9BiOcLdwY5Pv_oc=",
            title: "Pay Bills Online",
            description: "Secure online payments for electricity, gas, water, and internet bills."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Track Your Payments",
            description: "Keep track of all your bill payments and download reports anytime."
        }
    ];

    return (
        <div className="mx-auto max-w-7xl h-96 md:h-[500px] relative mt-20">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-96 md:h-[500px]">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                                <div className="text-center text-white px-4">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                        {slide.title}
                                    </h2>
                                    <p className="text-lg md:text-xl max-w-2xl">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;