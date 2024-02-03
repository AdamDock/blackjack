import { configureStore } from '@reduxjs/toolkit';
import { chipsReducer, addChips, removeChips, resetChips, doubleChips, winChips, splitChips, doubleChips2, winChips2, removeChips2 } from './slices/chipsSlice';
import { gameReducer, setBetStage, setDealStage, setEvaluateStage, setScore, setSplitActive, setTextOutcome, setDealerTurnComplete, setGameOver, setHandsLost, setHandsWon, setHand1Dealt, setTextOutcome2, setIsBlackjack, setHandsPushed } from './slices/gameSlice';
import { playerReducer, setPlayerScore, playerDealCard, playerSplit, playerDealCard2, resetPlayerHand, setPlayerScore2 } from './slices/playerSlice';
import { dealerReducer, setDealerScore, dealerDealCard, resetDealerHand } from './slices/dealerSlice';

const store = configureStore({
    reducer: {
        chips: chipsReducer,
        game: gameReducer,
        player: playerReducer,
        dealer: dealerReducer,
    },
 });


export { store, 
    addChips, removeChips, resetChips, doubleChips, winChips, splitChips, doubleChips2, winChips2, removeChips2,
    setBetStage, setDealStage, setEvaluateStage, setScore, setSplitActive, setTextOutcome, setDealerTurnComplete, setGameOver, setHandsLost, setHandsWon, setHand1Dealt, setTextOutcome2, setIsBlackjack, setHandsPushed,
    setPlayerScore, playerDealCard, playerSplit, playerDealCard2, resetPlayerHand, setPlayerScore2,
    setDealerScore, dealerDealCard, resetDealerHand,
    


};


