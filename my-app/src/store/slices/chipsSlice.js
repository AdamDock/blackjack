import { createSlice } from '@reduxjs/toolkit';

const chipsSlice = createSlice({
    name: 'chips',
    initialState: {
        pot: 0,
        stack: 5000
    },
    reducers: {
        addChips: (state, action) => {
            state.pot += action.payload;
            state.stack -= action.payload;
        },
        removeChips: (state) => {
            state.pot = 0;
        },
        resetChips: (state, action) => {
            state.stack += state.pot;
            state.pot = 0;
        },
        winChips: (state) => {
            state.stack += state.pot*2;
            state.pot = 0;
        },
        doubleChips: (state) => {
            state.stack -= state.pot;
            state.pot += state.pot;
        },

    },
});

export const { addChips, removeChips, resetChips, doubleChips, winChips } = chipsSlice.actions;
export const chipsReducer = chipsSlice.reducer;
