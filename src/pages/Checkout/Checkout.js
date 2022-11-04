import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider';

export default function Checkout() {
    const { title, price, _id } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value;
        const message = form.message.value;
        const email = form.email.value;

        const order = {
            serviceId: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }
    return (
        <div>
            <h1 className=' font-bold mb-8'>{title}</h1>

            <form onSubmit={handleOrder} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input type="text" name='firstName' placeholder="First Name" className="input input-ghost  input-bordered w-full max-w-xs" required />
                <input type="text" name='lastName' placeholder="Last Name" className="input  input-ghost  input-bordered w-full max-w-xs" required />
                <input type="text" name='phone' placeholder="Your Phone" className="input input-ghost input-bordered w-full max-w-xs" required />
                <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email && user.email} readOnly className="input input-bordered w-full max-w-xs input-ghost" required />

                <textarea name='message' className="textarea bg-slate-100  w-full" placeholder="Your Message"></textarea> <br />
                <input type="submit" value="Submit Order" className='btn btn-primary' />
            </form>
        </div>
    )
}
