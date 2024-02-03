import Header from "./Header/Header";
import CardsList from "./Cards/CardsList";
import ChipsList from "./Chips/ChipsList";
import ChoiceList from "./Choices/ChoiceList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./ReusableForms/Modal";
import Button from "./ReusableForms/Button";

/*
import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {*/
  
const Table = () => {
    const { gameOver, gameScore, hands, handsWon, handsLost, handsPushed } = useSelector((state: any) => state.game);
    const { pot, stack } = useSelector((state: any) => state.chips);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    useEffect(() => {
        if (pot === 0 && stack === 0) {
            setTimeout(() => {
                setShowModal(true);
            }, 3000);
        }
      }, [gameOver]);
      useEffect(() => {
        setShowModal2(true);
      },[]);

 

  const handleClose = () => {
    setShowModal(false);
  };
  const handleClose2 = () => {
    setShowModal2(false);
  }
  const actionBar2 = (
    <div>
      <Button onClick={handleClose2} primary>
        Play Now!
      </Button>
    </div>
  );
  const modal2 = (
    <Modal onClose={handleClose2} actionBar={actionBar2}>
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
  );

  const actionBar = (
    <div>
      <Button onClick={()=>{window.location.reload()}} primary>
        Restart
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
        <div className="text-xl font-bold">
          <h1>Another one bites the dust!!!</h1>
        <h1>Game Over!</h1>
        <h1>You have lost the game!!!</h1>
        </div>
        <div className="flex-col justify-center text-medium font-medium">
            <p>Final Stats</p>
            <p>Final Score: {gameScore} </p>
            <p>Total Hands played: {hands} </p>
            <p>Total Hands won: {handsWon} </p>
            <p>Total Hands lost: {handsLost}</p>
            <p>Total Hands Pushed: {handsPushed}</p>

        </div>
      

    </Modal>
  );

    return (<div className="flex flex-col border-2 border-white">
        
        {showModal && modal}
        {showModal2 && modal2}

        <Header/>
        <CardsList />
        <ChoiceList />
        <ChipsList />

        <div>

        </div>
    </div>);
}
export default Table;