import React from 'react'
import OrderForm from '../components/orderForm'
import { CartProvider } from "../contexts/CartContext"
import DisplayOrder from '../components/DisplayOrder'
import { OutletProvider } from '../contexts/OutletContext'

function Order() {

    return (
        <CartProvider>
            <div className=' h-[1000px] bg-slate-50 overflow-y-auto'>
                <OutletProvider>
                    <OrderForm />
                </OutletProvider>
                <DisplayOrder />
            </div>
        </CartProvider>
    )
}

export default Order
