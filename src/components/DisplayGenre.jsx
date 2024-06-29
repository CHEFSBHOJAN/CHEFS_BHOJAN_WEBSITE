import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Dishes from '../js/Menu'
import VegIcon from '../assets/Veg_symbol.svg'
import NonVegIcon from '../assets/Non_veg_symbol.svg'
import dummydish from '../assets/photos/dummydish.jpg'
import Cart from '../components/cart'
import { useCart } from '../contexts/CartContext'
import { FaArrowLeft } from 'react-icons/fa'

function DisplayGenre() {
    const { genre } = useParams()
    const { addToCart } = useCart()
    const navigate = useNavigate()

    const GoBack = () => {
        navigate('/')
    }

    const getItemsByGenre = (genre) => {
        let filteredItems = []

        Object.keys(Dishes[0].subcategory).forEach((subcategoryKey) => {
            Dishes[0].subcategory[subcategoryKey].forEach((item) => {
                if (item.genre === genre.toLowerCase()) {
                    filteredItems.push(item)
                }
            })
        })

        return filteredItems
    }

    const filteredItems = getItemsByGenre(genre)

    console.log(filteredItems)

    return (
        <div className='mb-80'>
            <button onClick={GoBack} className=' z-20 fixed top-5 right-3 bg-black p-4 rounded-full'><FaArrowLeft size={20} color='white' /></button>
            <div className="pt-14 flex flex-col items-center justify-center overflow-x-hidden">
                <h1 className="mb-4 px-5 py-3 bg-amber-400 rounded-full font-poppins text-2xl text-white font-semibold ">Items of {genre.toUpperCase()}</h1>
                <div className="flex flex-wrap justify-center">
                    {filteredItems.map((dish, index) => (
                        <div key={index} className="dish-item px-2 py-4 grid grid-cols-2 gap-2 border-b-2 border-dashed">
                            <div className="dish-info" >
                                <div className="dish-type-icons">
                                    {dish.type === 'veg' ? (
                                        <img className='mx-1 h-4 w-4' src={VegIcon} alt="" />
                                    ) : (
                                        <img className='mx-1 h-4 w-4' src={NonVegIcon} alt="" />
                                    )}
                                </div>
                                <h3 className=' py-4 px-1 text-lg text-black font-semibold'>{dish.name}</h3>
                                <p className='py-1 px-1 text-lg text-black font-semibold'>₹{dish.price}</p>
                                <p className='py-1 px-1 text-[10px] text-slate-500 font-thin'>{dish.description}</p>
                            </div>
                            <div className='relative h-48 w-48 flex justify-center'>
                                <img src={dummydish} className='h-40 w-40 rounded-3xl drop-shadow-xl shadow-slate-600' alt="" />
                                <button onClick={() => addToCart(dish)} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 px-10 py-2 text-xl bg-slate-100/90 text-amber-500 font-poppins font-bold border-2 border-amber-500 rounded-xl'>ADD</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Cart />
        </div>
    )
}

export default DisplayGenre