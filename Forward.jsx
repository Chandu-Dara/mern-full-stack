import React from "react";
import "./Forward.css"
import logo from "./konda.jpeg"

export const Forward = () => {
    return (
            <div className="Forward-main">
                <div className="Forward-content">
                    <div className="Forward-title">
                        Welcome to Stanjo <br /> -Lighting the Way <br /> Forward
                    </div>
                    <div className="Forward-matter">
                        At Stanjo, we believe lighting is more than just <br /> illumination—it's about enhancing spaces, creating <br />  ambiance, and delivering unmatched efficiency. Our <br />  mission is to provide high-quality, energy-efficient  <br /> LED lighting solutions that blend innovation, <br />  durability, and style to brighten homes, offices, and  <br />  outdoor spaces.
                    </div>
                    <div className="Forward-button"> Explore Products</div>
                <div>
                            <img className="Forward-image" src={logo} alt="nothing" />
                            </div>
                 </div>
            </div>
    );
};
