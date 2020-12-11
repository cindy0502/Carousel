import React from "react";
import "./Campaigns.css";
import Carousel from "react-elastic-carousel";
import { Button } from "@material-ui/core";
// import sportsonLogo from "./../img/sportson-logo.jpeg";
import CampaignCards from "./CampaignCards";

function Campaigns() {
  // const myArrow = ({ type, onClick, isEdge }) => {
  //   const pointer =
  //     type === consts.PREV ? (
  //       <ArrowBackIosIcon className="banner__arrowBack" />
  //     ) : (
  //       <ArrowForwardIosIcon className="banner__arrowForward" />
  //     );
  //   return (
  //     <Button className="banner__arrowBtn" onClick={onClick} disabled={isEdge}>
  //       {pointer}
  //     </Button>
  //   );
  // };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
  ];
  return (
    <div className="campaigns">
      <h1>Kampanjer</h1>
      <Carousel
        itemsToShow={2}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <ul>
              {pages.map((page, i) => {
                const isActivePage = activePage === page;
                return (
                  <Button
                    className="campaign__monthBtn"
                    key={i}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  >
                    {page}
                  </Button>
                );
              })}
            </ul>
          );
        }}
        itemPadding={[10, 10]}
        // renderArrow={myArrow}
        breakPoints={breakPoints}
      >
        <CampaignCards
          //   image={sportsonLogo}
          title="3 klädesplagg för 2"
          validDate="1-28"
        />
        <CampaignCards
          //   image={sportsonLogo}
          title="3 klädesplagg för 2"
          validDate="1-28"
        />
        <CampaignCards
          //   image={sportsonLogo}
          title="3 klädesplagg för 2"
          validDate="1-28"
        />
        <CampaignCards
          //   image={sportsonLogo}
          title="3 klädesplagg för 2"
          validDate="1-28"
        />
      </Carousel>
    </div>
  );
}

export default Campaigns;
