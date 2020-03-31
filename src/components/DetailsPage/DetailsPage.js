import React, { useEffect, useState, useRef } from "react";
import { Header, Loader } from "../UI";
import DetailsItem from "./DetailsItem/DetailsItem";

import * as constants from "../../constants/constants";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const DetailsPage = props => {
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    getDataAboutOneShip();
    setSpinner(false);
  }, []);

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setSpinner(true);
    }
  });

  const getDataAboutOneShip = async () => {
    // const ship = await getData(
    //   `${constants.baseUrl}/starships/${props.match.params.id}/`
    // );
    props.actions.getDataByOneShip(
      `${constants.baseUrl}/starships/${props.match.params.id}/`
    );
  };

  return (
    <div>
      <Header />
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div">
          {spinner && props.ship ? (
            <DetailsItem shipData={props.ship} history={props.history} />
          ) : (
            <Loader />
          )}
        </Typography>
      </Container>
    </div>
  );
};

export default DetailsPage;
