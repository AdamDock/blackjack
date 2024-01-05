import { createSlice } from '@reduxjs/toolkit';

const deckSlice = createSlice({
    name: 'deck',
    initialState: {
        deck: [],
        score: 0,
        bet: 0,
    },
    reducers: {
        
    },
});

export const {  } = chipsSlice.actions;
export const chipsReducer = chipsSlice.reducer;