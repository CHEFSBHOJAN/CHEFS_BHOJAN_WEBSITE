import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { useCart } from '../contexts/CartContext'
import { useOutlet } from '../contexts/OutletContext'

function OrderForm() {
    const { emptyCart, deleteOrder } = useCart()
    const [order, setOrder] = useState(null)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('')
    const { selectedOutlet, setSelectedOutlet } = useOutlet()
    const navigate = useNavigate()

    useEffect(() => {
        const storedOrder = JSON.parse(localStorage.getItem('myOrder'))
        if (storedOrder) {
            setOrder(storedOrder)
        }
    }, [])

    const GoBack = () => {
        navigate('/')
    }

    const validateForm = () => {
        return name && phone && address && pincode && paymentMethod
    }

    const handleOrderPlacement = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            await placeOrder()
        } else {
            alert('Please fill out all fields')
        }
    }

    const OrderPlaced = () => {
        emptyCart()
        deleteOrder()
        setTimeout(() => {
            navigate('/MyAccount')
        }, 500)
    }

    const placeOrder = async () => {
        const newOrder = {
            orderId: Date.now(),
            name,
            phone,
            address,
            pincode,
            paymentMethod,
            selectedOutlet,
            items: order.items,
            totalCost: order.totalCost,
            date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
        }

        try {
            const response = await fetch('https://chefs-bhojan-webackend.vercel.app/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newOrder)
            });

            if (response.ok) {
                const storedOrders = JSON.parse(localStorage.getItem('myOrders')) || []
                storedOrders.push(newOrder)
                localStorage.setItem('myOrders', JSON.stringify(storedOrders))
                localStorage.removeItem('myOrder')
                OrderPlaced()
            } else {
                const errorResponse = await response.json()
                console.error('Failed to place order')
                alert(errorResponse.message)
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Failed to Place Order due to Bad Connection. Try Again')
        }
    }

    if (!order) {
        return <div className='px-5 py-3 h-screen w-screen flex flex-col justify-center items-center bg-amber-400'>
            <h1 className=' text-4xl font-extrabold font-poppins underline decoration-wavy'>No order found</h1>
            <p className='py-3 text-lg font-semibold text-white'>Add some orders to cart</p>
            <button onClick={GoBack} className=' px-10 py-2 bg-black/70 rounded-xl border-2 border-slate-50 text-white font-bold'>Go Back</button>
        </div>
    }

    return (
        <div className="mx-auto py-5">
            <button onClick={GoBack} className='z-20 fixed top-8 right-3 bg-black p-4 rounded-full'><FaArrowLeft size={20} color='white' /></button>
            <div className='pl-5 py-5 bg-amber-400 w-4/5 rounded-r-full flex justify-center items-center space-x-5'>
                <h1 className="text-2xl text-white font-poppins font-extrabold">Order Details</h1>
            </div>
            <form onSubmit={handleOrderPlacement} className="max-w-lg mx-3 my-4 px-7 py-6 bg-white drop-shadow-xl">
                <h1 className='py-2 text-center font-semibold underline-offset-4 underline'>Fill In The Contact Details</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        rows="3"
                        className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Selected Outlet</label>
                    <div className="flex items-center">
                        <input
                            id="Ponda"
                            name="selectedOutlet"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            value="Ponda"
                            checked={selectedOutlet === 'Ponda'}
                            onChange={(e) => setSelectedOutlet(e.target.value)}
                            required
                        />
                        <label htmlFor="Ponda" className="ml-3 block text-sm font-medium text-gray-700">Ponda</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="Margao"
                            name="selectedOutlet"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            value="Margao"
                            checked={selectedOutlet === 'Margao'}
                            onChange={(e) => setSelectedOutlet(e.target.value)}
                            required
                        />
                        <label htmlFor="Margao" className="ml-3 block text-sm font-medium text-gray-700">Margao</label>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                    <div className="mt-1 grid grid-cols-1 gap-y-2 sm:grid-cols-2">
                        <div className="flex items-center">
                            <input
                                id="cod"
                                name="paymentMethod"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                value="COD"
                                checked={paymentMethod === 'COD'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required
                            />
                            <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">COD (Cash on Delivery)</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="payNow"
                                name="paymentMethod"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                value="PayNow"
                                checked={paymentMethod === 'PayNow'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required
                            />
                            <label htmlFor="payNow" className="ml-3 block text-sm font-medium text-gray-700">Pay Now</label>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Place Order
                </button>
            </form>
        </div>
    )
}

export default OrderForm
