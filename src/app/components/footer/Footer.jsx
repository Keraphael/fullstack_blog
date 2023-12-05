import React from "react";
import classes from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About this App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            accusamus laborum sequi laudantium exercitationem fuga quod eligendi
            voluptates harum quidem odit, dolor reiciendis? Nisi consectetur
            laboriosam deleniti, error debitis iusto.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contact</h2>
          <span>+8618071518200</span>
          <span>youtube: Keraphael</span>
          <span>GitHub: Keraphael</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: North America</span>
          <span>Country: The United States</span>
          <span>Current Location: New York</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
