import React from "react";
import styles from "./DetailsItem.module.css";
import { ReactComponent as Spiceplate } from "../../../assets/spaceship.svg";
import { CustomButton } from "../../UI";
import PropTypes from "prop-types";

const DetailsItem = props => {
  const { shipData } = props;

  const onClickHandler = () => {
    props.history.goBack();
  };
  return (
    <React.Fragment>
      <div className={styles.goBackContainer}>
        <CustomButton onClickHandler={onClickHandler} name="Go back" />
      </div>
      <div className={styles.shipContainer}>
        <Spiceplate className={styles.ship} />
        <div className={styles.shipAboutBlock}>
          <h1>{shipData.name}</h1>
          <p className={styles.shipAboutItem}>
            <span className={styles.aboutName}>manufacturer: </span>
            {shipData.manufacturer}
          </p>
          <p className={styles.shipAboutItem}>
            <span className={styles.aboutName}>class:</span>
            {shipData.starship_class}
          </p>
          <p className={styles.shipAboutItem}>
            <span className={styles.aboutName}>passengers:</span>
            {shipData.passengers}
          </p>
          <p className={styles.shipAboutItem}>
            <span className={styles.aboutName}>length:</span>
            {shipData.length}
          </p>
          <p className={styles.shipAboutItem}>
            <span className={styles.aboutName}>hyperdrive rating:</span>
            {shipData.hyperdrive_rating}
          </p>
          <p className={styles.shipAboutItem}>
            <span className={styles.aboutName}>cargo capacity:</span>
            {shipData.cargo_capacity}
          </p>
          <p className={styles.shipAboutItem}>
            <span className={styles.aboutName}>MGLT:</span>
            {shipData.MGLT}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

DetailsItem.propTypes = {
  history: PropTypes.object,
  shipData: PropTypes.object
};

export default DetailsItem;
