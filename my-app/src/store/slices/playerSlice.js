import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        hand: [],
        hand2: [],
        score: 0,
        score2: 0,
        bet: 0,
    },
    reducers: {
        playerDealCard: (state, action) => {
            state.hand.push(action.payload);
            state.score += action.payload.value;
        },
        playerDealCard2: (state, action) => {
            state.hand2.push(action.payload);
            state.score2 += action.payload.value;
        },
        playerSplit: (state) => {
            state.hand2.push(state.hand.pop());
            state.score -= state.hand2[0].value;
        },
        setPlayerBet: (state, action) => {
            state.bet = action.payload;
        },
        
    },
});

export const { playerDealCard, playerDealCard2, setPlayerScore, setPlayerBet, playerSplit } = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
