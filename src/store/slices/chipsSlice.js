import { createSlice } from '@reduxjs/toolkit';

const chipsSlice = createSlice({
    name: 'chips',
    initialState: {
        pot: 0,
        pot2: 0,
        stack: 5000
    },
    reducers: {
        addChips: (state, action) => {
            state.pot += action.payload;
            state.stack -= action.payload;
        },
        removeChips: (state, action) => {
            if(action.payload === "hand1"){
                state.pot =0;
            } else if(action.payload === "hand2"){
                state.pot2 =0;
            }
        },
       
        resetChips: (state, action) => {
            if(action.payload === "hand1"){
                state.stack += state.pot;
                state.pot = 0;
            } else if(action.payload === "hand2"){
                state.stack += state.pot2;
                state.pot2 = 0;
            }
        },
        winChips: (state, action) => {
            if(action.payload === "hand1"){
                state.stack += state.pot*2;
                state.pot = 0;
            } else if(action.payload === "hand2"){
                state.stack += state.pot2*2;
                state.pot2 = 0;
            } else if(action.payload === 'hand1blackjack'){
                state.stack += state.pot*2.5;
                state.pot = 0;
            } else if(action.payload === 'hand2blackjack'){
                state.stack += state.pot2*2.5;
                state.pot2 = 0;
            }
        },
        doubleChips: (state) => {
            state.stack -= state.pot;
            state.pot += state.pot;
        },
        doubleChips2: (state) => {
            state.stack -= state.pot2;
            state.pot2 += state.pot2;
        },
        splitChips: (state) => {
            state.pot2 = state.pot;
            state.stack -= state.pot;
        },

    },
});

export const { removeChips2, winChips2, doubleChips2, splitChips, addChips, removeChips, resetChips, doubleChips, winChips } = chipsSlice.actions;
export const chipsReducer = chipsSlice.reducer;
