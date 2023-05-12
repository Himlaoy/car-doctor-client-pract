import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img src={person} className=" rounded-lg shadow-2xl w-3/4" />
                    <img src={parts} className=" rounded-lg shadow-2xl absolute w-1/2 left-60 top-36 border-8 border-gray-400" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h1 className="text-4xl font-bold text-orange-400">About us</h1>
                    <p className="py-6 text-5xl">We are qualified & of experience in this field.</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-warning">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;