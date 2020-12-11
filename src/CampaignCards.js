import React from "react";

export default function CampaignCards({ image, validDate, title }) {
  return (
    <div className="campaignCards">
      <img src={image} alt="" />
      <div className="bannerCard__info">
        <p className="bannerCard__text">
          <small>{validDate}</small>
          <strong>{title}</strong>
        </p>
      </div>
    </div>
  );
}
