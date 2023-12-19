// Deck.ts
class Deck {
    cards: any[]; // Change 'any' to the actual type of your cards
  
    constructor() {
      this.cards = [];
      this.initializeDeck();
    }
  
    initializeDeck(): void {
      // Your logic to populate the deck with cards
      // For simplicity, let's add a few cards
      const suits: string[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
      suits.forEach((suit) => {
        ranks.forEach((rank) => {
          const card = { suit, rank }; // Replace with your card object or class
          this.cards.push(card);
        });
      });
    }
  }
  
  export default Deck;
  