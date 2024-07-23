"use client";

import Image from "next/image";
import Group from '../../public/image/heroicon/Group.svg';
import india from '../../public/image/heroicon/india.svg';
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function HeroSection() {

    return (
        <div id="herosection" className=" bg-slate-100 pt-24 pb-8">
            <div className="heroSection w-[85%] mx-auto mt-16 ">

                <div className="largeImage absolute top-0 right-0  hidden imagecustom-lg:block">
                    <Image
                        className=""
                        src={Group}
                        height={750}
                        width={670}
                        alt="smartPhone"
                    />
                </div>
                <div className=" m-auto imagecustom-lg:w-auto imagecustom-lg:m-4">
                    <h2 className="  font-inter font-semibold text-4xl tracking-wide">
                        <span className="font-extrabold text-[#FFBA00]">User-Centric Excellence:</span> Our<br /> <span className="font-bold">App Development services </span><br />Tackles Your Pain Points
                    </h2>
                    <p className="font-roboto font-medium mt-4 tracking-tight text-lg ">
                        Experience a Seamless Digital Journey with<span className="font-extrabold text-[#80A948]"> Desun</span> - Where Every Line<br /> of Code Resolves Your Challenges and <span className="font-extrabold text-[#FFBA00]">Elevates Your App Experience</span><br /> to Unparalleled Heights.
                    </p>

                    <Card className=" mt-16 md:inline-flex block">
                        <div className="">
                            <CardHeader>
                                <CardTitle className=" font-inter font-bold text-xl leading-6">Leave your contacts and we will call you back<br />
                                    within 30 minutes</CardTitle>
                            </CardHeader>
                            <div className="">
                                <div className="flex flex-col gap-5 px-6 sm:flex-row sm:gap-8">
                                    <div>
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input className="border-0 border-b-2 px-0 w-56" onChange={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')} id="name" placeholder="My Name" />
                                    </div>
                                    <div >
                                        <Label htmlFor="name">Phone number</Label>

                                        <div className="absolute">
                                            <Image
                                                className="relative top-2.5 left-1"
                                                src={india}
                                                height={15}
                                                width={15}
                                                alt="flag"
                                            />
                                        </div>

                                        <Input className="border-0 border-b-2 px-0 pl-7 w-56 " onChange={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')} id="name" placeholder="+91 0000000000" />

                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 px-6 sm:flex-row sm:gap-8 mb-6 mt-5">
                                    <div>
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input className="border-0 border-b-2 px-0 w-56" onChange={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')} id="name" placeholder="My Name" />
                                    </div>
                                    <div>
                                        <Label htmlFor="name">Phone number</Label>
                                        <Input className="border-0 border-b-2 px-0 w-56" onChange={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')} id="name" placeholder="+91 0000000000" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="rightarea flex items-end justify-center">
                            <Button variant="default" className="bg-[#80A948] mr-6 mb-6 text-sm font-roboto font-semibold px-16 md:p-7">
                                <span className="block md:hidden">Get consultation</span>
                                <span className="hidden md:block">Get<br />consultation</span>
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>


        </div>
    );
}
