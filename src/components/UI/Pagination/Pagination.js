import React from "react";
import styles from "./Pagination.module.css";

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

export default Pagination;
