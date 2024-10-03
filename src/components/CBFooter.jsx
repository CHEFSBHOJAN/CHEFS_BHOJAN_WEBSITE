import React from 'react';
import lastPic from "../assets/photos/Lokendra_4.jpg"

function Footer() {
    const socialIcons = [
        {
            src: "/facebook.png",
            alt: "Facebook",
            className: "object-contain shrink-0 my-auto aspect-[1.04] rounded-[104px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[72px] max-md:w-[50px]",
            link: "https://www.facebook.com/profile.php?id=61565088607331"
        },
        {
            src: "/instagram.png",
            alt: "Instagram",
            className: "object-contain shrink-0 aspect-[1.12] rounded-[52px] w-[83px] max-md:w-[60px]",
            link: "https://www.instagram.com/chefsbhojan/"
        },
        {
            src: "whatsapp.png",
            alt: "Whatsapp",
            className: "object-contain shrink-0 aspect-[1.05] rounded-[49px] w-[78px] max-md:w-[55px]",
            link: "https://wa.me/9923388852"
        }
    ];

    return (
        <main className="flex flex-col  ">
            <section className="self-center px-4 w-full max-w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src={lastPic}
                            alt="Chef's Bhojan restaurant ambiance"
                            className="object-contain self-stretch my-auto w-full aspect-[0.93] rounded-full drop-shadow-lg max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col px-2 md:px-20 ml-0 w-full max-md:ml-0 max-md:w-full">
                        <div className="flex pt-5 md:pt-10 flex-col grow text-center md:text-right max-md:mt-10 max-md:max-w-full">
                            <h1 className="self-center text-5xl font-galada leading-none text-center text-amber-500 max-md:max-w-full max-md:text-4xl">
                                A Restaurant with Heart and Soul
                            </h1>
                            <p className="mt-24 leading-10 text-[16px] text-neutral-950 max-md:mt-10 max-md:max-w-full">
                                At Chef's Bhojan, the focus isn't just on delivering high-quality food; it's about creating a memorable dining experience for families, food enthusiasts, and everyone in between. Chef Lokendra's journey from Mumbai to the Mediterranean, and finally to Goa, is a testament to his dedication to the art of cooking. His restaurant is more than just a place to eat; it's a reflection of his life's work, passion, and love for his family.
                            </p>
                            <div className="px-6 py-1.5 mt-20 leading-7 bg-gradient-to-r from-red-950 to-red-700 text-white rounded-lg drop-shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-fit">
                                Chef's Bhojan invites you to join the culinary journey and savor the flavors of years of expertise and global experiences.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-wrap gap-5 justify-between bg-amber-600 items-start px-20 pt-8 pb-28 mt- 20 w-full max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col text-xl leading-none text-white">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/092c972d17d30cb5aba741acfb02840a6e4a5ec4b8f75015ab719bf6a4dbf470?placeholderIfAbsent=true&apiKey=f62cd1d3e083440d9ed660c431cacc51"
                        alt="Diverse culinary offerings"
                        className="object-contain max-w-full rounded-md aspect-[2.36] w-[278px] max-md:w-[150px]"
                    />
                    <p className="mt-16 max-md:mt-10">Flavours from every corner</p>
                </div>
                <div className="flex flex-col mt-3.5 max-md:mt-5">
                    <h2 className="text-xl font-bold text-white max-md:text-lg">
                        Check out our social handles
                    </h2>
                    <a className="flex gap-5  justify-between mt-8 max-md:flex-wrap max-md:justify-center">
                        {socialIcons.map((icon, index) => (
                            <a key={index} href={icon.link} className='bg-white rounded-full p-2' target="_blank" rel="noopener noreferrer">
                                <img
                                    loading="lazy"
                                    src={icon.src}
                                    alt={icon.alt}
                                    className={icon.className}
                                />
                            </a>
                        ))}
                    </a>
                </div>
                <h1 className='w-full h-fit bg-black text-white py-2 text-center text-xl font-sans font-bold'> Developed by CLICKBATEMEDIA @2024</h1>
            </section>
        </main>
    );
}

export default Footer;