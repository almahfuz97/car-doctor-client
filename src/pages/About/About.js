import React from 'react'
import img from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'

export default function About() {
    return (
        <div className="hero min-h-screen my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-full md:w-3/5  lg:w-1/2 relative mb-20 lg:mb-0'>
                    <img src={img} className=" rounded-lg shadow-2xl w-4/5" />
                    <img src={img2} alt="" className='absolute shadow-2xl w-1/2 top-3/4 right-5 rounded-lg' />
                </div>
                <div className='w-4/5 lg:w-1/2'>
                    <h4 className=' text-orange-500 font-bold'>About Us</h4>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn border btn-outline mt-8">Get More Info</button>
                </div>
            </div>
        </div>
    )
}
