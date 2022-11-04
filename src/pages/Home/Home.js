import React from 'react'
import { useLoaderData } from 'react-router-dom'
import About from '../About/About'
import Services from '../services/Services'
import Banner from './Banner/Banner'

export default function Home() {
    const services = useLoaderData();
    console.log(services.length)
    return (
        <div>
            <Banner />
            <About />
            <Services services={services} />

        </div>
    )
}
