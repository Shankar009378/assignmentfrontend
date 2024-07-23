"use client";
import Image from "next/image";
import ios from '../../public/image/indus_icons/ios.svg';
import play from '../../public/image/indus_icons/play.svg';
import realestate from '../../public/image/indus_icons/realestate.svg';
import loaction from '../../public/image/indus_icons/loaction.svg';
import imagephone from '../../public/image/indus_icons/imagephone.svg';

export default function ProjectDetails() {

    return (
        <div id="cases" className="flex flex-col lg:flex-row mt-8 py-20 max-w-[84%] mx-auto justify-between">
            <div className="lg:max-w-[50%]">
                <h1 className="font-bold text-2xl md:text-4xl">Projects we are proud of</h1>
                <p className="font-medium text-sm mt-4 md:mt-8">
                    Our software development company is truly proud of the wonderful clients we have
                    <br className="hidden md:block" /> worked with. We enjoy a long-term partnership.
                </p>
                <div className="flex flex-wrap gap-4 md:gap-8 mt-8 md:mt-[70px]">
                    {["Project 1", "Project 2", "Project 3", "Project 4"].map((project, index) => (
                        <p
                            key={index}
                            className="cursor-pointer font-medium text-lg text-[#1D2939] border-b-2 border-transparent hover:border-[#ffba00] hover:text-[#101828] transition-all duration-100"
                        >
                            {project}
                        </p>
                    ))}
                </div>
                <h1 className="font-bold text-2xl md:text-4xl mt-8 md:mt-16">Project 1</h1>
                <p className="font-medium text-sm mt-4 md:mt-8">
                    Crafted an innovative rental property management app, seamlessly integrating secure login, absence
                    registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.
                </p>
                <p className="mt-4 md:mt-10">
                    Business analysis <span className="text-[#ffba00]">/</span> iOS <span className="text-[#ffba00]">/</span> Android <span className="text-[#ffba00]">/</span> QA <span className="text-[#ffba00]">/</span> UI/UX Design
                </p>
                <div className="flex flex-wrap gap-4 mt-4 md:mt-8">
                    <p className="flex items-center"><Image src={loaction} alt="img" />india</p>
                    <p className="flex items-center"><Image src={realestate} alt="img" />Real Estate</p>
                </div>
                <div className="flex flex-wrap gap-6 mt-4 md:mt-10">
                    <div>
                        <p className="font-bold text-xl md:text-2xl text-[#101828]">400%</p>
                        <p className="font-normal text-sm text-[#667085]">User Growth</p>
                    </div>
                    <div>
                        <p className="font-bold text-xl md:text-2xl text-[#101828]">+ 200 000</p>
                        <p className="font-normal text-sm text-[#667085]">Active Users</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-4 md:mt-10">
                    <Image src={ios} alt="img" />
                    <Image src={play} alt="img" />
                </div>
            </div>
            <div className="mt-8 lg:mt-auto flex justify-center lg:justify-start">
                <Image src={imagephone} alt="img" className="max-w-full" />
            </div>
        </div>
    );
}
