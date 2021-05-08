import React from 'react'
import JohnDoe from "../JohnDoe.jpg";
import "./Nav.css";
function Introsection() {
    return (
        <section id="intro-section" className="sperator">
      <h2>
        Hello , my name is <span className="text-important"> John Doe </span>,<br />
        and i make a horrible websites
      </h2>
      <img src={JohnDoe} alt="john-doe" />
    </section>
    )
}

export default Introsection

