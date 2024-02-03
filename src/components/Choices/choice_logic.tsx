import * as Act from '../../store';
import {deck} from '../Deck/deck';
import {Dispatch} from 'redux';

const handleDealClick = (dispatch: Dispatch, betStage: boolean, pot: number) => {
      
    if(betStage && pot > 0){
      deck.shuffle();
      console.log(deck);
      const card = deck.dealCard();
      const card2 = deck.dealCard();
      const card3 = deck.dealCard();
      const card4 = deck.dealCard();
      dispatch(Act.playerDealCard(card));
      dispatch(Act.playerDealCard(card2));
      dispatch(Act.dealerDealCard(card3));
      dispatch(Act.dealerDealCard(card4));
      dispatch(Act.setBetStage(false));
      dispatch(Act.setDealStage(true));
    }
  };
  const handleHitClick = (dispatch: Dispatch, dealStage: boolean, splitActive: boolean, score: number, hand1dealt: boolean) => {
    if(!dealStage || (!splitActive && score> 21)){
      return;
    }
    if(score > 21){
      dispatch(Act.setHand1Dealt(true));
    }
    if(!splitActive){
      const card = deck.dealCard();
      dispatch(Act.playerDealCard(card));
    } else if(splitActive && !hand1dealt){
      const card = deck.dealCard();
      dispatch(Act.playerDealCard(card));
    } else if(splitActive && hand1dealt){
      const card = deck.dealCard();
      dispatch(Act.playerDealCard2(card));
    }
  };
  const handleStandClick = (dispatch: Dispatch, splitActive: boolean, betStage: boolean, hand1dealt: boolean) => {
    console.log(splitActive)
    if(!splitActive && !betStage){
      console.log("stand");
      dispatch(Act.setDealStage(false));
    dispatch(Act.setEvaluateStage(true));
  } else if(splitActive && !hand1dealt){
    dispatch(Act.setHand1Dealt(true));
  } else if(splitActive && hand1dealt){
    dispatch(Act.setDealStage(false));
    dispatch(Act.setEvaluateStage(true));
  }
  };
  const handleSplitClick = (dispatch: Dispatch, hand: Array<any>, splitActive: boolean, stack: number, pot: number) => {
    if(hand[0].rank===hand[1].rank && !splitActive && stack >= pot){
      dispatch(Act.setSplitActive(true));
      dispatch(Act.playerSplit());
      dispatch(Act.playerDealCard(deck.dealCard()));
      dispatch(Act.playerDealCard2(deck.dealCard()));
      dispatch(Act.splitChips());

    }


  };
  const handleDoubleClick = (dispatch:Dispatch, dealStage: boolean, splitActive: boolean, score: number, stack: number, pot: number, hand: Array<any>, score2: number, hand1dealt: boolean) => {
    if(!dealStage || (!splitActive && score > 21) || stack < pot || (!(hand.length < 3)&& !splitActive) || score2 > 21 ){
      return;
    }
    if(!splitActive){
    const card = deck.dealCard();
    dispatch(Act.playerDealCard(card));
    dispatch(Act.setDealStage(false));
    dispatch(Act.setEvaluateStage(true));
    dispatch(Act.doubleChips("hand1"));
    } else if(splitActive && !hand1dealt){
      const card = deck.dealCard();
      dispatch(Act.playerDealCard(card));
      dispatch(Act.setHand1Dealt(true));
      dispatch(Act.doubleChips("hand1"));
    } else if(splitActive && hand1dealt){
      const card = deck.dealCard();
      dispatch(Act.playerDealCard2(card));
      dispatch(Act.setDealStage(false));
     dispatch(Act.setEvaluateStage(true));
      dispatch(Act.doubleChips("hand2"));
    }

  };

export { handleDealClick, handleHitClick, handleStandClick, handleDoubleClick, handleSplitClick};