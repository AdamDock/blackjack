import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        hand: [],
        hand2: [],
        score: 0,
        score2: 0,
    },
    reducers: {
        playerDealCard: (state, action) => {
            state.hand = [...state.hand, action.payload];
           console.log("player hand: ", state.hand);
        },
        setPlayerScore: (state, action) => {
            state.score = action.payload;
            console.log("player score: ", state.score);
        },
        setPlayerScore2: (state, action) => {
            state.score2 = action.payload;
            console.log("player score2: ", state.score2);
        },
        playerDealCard2: (state, action) => {
            state.hand2 = [...state.hand2, action.payload];
        },
        playerSplit: (state) => {
            state.hand2.push(state.hand.pop());
            state.score -= state.hand2[0].value;
            state.score2 += state.hand2[0].value;
            state.bet2 = state.bet;
        },
        resetPlayerHand: (state) => {   
            state.hand = [];
            state.hand2 = [];
            state.score = 0;
            state.score2 = 0;
        }
        
    },
});

export const { setPlayerScore2, resetPlayerHand, playerDealCard, playerDealCard2, setPlayerScore, playerSplit } = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
