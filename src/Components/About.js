import React from "react";

function About() {
  return (
    <div className="about">
        <h1>Fun facts about React</h1>
        <ul className="about-items">
        <li className="about-item-list"><span>Was first released in 2013</span></li>
        <li className="about-item-list"><span> Was originally created by Jordan Walke</span></li>
        <li className="about-item-list"><span> Has well over 100K stars on Github</span></li>
        <li className="about-item-list"><span> Is maintained by Facebook</span></li>
        <li className="about-item-list"><span> Powers thousands of enterprise apps, including mobile apps</span></li>
        </ul>
    </div>
  )
}

export default About