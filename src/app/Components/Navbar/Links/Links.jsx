"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import NavLink from "./NavLink/NavLink"
import { useState } from "react";

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
]

const Links = () => {
    const [open, setOpen] = useState(false);


    const session = true;
    const isAdmin = true;

    return (

        <div className="links">
            <div className="flex flex-row gap-12 justify-center items-center lg:hidden">
                {links.map((link) => (

                    // <Link key={link.title} href={link.path}  >{link.title}</Link>
                    <NavLink item={link} key={link.title} />
                ))
                }
                {session ? (
                    <>
                        {isAdmin ? (
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

            <button onClick={() => setOpen(!open)} className=" hidden lg:block"> Menu</button>

            <div className="mobile-nav hidden lg:block">


                {open && (
                    <div className="mobileLinks flex flex-col justify-center gap-4 absolute right-0 items-center top-0 top-16 bg-purple-800 h-screen w-[250px]">
                        {links.map((link) => (
                            <NavLink item={link} key={link.title} open={open} setOpen={setOpen} />
                        ))}
                    </div>
                )}
            </div>
        </div >
    )
}

export default Links
