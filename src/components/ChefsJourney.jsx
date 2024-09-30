import React from "react";
import chefpic1 from "../assets/photos/chefpic1.jpg"

function ChefJourney() {
    return (
        <section className="md:mt-10 w-full max-w-[1260px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[62%] max-md:ml-0 px-10 md:20 max-md:w-full ">
                    <div className="flex flex-col self-stretch my-auto text-center max-md:mt-10 max-md:max-w-full ">
                        <h2 className="text-8xl leading-none font-galada drop-shadow-xl text-amber-500 max-md:max-w-full max-md:text-4xl">
                            Chef's Bhojan
                        </h2>
                        <p className="self-center mt-10 ml-3 text-xl md:text-3xl text-black max-md:mt-10 max-md:max-w-full">
                            where passion, expertise, and dedication come together to deliver a world of flavors in Goa. The foundation of this restaurant is built on the incredible journey of Chef Lokendra Bahadur Oli, whose story is as inspiring as the dishes he creates.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                    <div className="flex justify-center items-center relative min-h-[511px] rounded-[36px] max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={chefpic1}
                            alt="Chef's Bhojan ambiance"
                            className="object-cover px-5 rounded-3xl absolute inset-0 size-5/6 md:size-full mx-auto block max-md:mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChefJourney;