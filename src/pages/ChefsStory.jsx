import React from "react";
import Header from "../components/Header";
import CuisineExpertise from "../components/CusineExpertise";
import ChefJourney from "../components/ChefsJourney";
import RestaurantInfo from "../components/RestaurantInfo";
import StoryLine from "../components/storyline";
import Footer from "../components/CBFooter";

function ChefsBhojan() {
    return (
        <div className="flex h-full w-svw overflow-hidden flex-col bg-white shadow-[9px_6px_4px_rgba(0,0,0,0.25)]">
            <Header />
            <CuisineExpertise />
            <ChefJourney />
            <RestaurantInfo />
            <StoryLine />
            <Footer />
        </div>
    );
}

export default ChefsBhojan;