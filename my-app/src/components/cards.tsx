import React, {useState, useEffect} from "react";
import styles from '../index.module.css';
// Card.ts
class Card {
    suit: string;
    rank: string;
  
    constructor(suit: string, rank: string) {
      this.suit = suit;
      this.rank = rank;
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
      const suits: string[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
      suits.forEach((suit) => {
        ranks.forEach((rank) => {
          const card = new Card(suit, rank);
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
  
  // Example usage:
  
  // Create a new deck
  const deck = new Deck();
  console.log(deck);
  
  // Shuffle the deck
  deck.shuffle();
  
  // Deal a card
  const card1 = deck.dealCard();
  console.log('Card 1:', card1 && card1.toString());
  
  // Deal another card
  const card2 = deck.dealCard();
  console.log('Card 2:', card2 && card2.toString());
  
  // Reset the deck
  deck.resetDeck();
  console.log('Deck after reset:', deck.cards);
  

export default function Cards(){

    return (
        <>
        <div className={styles.column}>
            <div className={styles.row}>
        <h2>Dealer Score: 0</h2>
        <h2>Your Score: 0</h2>
        </div>
        


            <div className={styles.row}>  
            
 
                <img
                src="https://deckofcardsapi.com/static/img/back.png"
                alt="poker chip"
                height="200"
                width="150"
            />
             <img
                src="https://deckofcardsapi.com/static/img/back.png"
                alt="poker chip"
                height="200"
                width="150"
            />

            
            </div>
           
            <div className={styles.row}>
            

                <img
                src="https://deckofcardsapi.com/static/img/back.png"
                alt="poker chip"
                height="200"
                width="150"
            />
             <img
                src="https://deckofcardsapi.com/static/img/back.png"
                alt="poker chip"
                height="200"
                width="150"
            />

                
            </div>
        </div>
        </>
    )
}