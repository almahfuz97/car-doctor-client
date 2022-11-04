import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import OrdersRow from './OrdersRow';

export default function Orders() {
    const { user, loading } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    console.log(orders)


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err))

    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete it?');
        console.log(proceed)
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(os => os._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    if (loading) return <div>Loading...</div>

    return (
        <div>
            {
                <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <p>Delete</p>
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    orders.map(order => <OrdersRow key={order._id} order={order} handleDelete={handleDelete} />)
                                }

                            </tbody>

                        </table>
                    </div>

                </div>
            }
        </div>
    )
}
