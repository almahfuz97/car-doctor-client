import React, { useEffect, useState } from 'react'

export default function OrdersRow({ order, handleDelete }) {
    const { customer, serviceName, price, phone, serviceId, _id } = order
    const [orderService, setOrderService] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [serviceId])

    // const handleDelete = (id) => {
    //     const proceed = window.confirm('Do you want to delete it?');
    //     console.log(proceed)
    //     if (proceed) {
    //         fetch(`http://localhost:5000/orders/${id}`, {
    //             method: "DELETE",
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {

    //                     fetch(`http://localhost:5000/orders`)
    //                         .then(res => res.json())
    //                         .then(resData => setAllOrders(resData))

    //                     const remaining = allOrders.filter(os => os._id !== id);
    //                     setOrderService(remaining);
    //                 }
    //             })
    //     }
    // }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    )
}
