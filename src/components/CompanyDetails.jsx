"use client";
import Image from "next/image";
import frame1 from '../../public/image/indus_icons/Frame 2-1.svg';
import frame2 from '../../public/image/indus_icons/Frame 2-2.svg';
import frame3 from '../../public/image/indus_icons/Frame 2-3.svg';
import frame4 from '../../public/image/indus_icons/Frame 2-4.svg';
import frame5 from '../../public/image/indus_icons/Frame 2-5.svg';
import frame6 from '../../public/image/indus_icons/Frame 2-6.svg';
import frame7 from '../../public/image/indus_icons/Frame 2-7.svg';
import frame8 from '../../public/image/indus_icons/Frame 2-8.svg';
import frame9 from '../../public/image/indus_icons/Frame 2-9.svg';
import frame10 from '../../public/image/indus_icons/Frame 2-10.svg';
import frame11 from '../../public/image/indus_icons/Frame 2-11.svg';
import frame12 from '../../public/image/indus_icons/Frame 2-12.svg';
import frame13 from '../../public/image/indus_icons/Frame 2-13.svg';
import frame14 from '../../public/image/indus_icons/Frame 2-14.svg';
import frame15 from '../../public/image/indus_icons/Frame 2.svg';


export default function CompanyDetails() {

    return (
        <div id="details" className="bg-[#f2f4f7] py-20">
            <div className="flex flex-col mt-8 max-w-[84%] mx-auto">
                <h1 className="mb-10 font-bold text-2xl md:text-3xl lg:text-4xl ">
                    Developed more than <span className="text-[#80A948]">100</span> <br className="hidden lg:block" /> projects in <span className="text-[#80A948]">15</span> industries
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-[80%] ">
                    <div className="space-y-4">
                        <p className="flex items-center"><Image src={frame15} alt="img" /><span className="ml-2 font-medium text-lg">Social media</span></p>
                        <p className="flex items-center"><Image src={frame1} alt="img" /><span className="ml-2 font-medium text-lg">Fitness and sport</span></p>
                        <p className="flex items-center"><Image src={frame2} alt="img" /><span className="ml-2 font-medium text-lg">Bank</span></p>
                        <p className="flex items-center"><Image src={frame3} alt="img" /><span className="ml-2 font-medium text-lg">Construction</span></p>
                        <p className="flex items-center"><Image src={frame4} alt="img" /><span className="ml-2 font-medium text-lg">Game projects</span></p>
                    </div>
                    <div className="space-y-4">
                        <p className="flex items-center"><Image src={frame5} alt="img" /><span className="ml-2 font-medium text-lg">Education</span></p>
                        <p className="flex items-center"><Image src={frame6} alt="img" /><span className="ml-2 font-medium text-lg">Auto, transport</span></p>
                        <p className="flex items-center"><Image src={frame7} alt="img" /><span className="ml-2 font-medium text-lg">Medicine, health</span></p>
                        <p className="flex items-center"><Image src={frame8} alt="img" /><span className="ml-2 font-medium text-lg">Restaurants, food delivery</span></p>
                        <p className="flex items-center"><Image src={frame9} alt="img" /><span className="ml-2 font-medium text-lg">Marketplace</span></p>
                    </div>
                    <div className="space-y-4">
                        <p className="flex items-center"><Image src={frame10} alt="img" /><span className="ml-2 font-medium text-lg">AR technology</span></p>
                        <p className="flex items-center"><Image src={frame11} alt="img" /><span className="ml-2 font-medium text-lg">TV series</span></p>
                        <p className="flex items-center"><Image src={frame12} alt="img" /><span className="ml-2 font-medium text-lg">Startups</span></p>
                        <p className="flex items-center"><Image src={frame13} alt="img" /><span className="ml-2 font-medium text-lg">Religion</span></p>
                        <p className="flex items-center"><Image src={frame14} alt="img" /><span className="ml-2 font-medium text-lg">Online courses</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
