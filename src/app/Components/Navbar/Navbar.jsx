import React from 'react'
import Links from './Links/Links'

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between h-18 py-4 bg-bgDark px-8 items-center">
            <div className="logo">
                Logo
            </div>
            <div className="links">
                <Links />
            </div>
        </div>
    )
}

export default Navbar
