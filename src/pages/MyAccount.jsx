import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import chefsbhojans_logo from '/chefbhojans_logo.png'
import Footer from '../components/footer'

function MyAccount() {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('myOrders')) || []
        const sortedOrders = storedOrders.sort((a, b) => new Date(b.date) - new Date(a.date))
        setOrders(sortedOrders);
    }, [])

    const GoBack = () => {
        navigate('/')
    }

    const deleteOrders = () => {
        localStorage.removeItem('myOrders');
        setOrders([]);
    }

    const openReviewPage = () => {
        window.open('https://www.google.com/maps/place/Chef\'s+Bhojan+Margao/@15.2604922,73.9709158,17z/data=!4m8!3m7!1s0x3bbfb3d96752bead:0x6a9132337283b2cf!8m2!3d15.2604922!4d73.9734907!9m1!1b1!16s%2Fg%2F11w3gh5skh?entry=ttu', '_blank');
    }

    return (
        <div>
            <div className='h-screen w-auto overflow-y-auto'>
                <div className='flex items-center h-24 bg-amber-400 rounded-b-3xl'>
                    <img src={chefsbhojans_logo} className='px-5 h-16' alt="Chef's Bhojan Logo" />
                    <h1 className="flex text-xl font-extrabold font-poppins text-black">CHEFS BHOJAN</h1>
                </div>
                <button onClick={GoBack} className='z-20 fixed top-8 right-3 bg-black p-4 rounded-full'>
                    <FaArrowLeft size={20} color='white' />
                </button>
                <h1 className="pt-5 text-3xl font-bold text-center mb-5">My Orders</h1>
                {orders.length === 0 ? (
                    <p className="text-center text-lg">You have no orders yet.</p>
                ) : (
                    <div className="space-y-5">
                        {orders.map((order) => (
                            <div key={order.orderId} className="p-5 bg-white shadow rounded-md">
                                <h2 className="text-xl font-bold mb-3">Order ID: {order.orderId}</h2>
                                <p className="text-gray-600 mb-3">Date: {new Date(order.date).toLocaleString()}</p>
                                <div className="mb-3">
                                    <h3 className="text-lg font-semibold">Items:</h3>
                                    <ul className="list-disc pl-5">
                                        {order.items.map((item) => (
                                            <li key={item.id} className="mb-2">
                                                <div className="flex justify-between">
                                                    <span>{item.name} (x{item.quantity})</span>
                                                    <span>₹{item.price.toFixed(2)}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-lg font-bold">Total Cost: ₹{order.totalCost}</p>
                                <button onClick={openReviewPage} className='mt-2 px-4 py-1 border-2 border-gray-200 rounded-2xl bg-amber-300 text-md font-poppins font-thin drop-shadow-lg'>Review Order</button>
                            </div>
                        ))}
                    </div>
                )}
                <div className=' mt-5 flex justify-center'>
                    <button onClick={deleteOrders} className="bg-red-500 text-white  px-4 py-2 rounded-md mb-4 ml-4">
                        Clear Orders
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyAccount
