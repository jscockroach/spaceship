import React from "react";
import styles from "./App.module.css";
import AppNavigation from "./navigation/AppNavigation";

function App() {
  return (
    <div className={styles.app}>
      <AppNavigation />
    </div>
  );
}

export default App;
