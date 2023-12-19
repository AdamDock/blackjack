// Reducer.ts
import Deck from '../Actions/Deck'; // Adjust the path based on your project structure

import { SET_DECK, SHUFFLE_DECK, DEAL_CARD, SET_GAME_STATE, SET_PLAYER_STATE } from '../Actions/ActionTypes';

interface PokerState {
  deck: any[]; // Change 'any' to the actual type of your deck
  gameState: any; // Change 'any' to the actual type of your game state
  playerState: any; // Change 'any' to the actual type of your player state
  // Add more state properties as needed
}

interface PokerAction {
  type: string;
  payload?: any;
}

const initializeDeck = (): any[] => {
  // Logic to create and return a new deck
  // Example: Assuming Deck is a class with an initializeDeck method
  const deck = new Deck();
  deck.initializeDeck();
  return deck.cards;
};

const initialState: PokerState = {
  deck: initializeDeck(),
  gameState: { dealerScore: 0, /* other game state properties */ },
  playerState: { playerScore: 0, /* other player state properties */ },
  // Add more initial state properties as needed
};

const shuffleDeck = (deck: any[]): any[] => {
  // Fisher-Yates shuffle algorithm
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
};

const dealCard = (deck: any[]): { deck: any[]; card: any } => {
  // Logic to deal a card from the deck
  const dealtCard = deck.pop();
  return { deck, card: dealtCard };
};

const pokerReducer = (state: PokerState = initialState, action: PokerAction): PokerState => {
  switch (action.type) {
    case SET_DECK:
      return { ...state, deck: initializeDeck() };
    case SHUFFLE_DECK:
      const shuffledDeck = shuffleDeck(state.deck);
      return { ...state, deck: shuffledDeck };
    case DEAL_CARD:
      const { deck: dealtDeck, card } = dealCard(state.deck);
      // You might want to update player and game state based on the dealt card
      return { ...state, deck: dealtDeck };
    case SET_GAME_STATE:
      return { ...state, gameState: action.payload };
    case SET_PLAYER_STATE:
      return { ...state, playerState: action.payload };
    // Add more cases as needed
    default:
      return state;
  }
};

export default pokerReducer;
