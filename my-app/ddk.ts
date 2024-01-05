// PokerGame.tsx
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDeck, shuffleDeck, dealCard, setGameState, setPlayerState } from './Actions';
import { PokerState } from './Reducer'; // Import the PokerState type

interface PokerGameProps {
  deck: any[]; // Change 'any' to the actual type of your deck
  gameState: any; // Change 'any' to the actual type of your game state
  playerState: any; // Change 'any' to the actual type of your player state
  setDeck: (deck: any) => void;
  shuffleDeck: () => void;
  dealCard: () => void;
  setGameState: (gameState: any) => void;
  setPlayerState: (playerState: any) => void;
  // Add more prop types as needed
}

const PokerGame: React.FC<PokerGameProps> = (props) => {
  useEffect(() => {
    // Dispatch actions to set up the initial state
    props.setDeck(/* initial deck state */);
    props.shuffleDeck();
    props.setGameState(/* initial game state */);
    props.setPlayerState(/* initial player state */);
  }, []);

  const handleDealCard = () => {
    // Dispatch action to deal a card
    props.dealCard();
  };

  return (
    <>
      <div>
        {/* Render component using the Redux state */}
        <h2>Dealer Score: {props.gameState.dealerScore}</h2>
        <h2>Your Score: {props.playerState.playerScore}</h2>

        {/* Render cards using the Redux state */}
        {props.deck.map((card, index) => (
          <img key={index} src={card.getImageUrl()} alt={card.toString()} height="200" width="150" />
        )}

        <button onClick={handleDealCard}>Deal</button>
      </div>
    </>
  );
};

const mapStateToProps = (state: PokerState) => ({
  deck: state.deck,
  gameState: state.gameState,
  playerState: state.playerState,
  // Add more state properties as needed
});

const mapDispatchToProps = {
  setDeck,
  shuffleDeck,
  dealCard,
  setGameState,
  setPlayerState,
  // Add more action creators as needed
};

export default connect(mapStateToProps, mapDispatchToProps)(PokerGame);
