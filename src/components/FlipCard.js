import React from "react";
import "./FlipCard.css";

const FlipCard = ({title, content}) => {
  return (
    <div className="Main">
      <div className="Card">
        <div className="Front">
          <h2>Fact Card</h2>
        </div>
        <div className="Back">
            <h2 className="Card-title" >{title}</h2>
            <h2 className="Card-content">{content}</h2>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
