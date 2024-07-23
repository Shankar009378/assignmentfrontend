"use client";
import Image from "next/image";
import mycomplogo from '../../public/image/indus_icons/mycomplogo.svg';
import document from '../../public/image/footer/document.svg';
import mail from '../../public/image/footer/mail.svg';
import place from '../../public/image/footer/place.svg';
import smartphone from '../../public/image/footer/smartphone.svg';

export default function Footer() {

    return (
        <div id="contacts" className="mt-8 mb-5 rounded-lg py-10 max-w-[84%] mx-auto bg-[#111111] text-center">
            <Image className="mb-11 mx-auto" src={mycomplogo} alt="Company Logo" />
            <div className="flex flex-col sm:flex-row justify-around">
                <div className="mb-6 sm:mb-0">
                    <p className="text-[#98A2B3] flex font-medium text-sm items-center justify-center sm:justify-start">
                        <Image className="mr-2" src={smartphone} alt="Phone" /> Contact nums
                    </p>
                    <p className="text-white font-semibold text-base mt-2">+91 1000000000</p>
                </div>
                <div className="mb-6 sm:mb-0">
                    <p className="text-[#98A2B3] flex font-medium text-sm items-center justify-center sm:justify-start">
                        <Image className="mr-2" src={mail} alt="Mail" /> Gmail
                    </p>
                    <p className="text-white font-semibold text-base mt-2">demo@gmail.com</p>
                </div>
                <div className="mb-6 sm:mb-0">
                    <p className="text-[#98A2B3] flex font-medium text-sm items-center justify-center sm:justify-start">
                        <Image className="mr-2" src={place} alt="Address" /> Address
                    </p>
                    <p className="text-white font-semibold text-base mt-2">New Delhi, India</p>
                </div>
                <div className="mb-6 sm:mb-0">
                    <p className="text-[#98A2B3] flex font-medium text-sm items-center justify-center sm:justify-start">
                        <Image className="mr-2" src={document} alt="Request" /> Leave a request
                    </p>
                    <p className="text-white font-semibold text-base mt-2">Leave a request</p>
                </div>
            </div>
            <p className="text-white mt-10 font-normal text-[.9rem]">We work throughout the world</p>
        </div>
    );
}
