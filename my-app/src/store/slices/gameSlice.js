import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        betStage: true,
        dealStage: false,
        evaluateStage: false,
        splitActive: false,
        playerScore: 0,
        textOutcome: '',
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
            state.playerScore = action.payload;
        },
        setSplitActive: (state, action) => {
            state.splitActive = action.payload;
        },
        setTextOutcome: (state, action) => {
            state.textOutcome = action.payload;
        },
        
    },
});

export const { setBetStage, setDealStage, setEvaluateStage, setScore, setSplitActive, setTextOutcome } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;