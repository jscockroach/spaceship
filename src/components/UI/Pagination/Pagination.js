import React from "react";
import styles from "./Pagination.module.css";
import PropTypes from "prop-types";

const Pagination = props => {
  return (
    <div className={styles.paginationBlock}>
      <button
        disabled={!!!props.prev}
        onClick={e => props.paginationButtonsHandler(e)}
        className={styles.paginationButton}
      >
        Prev
      </button>
      <button
        disabled={!!!props.next}
        onClick={e => props.paginationButtonsHandler(e)}
        className={styles.paginationButton}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  paginationButtonsHandler: PropTypes.func
};

export default Pagination;
