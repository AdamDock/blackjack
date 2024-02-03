import { Dispatch } from "redux";

const { setGameOver, setEvaluateStage, setBetStage, setDealStage, setSplitActive, setDealerTurnComplete, setTextOutcome, setTextOutcome2, resetDealerHand, resetPlayerHand, setHand1Dealt, setIsBlackjack, removeChips, winChips, setHandsLost, setHandsWon, setScore, resetChips, setHandsPushed, dealerDealCard, hand1dealt } = require('../../store');
const { deck } = require('../Deck/deck');

const evaluateWinner = (dispatch: Dispatch, score: number, dealerScore: number, pot: number, splitActive: boolean,score2: number, pot2: number) => {
        
    if (score > 21) {
      dispatch(setTextOutcome('Player Bust!'));
      dispatch(removeChips("hand1"));
      dispatch(setHandsLost());

    } else if (dealerScore > 21) {
      dispatch(setTextOutcome('Dealer Bust!'));
      dispatch(winChips("hand1"));
      dispatch(setScore(pot));
      dispatch(setHandsWon());

      } else if (score === dealerScore) {
      dispatch(setTextOutcome('Push!'));
      dispatch(resetChips("hand1"));
      dispatch(setHandsPushed());

    } else if (score > dealerScore) {
      dispatch(setTextOutcome('Player Wins!'));
      dispatch(winChips("hand1"));
      dispatch(setScore(pot));
      dispatch(setHandsWon());
    } else {
      dispatch(setTextOutcome('Dealer Wins!'));
      dispatch(removeChips("hand1"));
      dispatch(setHandsLost());

    }
    if(splitActive){
      if (score2 > 21) {
        dispatch(setTextOutcome2('Player Hand 2 Bust!'));
        dispatch(removeChips("hand2"));
        dispatch(setHandsLost());
      }
      else if (dealerScore > 21) {
        dispatch(setTextOutcome2('Dealer Bust!'));
        dispatch(winChips("hand2"));
        dispatch(setScore(pot2));
        dispatch(setHandsWon());

      } else if (score2 === dealerScore) {
        dispatch(setTextOutcome2('Push!'));
        dispatch(resetChips("hand2"));
        dispatch(setHandsPushed());

      } else if (score2 > dealerScore) {
        dispatch(setTextOutcome2('Player Wins!'));
        dispatch(winChips("hand2"));
        dispatch(setScore(pot2));
        dispatch(setHandsWon());
      } else {
        dispatch(setTextOutcome2('Dealer Wins!'));
        dispatch(removeChips("hand2"));
        dispatch(setHandsLost());

      }
    }

    dispatch(setGameOver(true));

  };

  const dealerHit = (dispatch: Dispatch, dealerScore: number ) => {
    if (dealerScore < 17) {
      const card = deck.dealCard();
      dispatch(dealerDealCard(card));
    } else if (dealerScore >= 17) {
      dispatch(setDealerTurnComplete(true));
    }
  };
  const checkBlackjack = (dispatch: Dispatch, dealStage: boolean, splitActive: boolean, score: number, dealerScore: number, score2: number, pot: number, pot2: number)=>{
    console.log("check");
    if(dealStage && !splitActive){
      if(score === 21 && dealerScore === 21){
        dispatch(setTextOutcome('Double blackjack! Push!'));
        dispatch(resetChips("hand1"));
        dispatch(setHandsPushed());
        dispatch(setGameOver(true));
        dispatch(setIsBlackjack(true));
      } else if(score === 21) {
        dispatch(setTextOutcome('Blackjack!'));
        dispatch(winChips("hand1blackjack"));
        dispatch(setScore(pot*1.5));
        dispatch(setHandsWon());
        dispatch(setGameOver(true));
        dispatch(setIsBlackjack(true));
      } else if(dealerScore === 21) {
        dispatch(setTextOutcome('Dealer Blackjack!'));
        dispatch(removeChips("hand1"));
        dispatch(setHandsLost());
        dispatch(setGameOver(true));
        dispatch(setIsBlackjack(true));
      }
    } else if(dealStage && splitActive){
      if(score === 21 && dealerScore === 21){
        dispatch(setTextOutcome('Double blackjack! Push!'));
        dispatch(resetChips("hand1"));
        dispatch(setHandsPushed());
        dispatch(hand1dealt(true));
      } else if(score === 21) {
        dispatch(setTextOutcome('Blackjack!'));
        dispatch(winChips("hand1blackjack"));
        dispatch(setScore(pot*1.5));
        dispatch(setHandsWon());
        dispatch(setHand1Dealt(true));
      } else if(dealerScore === 21) {
        dispatch(setTextOutcome('Dealer Blackjack!'));
        dispatch(removeChips("hand1"));
        dispatch(setHandsLost());
        dispatch(setHand1Dealt(true));
        dispatch(setIsBlackjack(true));
      }
      if(score2 === 21 && dealerScore === 21){
        dispatch(setTextOutcome2('Double blackjack! Push!'));
        dispatch(resetChips("hand2"));
        dispatch(setHandsPushed());
        dispatch(setGameOver(true));
        dispatch(setIsBlackjack(true));
      } else if(score2 === 21) {
        dispatch(setTextOutcome2('Blackjack!'));
        dispatch(winChips("hand2blackjack"));
        dispatch(setScore(pot2*1.5));
        dispatch(setHandsWon());
        dispatch(setGameOver(true));
        dispatch(setIsBlackjack(true));
      } else if(dealerScore === 21) {
        dispatch(setTextOutcome2('Dealer Blackjack!'));
        dispatch(removeChips("hand2"));
        dispatch(setHandsLost());
        dispatch(setGameOver(true));
        dispatch(setIsBlackjack(true));
      }
    }
  };



const resetGame = (dispatch: Dispatch) => { 
    dispatch(setGameOver(false));
    dispatch(setEvaluateStage(false));
    dispatch(setBetStage(true));
    dispatch(setDealStage(false));
    dispatch(setSplitActive(false));
    dispatch(setDealerTurnComplete(false));
    dispatch(setTextOutcome(''));
    dispatch(setTextOutcome2(''));
    dispatch(resetDealerHand());
    dispatch(resetPlayerHand());
    dispatch(setHand1Dealt(false));
    dispatch(setIsBlackjack(false));
    deck.resetDeck();
  };

  const calculateScore = ((hand: any)=>{
    let score = 0;
    let aces = 0;
    let blackjack = false;
    hand.forEach((card: any) => {
      if(card.rank === 'A'){
        aces++;
      }
      score += card.value;
    });
    
    if(aces > 0 && score + 10 <= 21){
      score += 10;
    }
    if(hand.length === 2 && score === 21){
      blackjack = true;
    }
    
    return score;
  
  })


export { resetGame, calculateScore, evaluateWinner, dealerHit, checkBlackjack};

