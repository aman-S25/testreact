import React from "react";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";

function Events() {
  return (
    <section className="container-man">
      <h1 className="section-heading">Events</h1>
      <div className="row">
        <div className="events-col">
          <img src={image1} alt="image1" />
          <h1>Symposium jointly organized by Mehta Family School of Data Science</h1>
        </div>
        <div className="events-col">
          <img src={image2} alt="image1" />
          <h1>Research Poster Presentation Competition</h1>
        </div>
        <div className="events-col">
          <img src={image3} alt="image1" />
          <h1>G20 Brain Storming session on Sustainable Development</h1>
        </div>
        <div className="events-col">
          <img src={image4} alt="image1" />
          <h1>Talks by Eminent Researchers</h1>
        </div>
      </div>
    </section>
  );
}

export default Events;
