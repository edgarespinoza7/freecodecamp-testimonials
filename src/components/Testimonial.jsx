import React from "react";
import "../stylesheets/Testimonial.css";

function Testimonial(props) {
  return (
    <div className="container-testimonial">
      <img className="img-testimonial"
          src={require(`../images/testimonial-${props.imgName}.jpg`)}
          alt="jhon profile pic"
        />
     

      <div className="container-text-testimonial">
        <p className="name-testimonial"><strong>{props.name}</strong> in {props.country}</p>
        <p className="role-testimonial">{props.role} at <strong>{props.company}</strong></p>
        <p className="text-testimonial">{props.testimonial}</p>
      </div>

    </div>
  );
}

export default Testimonial;