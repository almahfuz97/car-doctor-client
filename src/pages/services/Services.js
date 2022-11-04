import React from 'react'
import ServiceCard from './ServiceCard'

export default function Services({ services }) {
    return (
        <div className=''>
            <div className='flex justify-center border'>
                <div className=' text-center'>
                    <p className=' text-orange-500 font-bold'>Service</p>
                    <h1 className=' text-3xl font-bold mb-2'>Our Service</h1>
                    <p className=' opacity-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, accusantium!</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    )
}
