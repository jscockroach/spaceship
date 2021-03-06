import React from "react";
import styles from "./Spaceship.module.css";
import { ReactComponent as Spiceplate } from "../../../assets/spaceship.svg";
import PropTypes from "prop-types";

const Spaceship = props => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <a
          className={styles.more}
          href="/"
          onClick={e => props.goToDetailsPageAboutShip(e, props.spaceship.url)}
        >
          More
        </a>
      </div>
      <Spiceplate className={styles.spiceplate} />
      <div className={styles.shipAbout}>
        <h2 className={styles.title}>{props.spaceship.name}</h2>
        <p className={styles.manufacturer}>
          <span className={styles.aboutName}>manufacturer: </span>
          {props.spaceship.manufacturer}
        </p>
        <p className={styles.starshipClass}>
          <span className={styles.aboutName}>class:</span>
          {props.spaceship.starship_class}
        </p>
      </div>
    </div>
  );
};

Spaceship.propTypes = {
  spaceship: PropTypes.object,
  goToDetailsPageAboutShip: PropTypes.func
};

export default Spaceship;
