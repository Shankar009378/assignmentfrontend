"use client";
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/image/heroicon/logo.svg';
import mailhero from '../../public/image/heroicon/mail.svg';
import smartphoneimg from '../../public/image/heroicon/smartphone.svg';
import { useState } from 'react';

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-6 flex justify-between h-[92px] w-[85%]  mx-[7%] bg-white rounded-xl drop-shadow-md z-20">
            <a href="/" className="items-center ml-4 mt-4">
                <Image
                    src={logo}
                    width={170}
                    height={100}
                    alt="My Company Logo"
                />
            </a>
            
            {/* Navigation for screens larger than 1082px */}
            <div className="hidden lg-1082:flex mr-24 navlinks h-full">
                <ul className="flex items-center space-x-4 h-full text-[#101828] font-roboto font-medium text-sm">
                    <li><Link href="#herosection">Services</Link></li>
                    <li><Link href="#details">Media</Link></li>
                    <li><Link href="#cases">Cases</Link></li>
                    <li><Link href="#contacts">FAQ</Link></li>
                    <li><Link href="#contacts">Contacts</Link></li>
                </ul>
            </div>

            {/* Contact info for screens larger than 1082px */}
            <div className="hidden lg-1082:flex navContacts mr-5 flex h-full font-roboto font-medium text-sm">
                <div className="flex items-center">
                    <Image
                        className="mr-2"
                        src={smartphoneimg}
                        width={24}
                        height={24}
                        alt="phone"
                    />
                    <div className="text-[#80A948]">+91 00000000</div>
                </div>
                <div className="ml-10 flex items-center">
                    <Image
                        className="mr-2"
                        src={mailhero}
                        width={24}
                        height={24}
                        alt="email"
                    />
                    <div className="text-[#80A948]">demo@gmail.com</div>
                </div>
            </div>
            <button
                className="lg-1082:hidden flex items-center px-4 py-2 text-[#101828] font-roboto font-medium"
                onClick={toggleMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

            </button>
            {isMenuOpen && (
                <div className="lg-1082:hidden fixed top-[80px] left-0 w-full bg-white rounded-b-md drop-shadow-md z-30">
                    <ul className="flex flex-col items-center space-y-4 p-4 text-[#101828] font-roboto font-medium text-sm">
                        <li><Link href="#services">Services</Link></li>
                        <li><Link href="#media">Media</Link></li>
                        <li><Link href="#cases">Cases</Link></li>
                        <li><Link href="#faq">FAQ</Link></li>
                        <li><Link href="#contacts">Contacts</Link></li>
                    </ul>
                    <div className="flex flex-col items-center p-4">
                        <div className="flex items-center mb-4">
                            <Image
                                className="mr-2"
                                src={smartphoneimg}
                                width={24}
                                height={24}
                                alt="phone"
                            />
                            <div className="text-[#80A948]">+91 00000000</div>
                        </div>
                        <div className="flex items-center">
                            <Image
                                className="mr-2"
                                src={mailhero}
                                width={24}
                                height={24}
                                alt="email"
                            />
                            <div className="text-[#80A948]">demo@gmail.com</div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
