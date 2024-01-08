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
    const { gameOver, gameScore } = useSelector((state: any) => state.game);
    const { pot, stack } = useSelector((state: any) => state.chips);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    useEffect(() => {
        console.log("useEffect triggered");
        console.log("pot:", pot);
        console.log("stack:", stack);
        console.log("gameOver:", gameOver);
      
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
        <div>
        <h1>Are you ready to play blackjack?</h1>
        <h1>Start with 5000 chips and try your luck in this casino game!</h1>

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
        <div>
        <h1>You have lost the game</h1>
        </div>
        <div className="flex-col justify-center">
            <p>Final Stats</p>
            <p>Final Score: {gameScore} </p>
            <p>Total Hands played: </p>
            <p>Total Hands won: </p>
            <p>Total Hands lost: </p>

        </div>
      

    </Modal>
  );

    return (<div className="flex flex-col border-2 border-white h-screen ">
        
        {showModal && modal}
        {showModal2 && modal2}

        <Header />
        <CardsList />
        <ChoiceList />
        <ChipsList />

        <div>

        </div>
    </div>);
}
export default Table;