import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        betStage: true,
        dealStage: false,
        evaluateStage: false,
        splitActive: false,
        dealerTurnComplete: false,
        gameScore: 0,
        textOutcome: '',
        gameOver: false,
    },
    reducers: {
        setBetStage: (state, action) => {
            state.betStage = action.payload;
        },
        setDealStage: (state, action) => {
            state.dealStage = action.payload;
        },
        setEvaluateStage: (state, action) => {
            state.evaluateStage = action.payload;
        },
        setScore: (state, action) => {
            state.gameScore += action.payload;
            console.log("gamescore: ", state.gameScore);
        },
        setSplitActive: (state, action) => {
            state.splitActive = action.payload;
        },
        setTextOutcome: (state, action) => {
            state.textOutcome = action.payload;
        },
        setDealerTurnComplete: (state, action) => {
            state.dealerTurnComplete = action.payload;
        },
        setGameOver: (state, action) => {
            state.gameOver = action.payload;
        },  
        
    },
});

export const { setGameOver, setDealerTurnComplete, setBetStage, setDealStage, setEvaluateStage, setScore, setSplitActive, setTextOutcome } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;