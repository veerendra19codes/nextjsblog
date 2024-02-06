import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h1>404, Page not found</h1>
            <Link href="/">Click here to return Home</Link>
        </div>
    )
}

export default NotFound
