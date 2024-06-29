import React, { useEffect, useState } from 'react'
import { useCart } from '../contexts/CartContext'

const DisplayOrder = () => {
    const [order, setOrder] = useState(null)
    const { emptyCart, deleteOrder } = useCart()

    useEffect(() => {
        const storedOrder = JSON.parse(localStorage.getItem('myOrder'))
        if (storedOrder) {
            setOrder(storedOrder)
        }
    }, [])

    console.log(order)

    const handleDeleteOrder = () => {
        deleteOrder()
        setOrder(null)
        emptyCart()
    }

    if (!order) {
        return <div className=' mx-3 px-5 py-3 bg-white drop-shadow-xl shadow-top'><h1>No order found</h1></div>
    }

    return (
        <div className=' mx-3 px-5 py-3 bg-white drop-shadow-xl shadow-top'>
            <h2 className=' bg-amber-300 p-2 rounded-t-xl text-lg font-bold '>Order ID: {order.orderId}</h2>
            <h2 className=' bg-amber-100 p-2 rounded-b-xl text-slate-800  text-lg font-bold '>Total Amount : ₹{order.totalCost}</h2>
            <ul className=' p-4 space-y-5 list-decimal'>
                {order.items.map(item => (
                    <li key={item.id}>
                        <h3 className=' text-lg font-semibold underline underline-offset-2'>{item.name}</h3>
                        <p>Price: ₹{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </li>
                ))}
            </ul>
            <div className='flex flex-col space-y-2'>
                <button className=' px-5 py-2 border-2 border-red-500 bg-red-200 rounded-lg' onClick={handleDeleteOrder}>Delete Order</button>
            </div>
        </div>
    )
}

export default DisplayOrder
