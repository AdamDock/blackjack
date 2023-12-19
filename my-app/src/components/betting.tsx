import React, { useState } from "react";
import styles from '../index.module.css';

interface BettingProps {
  betAmountChange: (betAmountFromChild: number) => void;
  stackAmountChange: (stackAmountFromChild: number) => void;
}

const Betting: React.FC<BettingProps> = ({betAmountChange, stackAmountChange}) => {
  const [pot, setPot] = useState<number>(0);
  const [stack, setStack] = useState<number>(5000);
  

  

  const handleChipClick = (amount: number): void => {
    // Check if the bet amount is within the remaining stack
    if (amount <= stack) {
      setPot((prevPot) => prevPot + amount);
      setStack((prevStack) => prevStack - amount);
    } else {
      // Display alert if the bet amount is more than the remaining stack
      alert("More than remaining bet amount. Try again.");
    }
  };

  const handleResetClick = (): void => {
    // Move all chips from the pot back to the stack
    setStack((prevStack) => prevStack + pot);
    setPot(0);
  };

  const handleAllInClick = (): void => {
    // Move all chips from the stack to the pot
    setPot((prevPot) => prevPot + stack);
    setStack(0);
  };

  const chip = (amount: number): JSX.Element => (
    <div
      className={styles.chipcontainer}
      onClick={() => handleChipClick(amount)}
    >
      <div className={styles.textstyle}>{amount}</div>
      <img
        src="/pokerchip.png"
        alt="poker chip"
        width="100%"
        height="100%"
        className={styles.imageStyle}
      />
    </div>
  );
  const allinchip = (amount: string): JSX.Element => (
    <div
      className={styles.chipcontainer}
      onClick={() => handleAllInClick()}
    >
      <div className={styles.textstyle}>{amount}</div>
      <img
        src="/pokerchip.png"
        alt="poker chip"
        width="100%"
        height="100%"
        className={styles.imageStyle}
      />
    </div>
  );
  const resetchip = (amount: string): JSX.Element => (
    <div
      className={styles.chipcontainer}
      onClick={() => handleResetClick()}
    >
      <div className={styles.textstyle}>{amount}</div>
      <img
        src="/pokerchip.png"
        alt="poker chip"
        width="100%"
        height="100%"
        className={styles.imageStyle}
      />
    </div>
  );
  betAmountChange(pot);
  stackAmountChange(stack);
  

  return (
    <div className={styles.row}>
      {chip(1)}
      {chip(5)}
      {chip(10)}
      {chip(25)}
      {chip(100)}
      {chip(500)}
      {chip(1000)}
      {allinchip("All in")}
      {resetchip("Reset")}
    </div>
  );
};

export default Betting;
