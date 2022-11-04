import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
    console.log(service)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${service._id}`}>
                        <button className="btn btn-primary">Add Orders</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
