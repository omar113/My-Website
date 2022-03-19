import React from "react";
import "./FunFact.css";
import FlipCard from "./FlipCard";

const FunFact = () => {
  return (
    <div className="Facts">
      <h1 className="Title">Here are some fun facts about me.</h1>
      <div className="Card-container">
        <FlipCard
          className="Card"
          title="Travel"
          content="I have been to 13 countries in 3 different continents."
        />
        <FlipCard
          className="Card"
          title="Finance"
          content="I have earned my first pound when i was 11 years old for being a cashier."
        />
        <FlipCard
          className="Card"
          title="Hobbies"
          content="I have always liked to make stuff with my hands (Let's call it DIY Crafting) for example painting my home."
        />
      </div>
    </div>
  );
};

export default FunFact;
