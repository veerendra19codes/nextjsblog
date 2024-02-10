"use client";

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const NavigationTest = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter();
    const pathName = usePathname();

    // console.log(pathName);
    //eg url - http://localhost:3000/navigationtest
    //console(client/browser console) = /navigationtest

    const searchParams = useSearchParams();
    //we can get any query from the url
    const q = searchParams.get("q");
    console.log(q);
    // eg url - http://localhost:3000/navigationtest?q=test&sort=sorted
    //console(client/browser client)- test 
    const sort = searchParams.get("sort");
    console.log(sort);
    // eg url - http://localhost:3000/navigationtest?q=test&sort=sorted
    //console(client/browser console)- sorted

    //we can use set() to create a new query

    const handleClick = () => {
        console.log("clicked");
        router.push("/");
        //this will add home(route mentioned in the bracket) route to the browser history stack

        // router.replace("/"); 
        // this will replace the current route with route mentioned in the brackets from the browser history stack 

        // router.refresh(); refreshes the page , renders whole page again 

        // router.back();
        // router.forward();
        //redirects to prev and next route you clicked 
    }
    return (
        <div>
            <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick} className="bg-white p-2 text-bgDark">Click and redirect</button>
        </div>
    )
}

export default NavigationTest
