import React, { useEffect } from "react";

const Spaceships = props => {
  useEffect(() => {
    props.actions.getData();
  }, []);

  const generateListOfStarships = () => {
    // props.allStarships.results.forEach(cur => {
    //     return 
    // })
  };

  return <div>{props.allStarships ? generateListOfStarships() : null}</div>;
};

export default Spaceships;
