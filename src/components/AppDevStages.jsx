"use client";
import Image from "next/image";
import hopegift from '../../public/image/indus_icons/hopegif1.svg';
import application from '../../public/image/appicon/application.svg';
import coding from '../../public/image/appicon/coding.svg';
import graphic from '../../public/image/appicon/graphic.svg';
import hosting from '../../public/image/appicon/hosting.svg';
import planing from '../../public/image/appicon/planing.svg';
import security from '../../public/image/appicon/security.svg';


export default function AppDevStages() {

    return (
        <div className="mt-8 py-20 max-w-[84%] mx-auto justify-between">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-9 text-center md:text-left">Application Development Stages</h1>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="space-y-6 mb-6 md:mb-0">
                    <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
                        <div className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-5">
                                <Image className="w-8 sm:w-10" src={planing} alt="img" />
                                <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Analysis</p>
                            </div>
                            <p className="font-normal text-sm sm:text-base text-[#101828]">
                                We craft precise technical specs, aligning with your business, technology, and user requirements.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
                        <div className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-5">
                                <Image className="w-8 sm:w-10" src={graphic} alt="img" />
                                <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Design</p>
                            </div>
                            <p className="font-normal text-sm sm:text-base text-[#101828]">
                                We craft precise technical specs, aligning with your business, technology, and user requirements.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
                        <div className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-5">
                                <Image className="w-8 sm:w-10" src={coding} alt="img" />
                                <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Development</p>
                            </div>
                            <p className="font-normal text-sm sm:text-base text-[#101828]">
                                We craft precise technical specs, aligning with your business, technology, and user requirements.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-6 md:mb-0 mx-auto md:mx-0">
                    <Image className="max-w-full" src={hopegift} alt="img" />
                </div>

                <div className="space-y-6">
                    <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
                        <div className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-5">
                                <Image className="w-8 sm:w-10" src={security} alt="img" />
                                <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Testing</p>
                            </div>
                            <p className="font-normal text-sm sm:text-base text-[#101828]">
                                We craft precise technical specs, aligning with your business, technology, and user requirements.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
                        <div className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-5">
                                <Image className="w-8 sm:w-10" src={hosting} alt="img" />
                                <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Launching</p>
                            </div>
                            <p className="font-normal text-sm sm:text-base text-[#101828]">
                                We craft precise technical specs, aligning with your business, technology, and user requirements.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
                        <div className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-5">
                                <Image className="w-8 sm:w-10" src={application} alt="img" />
                                <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Support</p>
                            </div>
                            <p className="font-normal text-sm sm:text-base text-[#101828]">
                                We craft precise technical specs, aligning with your business, technology, and user requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
