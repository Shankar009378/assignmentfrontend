"use client";
import Image from "next/image";
import india from '../../public/image/heroicon/india.svg';
import {
    Card,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ProjectDiscuss() {

    return (
        <div style={{
            background: 'linear-gradient(90deg, rgba(250,188,31,1) 23%, rgba(124,165,70,1) 83%)',
        }}>
            <div className="flex flex-col md:flex-row mt-8 py-20 max-w-[84%] mx-auto justify-between items-center">
                <div className="text-center md:text-left mb-8 md:mb-0">
                    <h1 className="font-bold text-2xl md:text-4xl text-white">Let's discuss <br />
                        Your project</h1>
                    <p className="font-medium text-sm md:text-base mt-4 text-white">Let's figure out how to create an effective application,<br />
                        its cost and terms of its development</p>
                </div>
                <div className="w-full md:w-auto">
                    <Card className="p-4 flex flex-col justify-between">
                        <div>
                            <div className="flex flex-col md:flex-row">
                                <div className="mb-4 md:mb-0 md:mr-6">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input className="border-0 border-b-2 px-0 w-full md:w-56" onChange={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')} id="name" placeholder="My Name" />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Phone number</Label>
                                    <div className="relative">
                                        <div className="absolute top-2.5 left-1">
                                            <Image
                                                src={india}
                                                height={15}
                                                width={15}
                                                alt="flag"
                                            />
                                        </div>
                                        <Input className="border-0 border-b-2 px-0 pl-7 w-full md:w-56" onChange={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')} id="phone" placeholder="+91 0000000000" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row mb-6 mt-5">
                                <div className="mb-4 md:mb-0 md:mr-6">
                                    <Label htmlFor="businessName">Business Name</Label>
                                    <Input className="border-0 border-b-2 px-0 w-full md:w-56" id="businessName" onChange={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')} placeholder="ABC Technologies PVT LTD" />
                                </div>
                                <div>
                                    <Label htmlFor="businessEmail">Business mail</Label>
                                    <Input className="border-0 border-b-2 px-0 w-full md:w-56" id="businessEmail" placeholder="example@company.com" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button variant="default" className="bg-[#FFB900] text-white text-sm font-roboto font-semibold p-4 px-6 md:p-5 md:px-8">Discuss the project</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
