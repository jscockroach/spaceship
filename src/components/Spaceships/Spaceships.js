import React, { useEffect, useState } from "react";
import Spaceship from "./Spaceship/Spaceship";
import { Header, Loader, Pagination, Search } from "../UI";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./Spaceships.module.css";

import * as constants from "../../constants/constants";
import PropTypes from "prop-types";

const Spaceships = props => {
  const { allStarships, history, location, actions } = props;
  const [inputValue, setInputValue] = useState("");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const link = location.search.split("=")[1];
    if (link) {
      setInputValue(link);
      searchHandler(link);
    } else {
      actions.getData(`${constants.baseUrl}/starships`);
    }
  }, []);

  useEffect(() => {
    setSpinner(true);
  }, [allStarships]);

  const goToDetailsPageAboutShip = (e, url) => {
    const link = url.match(/(\/starships\/)\w+\//g);
    e.preventDefault();
    history.push(link[0]);
  };

  const generateListOfSpacehips = () => {
    return allStarships.results.map(spaceship => {
      return (
        <Spaceship
          spaceship={spaceship}
          key={spaceship.name}
          goToDetailsPageAboutShip={goToDetailsPageAboutShip}
        />
      );
    });
  };

  const paginationButtonsHandler = e => {
    setSpinner(false);
    if (e.target.innerHTML === "Prev" && allStarships.previous) {
      actions.getData(allStarships.previous);
    }
    if (e.target.innerHTML === "Next" && allStarships.next) {
      actions.getData(allStarships.next);
    }
  };

  const changeInputHandler = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      searchHandler(inputValue);
    }
    setInputValue(e.target.value);
  };

  const searchHandler = query => {
    setSpinner(false);
    actions.getDataBySearchQuery(
      `${constants.baseUrl}/starships?search=${query}`
    );
    history.push(`?search=${query}`);
  };

  return (
    <div>
      <Header />
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div">
          <div>
            {allStarships ? (
              <React.Fragment>
                <div className={styles.searchAndPaginationBlock}>
                  <Search
                    inputValue={inputValue}
                    searchHandler={searchHandler}
                    changeInputHandler={changeInputHandler}
                  />
                  <Pagination
                    prev={allStarships.previous}
                    next={allStarships.next}
                    paginationButtonsHandler={paginationButtonsHandler}
                  />
                </div>
                {spinner ? generateListOfSpacehips() : <Loader />}
              </React.Fragment>
            ) : (
              <Loader />
            )}
          </div>
        </Typography>
      </Container>
    </div>
  );
};

Spaceships.propTypes = {
  allStarships: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
  actions: PropTypes.object
};

export default Spaceships;
