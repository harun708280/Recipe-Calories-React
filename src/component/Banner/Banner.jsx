import React from 'react';
import bannerImage from './chi-siamo2.webp'
const Banner = () => {
    return (
        <div className='relative' style={{backgroundImage:`url(${bannerImage})`, height: '600px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius:'10px'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black "></div>
            <div className= " relative text-white py-40 text-center w-6/12 mx-auto">
            <h1 className='text-4xl font-bold '>Discover an exceptional cooking class tailored for you!</h1>
            <p className='my-5  font-bold'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className=" flex justify-center space-x-4">
            <button className='btn text-white text-xl font-bold bg-[#0BE58A] border-none rounded-3xl'>Explore Now</button> <button className='btn text-xl font-bold !bg-transparent rounded-3xl shadow-none text-white'>Our Feedback</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;