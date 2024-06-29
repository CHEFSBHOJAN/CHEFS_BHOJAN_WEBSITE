import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BiChevronDown } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { useOutlet } from '../contexts/OutletContext'
import chefsbhojans_logo from '/chefbhojans_logo.png'

function NavBar() {
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false)
    const { selectedOutlet, setSelectedOutlet } = useOutlet()

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleOutletSelect = (outlet) => {
        setSelectedOutlet(outlet)
        setShowDropdown(false)
    }

    const outletAddresses = {
        Ponda: "Chef's Bhojan, opp. Shri Sakhliyo Khotadevchar, near Sarthak Nest, Nagzar, Curti, Goa 403401",
        Margoa: "The City of Lovers, Sanscar Society, Ake, Madgaon, Goa 403707"
    }

    const GoToAcc = () => {
        console.log('Navigating to MyAccount')
        navigate('/MyAccount')
    }

    return (
        <div className="relative flex justify-center items-center h-96 w-full bg-amber-400 rounded-b-3xl drop-shadow-lg">
            <button onClick={GoToAcc} className="absolute z-20 top-6 right-0 bg-white p-3 rounded-l-lg"><FaBars size={20} /></button>
            <div className="absolute top-6 left-4 w-full flex items-center">
                <FaMapMarkerAlt className="h-10 w-10 text-4xl text-white" />
                <div className="pl-3 flex flex-col">
                    <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                        <h1 className=" flex text-lg font-extrabold font-poppins text-black">
                            CHEFS BHOJAN {selectedOutlet} <BiChevronDown size={24} className="ml-2" />
                        </h1>
                    </div>
                    {showDropdown && (
                        <div className="mt-1 rounded-md bg-white shadow-lg">
                            <div className="py-1">
                                <button
                                    onClick={() => handleOutletSelect('Ponda')}
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b-2 border-slate-100"
                                >
                                    Ponda
                                    <p className="text-xs text-gray-500 mt-1">{outletAddresses['Ponda']}</p>
                                </button>
                                <button
                                    onClick={() => handleOutletSelect('Margoa')}
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Margoa
                                    <p className="text-xs text-gray-500 mt-1">{outletAddresses['Margoa']}</p>
                                </button>
                            </div>
                        </div>
                    )}
                    <p className="w-56 h-10 text-left overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {outletAddresses[selectedOutlet]}
                    </p>
                </div>
            </div>
            <div className="pt-5 flex flex-col justify-center items-center">
                <img src={chefsbhojans_logo} className=" h-48 w-auto " alt="" />
                <h1 className=" px-10 text-center text-white font-thin">Experience Gourmet Excellence with Every Bite, Crafted by Chef of Chefs Bhojon</h1>
            </div>
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 drop-shadow-2xl">
                <h1 className=" px-5 py-3 font-semibold rounded-full bg-black text-white">Order Now</h1>
            </div>
        </div>
    )
}

export default NavBar
