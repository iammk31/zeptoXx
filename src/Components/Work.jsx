
import React from "react";
import './Work.css';
import Classroom from "./classroom.png";
import Choose from "./choose-image.png";
import DeliveryMeals from "./delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Classroom,
      title: "Get Job",
      text: "Teachers seek the joy of imparting knowledge, while students search for the guides who illuminate their path of learning.",
    },
    {
      image: Choose,
      title: "Buy Books",
      text: "Explore our collection of textbooks for grades 6 to 12, essential companions for students on their educational journey!",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Rest assured, our commitment ensures timely deliveries of your books, so you never miss a beat in your academic pursuits!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          "From textbooks spanning classes 6 to 12, rest assured of timely deliveries,
          ensuring that teachers find their calling in teaching, and students find their guides for learning."
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
