import React from 'react'
import { FiMenu } from "react-icons/fi";
import { navbarLinks } from '../data/navbarLinks';

export default function Navbar() {
    const linkStyle = {
        textDecoration: 'none', 
        color: 'black',
        borderBottom: '2px solid transparent', 
        transition: 'border-bottom 0.3s',
    };
    
    const hoverStyle = {
        ...linkStyle,
        borderBottom: '2px solid blue', 
    };

    function handleMouseOver(event) {
        event.currentTarget.style.borderBottom = hoverStyle.borderBottom
    }

    function handleMouseOut(event) {
        event.currentTarget.style.borderBottom = linkStyle.borderBottom
    }

    return (
        <header className="w-full flex items-center justify-between py-5 bg-white px-4 shadow-md lg:px-44 sticky top-0 z-[2000]">
            <h2 className="text-2xl font-bold">REACT LANDING PAGE</h2>
            <nav className="hidden lg:block">
                <div className="flex items-center gap-8">
                    {navbarLinks.map(link => (
                        <a
                            href="#"
                            key={link}
                            style={linkStyle}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            className="text-sm"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </nav>
            <FiMenu className="p-1 text-4xl border border-gray-400 cursor-pointer lg:hidden" />
        </header>
    )
}
