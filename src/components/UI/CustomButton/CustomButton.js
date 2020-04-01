import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginLeft: 15,
      height: "100%",
      color: "#fff",
      fontWeight: 600,
      background: "transparent",
      border: "2px solid #fff",
      paddingLeft: 30,
      paddingRight: 30
    }
  }
}));

export default function CustomButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={props.onClickHandler} variant="contained">
        {props.name}
      </Button>
    </div>
  );
}

CustomButton.propTypes = {
  name: PropTypes.string,
  onClickHandler: PropTypes.func
};
