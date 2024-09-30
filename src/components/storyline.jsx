import React from "react";
import CirclePic from "../assets/photos/CirclePic.jpg"

function StoryLine() {
    const storyData = [
        {
            title: "Humble Beginnings and the Love for Cooking",
            content: "Chef Lokendra's culinary passion was ignited early in his career. His journey began in the Mediterranean region, where he worked with highly regarded chefs and honed his skills in diverse cuisines like Mediterranean, Arabic, and Italian. It was here that Chef Lokendra's deep understanding of authentic flavors and cooking techniques truly began to flourish."
        },
        {
            title: "International Culinary Mastery in Abu Dhabi",
            content: "The next significant phase of his career took him to Abu Dhabi, where he worked at the prestigious Ferrari World and The Capital Gate—two landmarks. During this time, Chef Lokendra expanded his repertoire, mastering a wide range of cuisines, from Continental to Arabic and beyond. His work in these globally renowned kitchens refined his skills."
        },
        {
            title: "A Return to Roots: Goa, India",
            content: "After years of working in top international restaurants, Chef Lokendra decided to bring his global experience home to India. Goa, with its rich culinary culture and diverse crowd, was the perfect location for his dream project—Chef's Bhojan. Now, Chef Lokendra brings the best of the Mediterranean, Arabic, and Continental cuisines to the heart of Goa, offering an exceptional dining experience."
        },
        {
            title: "Where Global Flavors Meet Goan Hospitality",
            content: "A blend of international experience and a deep passion for cooking. The restaurant features a variety of cuisines, including Arabian, Tandoori, Asian Momo, Chinese, Continental, and Indian, all crafted with the expertise and care Chef Lokendra has gained over his years in the kitchen. With an exclusive bar and a family-friendly atmosphere."
        }
    ];

    return (
        <section className="flex flex-col">
            <section className="flex relative flex-col w-full min-h-[2770px] max-md:pt-24 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d44d2a3ee83f355befe470014ff709c73cc1044eba7d999e6e07f8e4c626055?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51" alt="" className="object-cover absolute inset-0 size-full" />
                <div className="flex relative z-10 flex-col px-14 w-full max-md:px-5 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 ">
                            {storyData.map((story, index) => (
                                <div key={index} className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                                    <div className="grow px-16 pt-32 pb-12 leading-8 text-white rounded-[32px] drop-shadow-lg bg-gradient-to-t from-amber-600 to-transparent max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
                                        <span className="font-bold text-lg md:text-3xl">{story.title}</span>
                                        <br />
                                        <p className="font-sans text-md md:text-2xl">{story.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chef's Image */}
                    <img loading="lazy" src={CirclePic} alt="Chef Lokendra" className="object-contain self-end mt-7 mr-36 max-w-full aspect-[1.02] rounded-[540px] drop-shadow-xl w-[334px] max-md:mr-2.5" />
                </div>

                {/* Restaurant Info */}
                <section className="flex relative z-10 flex-col items-center px-4 pt-2 pb-10 mt-16 mb-0 w-full text-2xl max-md:mt-8 max-md:mb-2 max-md:max-w-full">
                    <div className="px-5 pt-3 pb-7 ml-0 max-w-full text-2xl leading-none text-white bg-gradient-to-r from-red-950 to-red-700 rounded-lg drop-shadow-lg w-full max-md:px-5 md:w-fit">
                        Dine in at our restaurant to experience the delight
                    </div>
                    <h2 className="self-stretch mt-20 w-full text-4xl font-galada leading-none text-center text-amber-500 max-md:mt-10 max-md:max-w-full max-md:text-3xl">
                        Chef's Bhojan : A Culinary Haven in Goa ..
                    </h2>
                    <p className="mt-10 pb-10 text-center text-[16px] md:text-xl text-stone-50 max-md:mt-8 max-md:max-w-full">
                        Chef's Bhojan offers a diverse menu that reflects Chef Lokendra's vast experience and expertise, with dishes spanning Indian, Continental, Arabic, Italian, and many more cuisines. Whether you're craving Tandoori, Momo, or Arabian delicacies, every dish at Chef's Bhojan is crafted with love and precision.
                        <br />
                        Chef Lokendra now leads a team of 15 dedicated employees who are committed to providing an exceptional dining experience. With his vast knowledge, Chef Lokendra ensures that every dish not only meets but exceeds customer expectations.
                    </p>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/360bc980311bf99224019b8bc2e6a7e57c99186eebde9fce9839d5e8bdea0ffc?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51" alt="" className="absolute -bottom-20 object-contain mt-28 w-full aspect-[2.58] max-md:mt-10 max-md:max-w-full" />
                </section>
            </section>

        </section>
    );
}

export default StoryLine;
