import React from "react";
import mainPic from "../assets/photos/mainPic-landscape.jpg"

function RestaurantInfo() {
    return (
        <section className="flex flex-col items-center justify-center md:pt-40 w-full text-5xl leading-none text-center bg-gradient-to-t from-amber-400 to-transparent text-white max-md:py-24 max-md:max-w-full max-md:text-4xl">
            <img loading="lazy" src={mainPic} alt="Chef Lokendra Bahadur Oli in action" className="object-contain px-5 md:px-20 w-full rounded-3xl aspect-[2.07] max-w-[1233px] drop-shadow-xl max-md:max-w-full max-md:mx-auto" />
            <h3 className="mt-16 mb-0 ml-0 font-galada drop-shadow-xl text-center max-md:mt-10 max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
                MASTERCHEF LOKENDRA BAHADUR OLI
            </h3>
            <div className="flex relative flex-col items-center justify-center pt-36 pb-52 w-screen text-5xl leading-none text-center text-amber-500 max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0702bd394903c2ea60eea82092eafe95663d51fba40d1bf15d88567c7a104c?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51" alt="Background texture" className="object-cover absolute inset-0 size-full" />
                <blockquote className="relative z-10 text-lg md:text-3xl text-center">
                    "As a chef, every dish is a reflection of passion, precision, and years of learning. Cooking isn't just a skill, it's a craft that evolves with every meal served." – Chef Lokendra Bahadur Oli
                </blockquote>
            </div>
        </section>
    );
}

export default RestaurantInfo;