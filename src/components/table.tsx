import Header from "./Header/Header";
import CardsList from "./Cards/CardsList";
import ChipsList from "./Chips/ChipsList";
import ChoiceList from "./Choices/ChoiceList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StartModal from "./StartModal";
import EndModal from "./EndModal";

const Table = () => {
    const { gameOver } = useSelector((state: any) => state.game);
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

    return (<div className="flex flex-col border-2 border-white">
      <StartModal onClick={handleClose2} showModal={showModal2}/>
      <EndModal onClick={handleClose} showModal={showModal}/>
        
        <Header/>
        <CardsList />
        <ChoiceList />
        <ChipsList />

    </div>);
}
export default Table;