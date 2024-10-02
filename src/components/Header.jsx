import React from "react";
import mainPic from "../assets/photos/Lokendra_2.jpg"
import mainPicCircle from "../assets/photos/lokendra_1.jpg"
import TornPpr from "../assets/photos/tornppr.svg"

function Header() {
    return (
        <div className="flex relative flex-col w-full">
            <img loading="lazy" src={mainPic} alt="lokendra oli" className="object-cover absolute inset-0 size-full" />
            <img src={TornPpr} className="w-full z-20 h-auto absolute -bottom-20 md:-bottom-40 rotate-180" />
            <div className="flex relative z-10 bg-gradient-to-t from-amber-400 to-transparent flex-col items-center px-4 pt-10 pb-20 -mb-10 w-full md:px-16 md:pt-14 md:pb-40 md:-mb-14">
                <div className="-mb-8 w-full">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex flex-col w-full md:w-6/12">
                            <div className="flex flex-col text-white">
                                <div className="self-center px-4 py-1.5 text-lg md:text-xl font-bold font-galada text-black bg-white rounded-lg shadow-[-5px_0px_4px_rgba(248,123,7,1)] w-full md:w-[266px]">
                                    CHEF'S BHOJAN
                                </div>
                                <h1 className="mt-12 md:mt-24 text-5xl md:text-8xl font-Heavitas leading-none">
                                    LOKENDRA OLI
                                </h1>
                                <h2 className="self-center font-sans mt-8 md:mt-12 text-2xl md:text-3xl leading-8 font-semibold drop-shadow-3xl text-center">
                                    Chef's Bhojan: <br /> The Inspiring Journey of Chef Lokendra Bahadur Oli
                                </h2>
                                <div className="px-4 pt-3 pb-5 mt-10 md:mt-16 font-sans text-xl md:text-2xl bg-gradient-to-tr from-red-950 to bg-red-700 leading-none rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full md:w-[508px]">
                                    <h1 className="text-2xl md:text-3xl text-center font-sans leading-none">
                                        Welcome to Chef's Bhojan
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-6/12 md:ml-5">
                            <img loading="lazy" src={mainPicCircle} alt="Chef Lokendra Bahadur Oli" className="object-fill border-4 border-amber-400 mt-2.5 w-full aspect-[0.95] rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;