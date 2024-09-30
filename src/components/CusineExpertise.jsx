import React from "react";

const cuisineData = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1130cb49bc65cdb32af31f6af4470fba186379de267fef53ef50396aa426202?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        title: "Mediterranean Cuisine",
        description: "Expert in Mediterranean flavors, with experience from top kitchens abroad."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/65733d67c1c8817259af62d62d17c87ad8deb8431ae34e1f4ae9f26137f8203c?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        title: "Arabic Cuisine",
        description: "Mastered authentic Arabic dishes during his time in Abu Dhabi's luxury restaurants."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ff298f16ce45af2a166e506cc67fe46638199f2a8373caf3b084c6886325680?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        title: "Continental Cuisine",
        description: "Refined Continental techniques through work in world-class international hotels."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c91e9a58eddd50cec75c11e56d7bb98ffea59b6959dfba23e86b68b95f3d42f?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51",
        title: "Asian Momo",
        description: "Expert in preparing delicate, flavorful momos with a modern twist."
    }
];

function CuisineExpertise() {
    return (
        <div className="px-16 pt-48 pb-14 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                {cuisineData.map((cuisine, index) => (
                    <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-xl text-center text-black  max-md:mt-10">
                            <div className="flex flex-col px-10 pt-9 pb-14 rounded-[32px] bg-gradient-to-t from-amber-500 to-transparent drop-shadow-lg max-md:px-5">
                                <img loading="lazy" src={cuisine.icon} alt={cuisine.title} className="object-contain self-center w-16 aspect-square drop-shadow-lg" />
                                <div className="mt-10">
                                    <span className="font-bold">{cuisine.title}</span>
                                    <br />
                                    {cuisine.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CuisineExpertise;