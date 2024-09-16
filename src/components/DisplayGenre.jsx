import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Dishes from '../js/Menu'
import VegIcon from '../assets/Veg_symbol.svg'
import NonVegIcon from '../assets/Non_veg_symbol.svg'
import LoadingPage from './loading'
import ProductCard from './ProductCard'
import Cart from '../components/cart'
import { useCart } from '../contexts/CartContext'
import { FaArrowLeft } from 'react-icons/fa'

function DisplayGenre() {
    const { genre } = useParams()
    const { addToCart } = useCart()
    const navigate = useNavigate()
    const [filteredItems, setFilteredItems] = useState([])
    const [loading, setLoading] = useState(true)

    const GoBack = () => {
        navigate('/')
    }

    const getItemsByGenre = (genre) => {
        let filteredItems = []

        Dishes.forEach((category) => {
            Object.keys(category.subcategory).forEach((subcategoryKey) => {
                category.subcategory[subcategoryKey].forEach((item) => {
                    if (item.genre === genre) {
                        filteredItems.push(item)
                    }
                })
            })
        })

        return filteredItems
    }

    console.log(genre)

    console.log(filteredItems)

    useEffect(() => {
        setLoading(true)
        const filteredItems = getItemsByGenre(genre)
        setFilteredItems(filteredItems)
        setLoading(false)
    }, [genre])

    if (loading) {
        return (
            <LoadingPage />
        )
    }

    return (
        <div className='mb-80'>
            <button onClick={GoBack} className=' z-20 fixed top-5 right-3 bg-black p-4 rounded-full'><FaArrowLeft size={20} color='white' /></button>
            <div className="pt-14 flex flex-col items-center justify-center overflow-x-hidden">
                <h1 className="mb-4 px-5 py-3 bg-amber-400 rounded-full font-poppins text-2xl text-white font-semibold ">Items of {genre.toUpperCase()}</h1>
                <div className="flex flex-wrap justify-center">
                    {filteredItems.map((dish, index) => (
                        <ProductCard key={index} dish={dish} />
                    ))}
                </div>
            </div>
            <Cart />
        </div>
    )
}

export default DisplayGenre
