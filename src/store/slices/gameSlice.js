import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        betStage: true,
        dealStage: false,
        evaluateStage: false,
        splitActive: false,
        hand1dealt: false,
        dealerTurnComplete: false,
        gameScore: 0,
        textOutcome: '',
        textOutcome2: '',
        gameOver: false,
        hands: 0,
        handsWon: 0,
        handsLost: 0,
        handsPushed: 0,
        isBlackjack: false,
    },
    reducers: {
        setBetStage: (state, action) => {
            state.betStage = action.payload;
        },
        setIsBlackjack: (state, action) => {
            state.isBlackjack = action.payload;
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
            state.hand2deal = action.payload;
        },
        setTextOutcome: (state, action) => {
            if(action.payload[0] === "hand1"){
                state.textOutcome = action.payload[1];
            } else if(action.payload[0] === "hand2"){
                state.textOutcome2 = action.payload[1];
            }
            state.textOutcome = action.payload;
        },
        setDealerTurnComplete: (state, action) => {
            state.dealerTurnComplete = action.payload;
        },
        setGameOver: (state, action) => {
            state.gameOver = action.payload;
        },  
        setHandsWon: (state) => {
            state.handsWon++;
            state.hands++;
        },
        setHandsLost: (state) => {
            state.handsLost++;
            state.hands++;
        },
        setHandsPushed: (state) => {
            state.handsPushed++;
            state.hands++;
        },
        setHand1Dealt: (state, action) => {
            state.hand1dealt = action.payload;
        },
        setTextOutcome2: (state, action) => {
            state.textOutcome2 = action.payload;
        },
    },
});

export const { setHandsPushed, setIsBlackjack, setTextOutcome2, setHand1Dealt, setHandsLost, setHandsWon, setGameOver, setDealerTurnComplete, setBetStage, setDealStage, setEvaluateStage, setScore, setSplitActive, setTextOutcome } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;