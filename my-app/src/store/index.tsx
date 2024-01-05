import { configureStore } from '@reduxjs/toolkit';
import { chipsReducer, addChips, removeChips, resetChips, doubleChips, winChips } from './slices/chipsSlice';
import { gameReducer, setBetStage, setDealStage, setEvaluateStage, setScore, setSplitActive, setTextOutcome } from './slices/gameSlice';
import { playerReducer, setPlayerBet, setPlayerScore, playerDealCard, playerSplit, playerDealCard2 } from './slices/playerSlice';
import { dealerReducer, setDealerScore, dealerDealCard } from './slices/dealerSlice';

const store = configureStore({
    reducer: {
        chips: chipsReducer,
        game: gameReducer,
        player: playerReducer,
        dealer: dealerReducer,
    },
 });


export { store, 
    addChips, removeChips, resetChips, doubleChips, winChips,
    setBetStage, setDealStage, setEvaluateStage, setScore, setSplitActive, setTextOutcome,
    setPlayerBet, setPlayerScore, playerDealCard, playerSplit, playerDealCard2,
    setDealerScore, dealerDealCard,
    


};

