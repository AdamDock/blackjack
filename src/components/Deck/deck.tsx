import { Card } from './card';

export class Deck {
    cards: Card[];
  
    constructor() {
      this.cards = [];
      this.initializeDeck();
    }
  
    initializeDeck(): void {
      const suits: string[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
  
  
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
    blackjack(): void {
      const blackjackCards = this.cards.filter((card) => card.value === 10 || card.value === 1);
      this.cards = blackjackCards;
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

  export const deck = new Deck();