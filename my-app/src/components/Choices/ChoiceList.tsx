import Choice from "./Choice";
import { useCallback } from "react";
import Button from "../ReusableForms/Button";
import { useDispatch, useSelector } from "react-redux";
import { playerDealCard, setBetStage, setDealStage, dealerDealCard, setEvaluateStage, doubleChips, setSplitActive, playerSplit, setDealerScore, setTextOutcome, setScore, removeChips, winChips, playerDealCard2 } from "../../store";
import { useEffect, useRef } from "react";

// Card.ts
class Card {
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
class Deck {
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


const ChoiceList = ()=>{
    const dispatch = useDispatch();
    const {betStage, dealStage, evaluateStage, splitActive} = useSelector((state: any) => state.game);
    const {score, score2} = useSelector((state: any) => state.player);
    const {dealerScore} = useSelector((state: any) => state.dealer);
    const {pot, stack} = useSelector((state: any) => state.chips);
    const {hand} = useSelector((state: any) => state.player);

 const isFirstRender = useRef(true);
 const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
     const handleDealClick = () => {
      if(betStage){
        deck.shuffle();
        const card = deck.dealCard();
        const card2 = deck.dealCard();
        const card3 = deck.dealCard();
        const card4 = deck.dealCard();
        console.log(card);
        dispatch(playerDealCard(card));
        dispatch(playerDealCard(card2));
        dispatch(dealerDealCard(card3));
        dispatch(dealerDealCard(card4));
        dispatch(setBetStage(false));
        dispatch(setDealStage(true));
      }
    };
      const handleHitClick = () => {
        if(!dealStage || score > 21){
          return;
        }
        

        const card = deck.dealCard();
        dispatch(playerDealCard(card));
      };
      const handleStandClick = () => {
        dispatch(setDealStage(false));
        dispatch(setEvaluateStage(true));
      };
      const handleSplitClick = () => {
        /*if(hand[0].rank===hand[1].rank){*/
          dispatch(setSplitActive(true));
          dispatch(playerSplit());


      };
      const handleDoubleClick = () => {
        if(!dealStage || score > 21 || stack < pot || !(hand.length < 3) ){
          return;
        }
        const card = deck.dealCard();
        dispatch(playerDealCard(card));
        dispatch(setDealStage(false));
        dispatch(setEvaluateStage(true));
        dispatch(doubleChips());

      };
      if(score > 21){
        dispatch(setEvaluateStage(true));
      }
      const evaluateWinner = () => {
        setEvaluateStage(false);
        if (score > 21) {
          dispatch(setTextOutcome('Player Bust!'));
          dispatch(removeChips());
        } else if (dealerScore > 21) {
          dispatch(setTextOutcome('Dealer Bust!'));
          dispatch(winChips());
        } else if (score === dealerScore) {
          dispatch(setTextOutcome('Push. Dealer Wins!'));
          dispatch(removeChips());
        } else if (score > dealerScore) {
          dispatch(setTextOutcome('Player Wins!'));
          dispatch(winChips());
        } else {
          dispatch(setTextOutcome('Dealer Wins!'));
          dispatch(removeChips());
        }
      };
    
      

  return (
      <>
      <div className="flex items-center">
        <Button className={!betStage? "opacity-0": ''} secondary rounded onClick={handleDealClick}>
          Deal
        </Button>
        <Button className={evaluateStage || score> 21? "opacity-0":''} secondary rounded onClick={handleHitClick}>
          Hit
        </Button>
        <Button className={evaluateStage || score>21? "opacity-0":''} secondary rounded onClick={handleStandClick}>
          Stand
        </Button>
        <Button className={evaluateStage ||score>21? "opacity-0":''} secondary rounded onClick={handleDoubleClick}>
          Double
        </Button>
        <Button className={evaluateStage|| score > 21? "opacity-0":''} secondary rounded onClick={handleSplitClick}>
          Split
        </Button>

      </div>
      </>
  )
}
export default ChoiceList;