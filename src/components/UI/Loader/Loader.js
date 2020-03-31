import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      marginTop: "150px",
      "& > * + *": {
        marginLeft: theme.spacing(2)
      }
    }
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loader;
