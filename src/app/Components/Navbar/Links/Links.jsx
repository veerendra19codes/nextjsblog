"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import NavLink from "./NavLink/NavLink"

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Admin",
            path: "/admin",
        },
    ]

    const session = false;
    const isAdmin = false;

    return (

        <div className="flex flex-row gap-12 justify-center items-center">
            {links.map((link) => (

                // <Link key={link.title} href={link.path}  >{link.title}</Link>
                <NavLink item={link} key={link.title} />
            ))
            }
            {session === true ? (
                <>
                    {isAdmin === true ? (
                        <NavLink item={
                            {
                                title: "Admin",
                                path: "/admin"
                            }
                        } />
                    ) : (
                        ""
                    )}
                    <button className="bg-white rounded-sm text-bgDark py-2 px-4">Logout</button>
                </>
            ) : (
                <NavLink item={
                    {
                        title: "Login",
                        path: "/login"
                    }} />
            )}
        </div >
    )
}

export default Links
