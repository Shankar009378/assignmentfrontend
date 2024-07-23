"use client";

import Image from "next/image";
import framerightimg from '../../public/image/indus_icons/framerigh.svg';

export default function Team() {

    return (
        <div className="bg-[#F2F4F7]">
            <div className="flex flex-col lg:flex-row mt-8 py-20 max-w-[84%] mx-auto justify-between">
                <div className="lg:w-1/2">
                    <h1 className="font-bold text-3xl md:text-4xl mb-6 lg:mb-9">Our team</h1>
                    <p className="font-medium text-sm mt-4 md:mt-8">
                        Thousand is a full-cycle digital production company with its own product analytics,
                        <br className="hidden md:block" /> design, web, and mobile development.
                    </p>
                    <div className="flex flex-wrap mt-10 gap-8 md:gap-16 mb-10">
                        <div>
                            <p className="font-bold text-3xl md:text-5xl text-[#101828]">28</p>
                            <p className="font-medium text-base text-[#667085]">team members</p>
                        </div>
                        <div>
                            <p className="font-bold text-3xl md:text-5xl text-[#101828]">+100</p>
                            <p className="font-medium text-base text-[#667085]">projects</p>
                        </div>
                        <div>
                            <p className="font-bold text-3xl md:text-5xl text-[#101828]">7 years</p>
                            <p className="font-medium text-base text-[#667085]">in IT sphere</p>
                        </div>
                    </div>
                    <p className="font-medium text-sm mt-4 md:mt-8">
                        All the necessary specialists - from a designer to a tester - are on our staff. We hire
                        <br className="hidden md:block" /> the best specialists in the market. It's expensive but worth it.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
                    <Image className="max-w-full h-auto" src={framerightimg} alt="Our team image" />
                </div>
            </div>
        </div>
    );
}
