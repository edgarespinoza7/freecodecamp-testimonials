import React from "react";

function Testimonial() {
  return (
    <div className="4">
      <img className="img-testimonial"
        src={require("../images/testimonial-jhon.jpg")}
        alt="jhon profile pic"
      />
      <div className="container-text-testimonial">
        <h2 className="name-testimonial">Jhon Boyega in Sudan</h2>
        <p className="role-testimonial">Software Engineer at Spotify</p>
        <p className="text-testimonial">"It's scary to change careers. I only gained the confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a software engineer. freeCodeCamp changed my life."</p>
      </div>

    </div>
  );
}

export default Testimonial;