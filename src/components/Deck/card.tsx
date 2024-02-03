export class Card {
    suit: string;
    rank: string;
    code: string;
    value: number;
  
    constructor(suit: string, rank: string) {
      this.suit = suit;
      this.rank = rank;
      this.code = `${rank}${suit[0]}`;
      this.value = this.calculateValue(rank);
  
      }
      calculateValue(rank: string): number {
        const faceCards = ['K', 'Q', 'J','0'];
        if (faceCards.includes(rank)) {
          return 10;
        } else if (rank === 'A') {
          return 1;
        } else {
          return parseInt(rank, 10);
        }
      }
  
    toString(): string {
      return `${this.rank} of ${this.suit} ${this.code} ${this.value}`;
    }
  }