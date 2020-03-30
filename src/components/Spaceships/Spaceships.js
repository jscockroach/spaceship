import React, { useEffect } from "react";
import Spaceship from "./Spaceship/Spaceship";
import Header from "../../UI/Header/Header";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./Spaceships.module.css";

const Spaceships = props => {
  useEffect(() => {
    props.actions.getData();
  }, []);

  const goToDetailsPageAboutShip = (e, url) => {
    e.preventDefault();
    props.history.push(`/starships/15`);
  };

  const generateListOfSpacehips = () => {
    return props.allStarships.results.map(spaceship => {
      return (
        <Spaceship
          spaceship={spaceship}
          key={spaceship.name}
          goToDetailsPageAboutShip={goToDetailsPageAboutShip}
        />
      );
    });
  };

  return (
    <div className={styles.container}>
      <Header />
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div">
          <div>{props.allStarships ? generateListOfSpacehips() : null}</div>
        </Typography>
      </Container>
    </div>
  );
};

export default Spaceships;
