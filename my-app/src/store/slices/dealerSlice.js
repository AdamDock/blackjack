import { createSlice } from '@reduxjs/toolkit';

const dealerSlice = createSlice({
    name: 'chips',
    initialState: {
        hand: [],
        dealerScore: 0,
    },
    reducers: {
        dealerDealCard: (state, action) => {
            state.hand.push(action.payload);
            state.dealerScore += action.payload.value;
        },
        
    },
});

export const { dealerDealCard, setDealerScore } = dealerSlice.actions;
export const dealerReducer = dealerSlice.reducer;