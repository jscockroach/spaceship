import React from "react";
import styles from "./App.module.css";
import AppNavigation from "./navigation/AppNavigation";
import { ReactComponent as Spiceplate } from "./assets/spaceship.svg";

function App() {
  return (
    <div className={styles.app}>
      <AppNavigation />
      <Spiceplate className={styles.ship1} />
      <Spiceplate className={styles.ship2} />
    </div>
  );
}

export default App;
