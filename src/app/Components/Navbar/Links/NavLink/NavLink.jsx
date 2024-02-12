"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { logInWithGithub } from "../../../../../lib/actions";

const NavLink = ({ item, open, setOpen }) => {
    const pathName = usePathname();

    const handleNavClick = () => {
        if (open) {
            setOpen(!open);
        }
    }

    return (
        <div className=" ">
            <form action={logInWithGithub} >
                <Link href={item.path} className={pathName === item.path ? "bg-white text-bgDark px-4 py-2 rounded-full" : "px-4 py-2 rounded-full"} key={item.title} onClick={handleNavClick}>
                    {item.title}
                </Link>
            </form>
        </div>
    )
}

export default NavLink
