import Modal from './ReusableForms/Modal'
import Button from './ReusableForms/Button'

interface StartModalProps {
    onClick: () => void;
    showModal: boolean;
}

const StartModal: React.FC<StartModalProps> = ({onClick, showModal}) => {
    const actionBar2 = (
        <div>
          <Button onClick={onClick} primary>
            Play Now!
          </Button>
        </div>
      );
      const modal = (
        <Modal onClose={onClick} actionBar={actionBar2}>
        <div className="flex-row justify-center m-10">
          <div className="text-center text-2xl font-bold">
          <h1>Are you ready to play blackjack?</h1>
        <h1>Start with 5000 chips and try your luck in this casino game!</h1>

          </div>
        
        <div className="text-medium font-medium ml-10 mr-20 mt-7">
        <h1 className="text-lg font-bold">Steps</h1>
        <ol>
          <li className="p-3">
            1.) Place a bet by clicking on the chips. Click reset if you need to restart.
          </li>
          <li className="p-3">
            2.) Click Deal to be dealt a hand and the dealer will be dealt a hand as well.
          </li>
          <li className="text-balance p-3">
            3.) Click Hit to be dealt another card. You can hit as many times as you want until you bust or stand. You also have the option to double and split. 
            A double is when you have your initial hand and you double your bet and get one more card. A split is when you have two cards of the same rank and you split them into two hands and maintain your bet for both hands. 
          </li>
          <li className="p-3">
            4.) Click Stand to end your turn. The dealer will then play their hand. The dealer must hit if they have a score of 16 or less and must stand if they have a score of 17 or more.
          </li>
          <li className="p-3">
            5.) If you win, you will win your bet. If you lose, you will lose your bet. If you get blackjack, you will win 1.5x your bet. 
          </li>
          <li className="p-3">
            6.) If you run out of chips, you lose the game.
          </li>
        </ol>
        </div>
        </div>
    </Modal>

      )

      return (
        <div>
                    {showModal && modal}

        </div>
       
)};



export default StartModal;
