import Button from "../ReusableForms/Button";
import { useDispatch, useSelector } from "react-redux";
import {setPlayerScore2, setPlayerScore, setDealStage, setEvaluateStage, setDealerScore } from "../../store";
import { useEffect } from "react";
import { resetGame, calculateScore, evaluateWinner, dealerHit, checkBlackjack } from "../Game_Logic/game_logic";
import { handleDealClick, handleHitClick, handleStandClick, handleDoubleClick, handleSplitClick } from "./choice_logic";

const ChoiceList = ()=>{
    const dispatch = useDispatch();
    const {betStage, dealStage, evaluateStage, splitActive, dealerTurnComplete, gameOver, gameScore, hand1dealt, textOutcome, isBlackjack} = useSelector((state: any) => state.game);
    const {score, score2, hand, hand2} = useSelector((state: any) => state.player);
    const {dealerScore} = useSelector((state: any) => state.dealer);
    const dealerHand = useSelector((state: any) => state.dealer.hand);
    const {pot, pot2, stack} = useSelector((state: any) => state.chips);
    useEffect(() => {
      if(score > 21 && !splitActive){
        dispatch(setEvaluateStage(true));
        dispatch(setDealStage(false));
      } else if (score2 > 21 && splitActive){
        dispatch(setEvaluateStage(true));
        dispatch(setDealStage(false));
      }
    }, [score, score2]);
      
    useEffect(() => {
      const calculatedHand2Score = calculateScore(hand2);
      dispatch(setPlayerScore2(calculatedHand2Score));
    }, [hand2]);

    useEffect(() => {
      const calculatedDealerScore = calculateScore(dealerHand);
      dispatch(setDealerScore(calculatedDealerScore));
    }, [dealerHand]);

    useEffect(() => {
      const score = calculateScore(hand);
      dispatch(setPlayerScore(score));
    }, [hand]);

    useEffect(() => {
      if(hand.length === 2){
      checkBlackjack(dispatch, dealStage, splitActive, score, dealerScore, score2, pot, pot2);
      }
    }, [score]);
      
    useEffect(() => {
      if(evaluateStage){
        setTimeout(() => {
        dealerHit(dispatch, dealerScore);
        }, 2000);
      }
    },[dealerScore, evaluateStage]);

    useEffect(() => {
      if(dealerTurnComplete){
      evaluateWinner(dispatch, score, dealerScore, pot, splitActive, score2, pot2);
      }
    },[dealerTurnComplete]);

    useEffect(() => {
      if((evaluateStage && dealerTurnComplete && gameOver)|| isBlackjack){
        setTimeout(() => {
          resetGame(dispatch);
        }, 5000);
      }
    }, [gameOver]);
      
  return (
      <>
      <div className="flex items-center">
        <Button className={!betStage? "opacity-0 cursor-default": ''} secondary rounded onClick={()=>handleDealClick(dispatch, betStage, pot)}>
          Deal
        </Button>
        <Button className={!dealStage || (!splitActive && score> 21) || isBlackjack? "opacity-0 cursor-default":''} secondary rounded onClick={()=>handleHitClick(dispatch, dealStage, splitActive, score, hand1dealt)}>
          Hit
        </Button>
        <Button className={!dealStage || (!splitActive && score> 21) || isBlackjack? "opacity-0 cursor-default":''} secondary rounded onClick={()=>handleStandClick(dispatch, splitActive, betStage, hand1dealt)}>
          Stand
        </Button>
        <Button className={!dealStage || (!splitActive && score> 21)|| isBlackjack? "opacity-0 cursor-default":''} secondary rounded onClick={()=>handleDoubleClick(dispatch, dealStage, splitActive, score, stack, pot, hand, score2, hand1dealt)}>
          Double
        </Button>
        <Button className={!dealStage || (!splitActive && score> 21) ||(splitActive)|| isBlackjack ? "opacity-0 cursor-default":''} secondary rounded onClick={()=>handleSplitClick(dispatch, hand, splitActive, stack, pot)}>
          Split
        </Button>

      </div>
      </>
  )
}
export default ChoiceList;