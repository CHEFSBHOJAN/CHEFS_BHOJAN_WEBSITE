import React, { createContext, useContext, useState } from 'react'

const OutletContext = createContext()

export const useOutlet = () => useContext(OutletContext)

export const OutletProvider = ({ children }) => {
    const [selectedOutlet, setSelectedOutlet] = useState('Ponda')
    console.log(selectedOutlet)

    return (
        <OutletContext.Provider value={{ selectedOutlet, setSelectedOutlet }}>
            {children}
        </OutletContext.Provider>
    )
}
