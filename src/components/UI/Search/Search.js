import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      border: "2px solid rgba(255, 255, 255, 0.2)",
      padding: "4px 10px",
      borderRadius: 5,
      color: "#fff",
      margin: 0,
      width: "25ch"
    }
  }
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Input
        value={props.inputValue}
        onBlur={e => e.preventDefault()}
        onKeyDown={e => props.changeInputHandler(e)}
        onChange={e => props.changeInputHandler(e)}
        placeholder="Search"
      />
    </form>
  );
}

BasicTextFields.propTypes = {
  changeInputHandler: PropTypes.func,
  inputValue: PropTypes.string
};
