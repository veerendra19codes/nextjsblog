import React from 'react'
import Links from './Links/Links'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between h-18 py-4 bg-bgDark px-8 items-center sm:px-4 sm:gap-24">
            <Link href="/" className="logo">
                Logo
            </Link>
            <div className="links">
                <Links />
            </div>
        </div>
    )
}

export default Navbar
