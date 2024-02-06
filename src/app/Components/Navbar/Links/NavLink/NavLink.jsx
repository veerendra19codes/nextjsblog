"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {
    const pathName = usePathname();

    return (
        <div className=" ">
            <Link href={item.path} className={pathName === item.path ? "bg-white text-bgDark px-4 py-2 rounded-full" : "px-4 py-2 rounded-full"} key={item.title} >
                {item.title}
            </Link>
        </div>
    )
}

export default NavLink
