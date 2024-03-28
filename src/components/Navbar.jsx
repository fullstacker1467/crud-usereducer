import React, { lazy } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const navLinks = [
        {
            to: "/",
            title: "Home"
        },
        {
            to: "/add",
            title: "Add"
        },
    ]
    return (
        <header className='h-[70px] bg-slate-700'>
            <div className="container h-full flex items-center justify-center">
                <nav>
                    <ul className='flex items-center gap-5'>
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <Link className='text-white text-3xl' to={item.to}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
