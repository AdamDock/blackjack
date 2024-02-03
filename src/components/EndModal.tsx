import Modal from './ReusableForms/Modal'
import Button from './ReusableForms/Button'
import { useSelector } from 'react-redux';
interface StartModalProps {
    onClick: () => void;
    showModal: boolean;
}

const EndModal: React.FC<StartModalProps> = ({onClick, showModal}) => {
    const { gameScore, hands, handsWon, handsLost, handsPushed } = useSelector((state: any) => state.game);
    const actionBar = (
        <div>
          <Button onClick={()=>{window.location.reload()}} primary>
            Restart
          </Button>
        </div>
      );
      const modal = (
        <Modal onClose={onClick} actionBar={actionBar}>
          <div className="flex-row justify-center m-10">
            <div className="text-xl font-bold text-center justify-center">
              <h1>Another one bites the dust!!!</h1>
            <h1>Game Over!</h1>
            <h1>You have lost the game!!!</h1>
            </div>
            <div className="flex-col grow justify-center text-medium font-medium items-stretch text-center mt-10">
                <p className="text-2xl font-bold">Final Stats</p>
                <p className="m-5 text-xl">Final Score: {gameScore} </p>
                <p className="m-5 text-xl">Total Hands played: {hands} </p>
                <p className="m-5 text-xl">Total Hands won: {handsWon} </p>
                <p className="m-5 text-xl">Total Hands lost: {handsLost}</p>
                <p className="m-5 text-xl">Total Hands Pushed: {handsPushed}</p>
    
            </div>
          </div>
          
    
        </Modal>
      );

      return (
        <div>
                    {showModal && modal}

        </div>
       
)};



export default EndModal;
