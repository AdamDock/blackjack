import React, { useState, useEffect } from "react";
import styles from '../index.module.css';

interface DecisionProps {
  getWinnings: (winTotalFromChild: number) => void;
}
class Card {
    suit: string;
    rank: string;
    code: string;
    value: number;
  
    constructor(suit: string, rank: string, code: string, value: number) {
      this.suit = suit;
      this.rank = rank;
      this.code = code;
      this.value = value;  
    }
  
    toString(): string {
      return `${this.rank} of ${this.suit}`;
    }
  }
class Deck {
    cards: Card[];
  
    constructor() {
      this.cards = [];
      this.initializeDeck();
    }
  
    initializeDeck(): void {
      const suits: string[] = ['H', 'D', 'C', 'S'];
      const ranks: string[] = ['A','2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K'];
      const values: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  
      suits.forEach((suit) => {
        ranks.forEach((rank) => {
                const card = new Card(suit, rank, `${rank}${suit}`, values[ranks.indexOf(rank)] );
                this.cards.push(card);
        });
      });
    }
  
    shuffle(): void {
      // Fisher-Yates shuffle algorithm
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    dealCard(): Card | null {
      if (this.cards.length === 0) {
        console.error('No cards left in the deck.');
        return null;
      }
      return this.cards.pop()!;
    }
  
    resetDeck(): void {
      this.cards = [];
      this.initializeDeck();
      this.shuffle();
    }
  }
  
 

const Decision: React.FC<DecisionProps> = ({ getWinnings }) => {
    const deck = new Deck();
    deck.shuffle();
  const [bet, setBet] = useState<number>(0);
  const [stack, setStack] = useState<number>(5000);
const [winnings, setWinnings] = useState<number>(0);
const [dealerScore, setDealerScore] = useState<number>(0);
const [playerScore, setPlayerScore] = useState<number>(0);
const [dealerCards, setDealerCards] = useState<Card[]>([]);
const [playerCards, setPlayerCards] = useState<Card[]>([]);

const onClickDeal = () => {
    setPlayerCards([deck.dealCard()!, deck.dealCard()!]);
    setDealerCards([deck.dealCard()!, deck.dealCard()!]);
    setStack(stack+(bet*2));
    console.log(playerCards);
    console.log(dealerCards);
    
    
}
useEffect(() => {
    const dealerTotal = dealerCards.reduce((acc, card) => acc + card.value, 0);
    setDealerScore(dealerTotal);
  },[dealerCards]);
  useEffect(() => {
    const playerTotal = playerCards.reduce((acc, card) => acc + card.value, 0);
    setPlayerScore(playerTotal);
  },[playerCards]);
    
const onClickHit = () => {
    if (deck.cards.length > 0) {
        setPlayerCards([...playerCards, deck.dealCard()!]);
        console.log(playerCards);
    } else {
        console.log('No more cards in the deck.');
    }
}

const handleChipClick = (amount: number): void => {
    // Check if the bet amount is within the remaining stack
    if (amount <= stack) {
      setBet((prevBet) => prevBet + amount);
      setStack((prevStack) => prevStack - amount);
    } else {
      // Display alert if the bet amount is more than the remaining stack
      alert("More than remaining bet amount. Try again.");
    }
  };

  const handleResetClick = (): void => {
    // Move all chips from the pot back to the stack
    setStack((prevStack) => prevStack + bet);
    setBet(0);
  };

  const handleAllInClick = (): void => {
    // Move all chips from the stack to the pot
    setBet((prevBet) => prevBet + stack);
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


  return (
    <>
         <>
        <div className={styles.column}>
            <div className={styles.row}>
        <h2>Dealer Score: {dealerScore}</h2>
        <h2>Your Score: {playerScore}</h2>
        </div>
            
            
            <div className={styles.row}>
            <div className={styles.row}>  
                {!dealerCards.length? 
                <>
                <img
                 src={`https://deckofcardsapi.com/static/img/back.png`}
                 alt="card"
                 height="200"
                 width="150"
             />
             <img
                 src={`https://deckofcardsapi.com/static/img/back.png`}
                 alt="card"
                 height="200"
                 width="150"
             />
                </>
                 
             
             :
             
                dealerCards.map((card, index) => (
                
                     <img
                        key={index}
                        src={`https://deckofcardsapi.com/static/img/${card.code}.png`}
                        alt="card"
                        height="200"
                        width="150"
                    />
                 ))}
            </div>
            </div>
            <div className={styles.row}>  
            <div className={styles.row}>  
                {!playerCards.length?
                <>
                <img
                 src={`https://deckofcardsapi.com/static/img/back.png`}
                 alt="card"
                 height="200"
                 width="150"
             />
             <img
                 src={`https://deckofcardsapi.com/static/img/back.png`}
                 alt="card"
                 height="200"
                 width="150"
             />
                </>
                :playerCards.map((card, index) => (
                     <img
                        key={index}
                        src={`https://deckofcardsapi.com/static/img/${card.code}.png`}
                        alt="card"
                        height="200"
                        width="150"
                    />
                 ))}
            </div>
            </div>
        </div>
        </>
      <div className={styles.row}>
        <div><h2>Bet total: {bet}</h2></div>
        <div><button className={styles.button} onClick={onClickDeal}>Deal</button></div>
        <div><button className={styles.button} onClick={onClickHit}>Hit</button></div>
        <div><button className={styles.button}>Stay</button></div>
        <div><button className={styles.button}>Split</button></div>
        <div><button className={styles.button}>Double</button></div>
        <div><h2>Stack: {stack}</h2></div>
      </div>
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
    </>
  );
};

export default Decision;