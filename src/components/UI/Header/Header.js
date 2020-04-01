import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../../assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} />
    </div>
  );
};

export default Header;
