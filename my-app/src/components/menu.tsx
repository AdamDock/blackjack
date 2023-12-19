import React, {useState} from "react";
import styles from '../index.module.css';
interface MenuProps {
    score: number;
    }

const Menu: React.FC<MenuProps> = ({score}) => {
  const handleRestartClick = () => {
    // Reload the entire page
    window.location.reload();
  };




  return (
    <div className={styles.row}>
      <div className={styles.score}>
        <h2>Score</h2>
        <h2>{score}</h2>
      </div>
      <div>
        <button className={styles.button} onClick={handleRestartClick}>
          <h4>Restart</h4>
        </button>
      </div>
    </div>
  );
};

export default Menu;
