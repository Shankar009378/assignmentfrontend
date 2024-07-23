"use client";
import Image from "next/image";
import Planet from '../../public/image/planet.svg';
import Rigtarrow from '../../public/image/rigtarrow.svg';

export default function LogoBar() {

    return (
        <div className="md:max-w-[95%] mx-auto">
            <div className="flex flex-wrap justify-around py-12 my-5 border-x-0 border-[#D8D8D8] border-[2px]">
                <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
                <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
                <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
                <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
                <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
            </div>

            <div className="flex flex-col lg:flex-row mt-8 max-w-[80%] justify-around">
                <div className="lg:max-w-[50%] mb-8 lg:mb-0">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Full development cycle</h1>
                    <p className="font-medium text-sm mt-8">We use proven technologies</p>
                    <h3 className="font-semibold text-lg md:text-xl mt-8">web</h3>
                    <p className="font-normal text-sm md:text-lg mt-4 md:mt-10">
                        PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js <br /> / Nuxt / MySQL / Laravel / GO lang / django / Python
                    </p>
                    <h3 className="font-semibold text-lg md:text-xl mt-8">Mobile</h3>
                    <p className="font-normal text-sm md:text-lg mt-4 md:mt-10">
                        Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation
                    </p>
                </div>
                <div className="space-y-6">
                    <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">iOS development </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="iOS development arrow" /></span></p>
                    <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">Android development </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="Android development arrow" /></span></p>
                    <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">Web development </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="Web development arrow" /></span></p>
                    <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">UI/UX design </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="UI/UX design arrow" /></span></p>
                    <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">Testing </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="Testing arrow" /></span></p>
                    <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">Launch </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="Launch arrow" /></span></p>
                    <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">IT consulting </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="IT consulting arrow" /></span></p>
                </div>
            </div>
        </div>
    );
}
