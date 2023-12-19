// Actions.ts
import { Action } from 'redux';
import { SET_DECK, SHUFFLE_DECK, DEAL_CARD, SET_GAME_STATE, SET_PLAYER_STATE } from './ActionTypes';

interface SetDeckAction extends Action<typeof SET_DECK> {
  payload: any; // Change 'any' to the actual type of your deck
}

interface ShuffleDeckAction extends Action<typeof SHUFFLE_DECK> {}

interface DealCardAction extends Action<typeof DEAL_CARD> {}

interface SetGameStateAction extends Action<typeof SET_GAME_STATE> {
  payload: any; // Change 'any' to the actual type of your game state
}

interface SetPlayerStateAction extends Action<typeof SET_PLAYER_STATE> {
  payload: any; // Change 'any' to the actual type of your player state
}

export type PokerActionTypes =
  | SetDeckAction
  | ShuffleDeckAction
  | DealCardAction
  | SetGameStateAction
  | SetPlayerStateAction;

export const setDeck = (deck: any): SetDeckAction => ({
  type: SET_DECK,
  payload: deck,
});

export const shuffleDeck = (): ShuffleDeckAction => ({
  type: SHUFFLE_DECK,
});

export const dealCard = (): DealCardAction => ({
  type: DEAL_CARD,
});

export const setGameState = (gameState: any): SetGameStateAction => ({
  type: SET_GAME_STATE,
  payload: gameState,
});

export const setPlayerState = (playerState: any): SetPlayerStateAction => ({
  type: SET_PLAYER_STATE,
  payload: playerState,
});
// Add more action creators as needed
