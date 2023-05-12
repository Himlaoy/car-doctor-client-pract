import React from 'react';
import pic1 from '../../../assets/images/banner/1.jpg'
import pic2 from '../../../assets/images/banner/2.jpg'
import pic3 from '../../../assets/images/banner/3.jpg'
import pic4 from '../../../assets/images/banner/4.jpg'

const Banners = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={pic1} className="w-full rounded-xl" />
                <div className="absolute flex   items-center  left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-6 w-1/2 p-10 '>
                        <p className='text-4xl font-bold'>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                            <button className="btn btn-outline btn-primary">Button</button>
                            <button className="btn btn-outline btn-secondary">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={pic2} className="w-full rounded-xl" />
                <div className="absolute flex   items-center  left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-6 w-1/2 p-10 '>
                        <p className='text-4xl font-bold'>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                            <button className="btn btn-outline btn-primary">Button</button>
                            <button className="btn btn-outline btn-secondary">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={pic3} className="w-full rounded-xl" />
                <div className="absolute flex   items-center  left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-6 w-1/2 p-10 '>
                        <p className='text-4xl font-bold'>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                            <button className="btn btn-outline btn-primary">Button</button>
                            <button className="btn btn-outline btn-secondary">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={pic4} className="w-full rounded-xl" />
                <div className="absolute flex   items-center  left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-6 w-1/2 p-10 '>
                        <p className='text-4xl font-bold'>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                            <button className="btn btn-outline btn-primary">Button</button>
                            <button className="btn btn-outline btn-secondary">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banners;