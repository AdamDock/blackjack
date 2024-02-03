import React from 'react';
import Chip from "./Chip";
import { useDispatch, useSelector } from "react-redux";
import { addChips, resetChips } from "../../store/index";

const chips = [
  {amount: 1, color: "Red"},
  {amount: 5, color: "Orange"},
  {amount: 10, color: "Yellow"},
  {amount: 25, color: "Blue"},
  {amount: 50, color: "Pink"},
  {amount: 100, color: "slategray"},
  {amount: 500, color: "aqua"},
  {amount: 1000, color: "Silver"}
];

const ChipsList = () => {
  const dispatch = useDispatch();
  const { splitActive } = useSelector((state: any) => state.game);
  const { bet } = useSelector((state: any) => state.player);
  const {stack, pot, pot2}  = useSelector((state: any) => state.chips);

const handleResetClick = () => {
    dispatch(resetChips("hand1"));
  }
  
  const handleChipClick = (amount: number) => {
    dispatch({ type: "chips/addChips", payload: amount });
  }
  const renderChips = () => {
    return chips.map((chip, index) => {
      return (
        <div key={index}>
          <Chip
            amount={chip.amount}
            color={chip.color}
            onClick={handleChipClick}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex">
        <button onClick={handleResetClick}>
          <h4 className='m-5 font-bold'>Reset</h4>
        </button>
        {renderChips()}
        <Chip onClick={handleChipClick} amount={stack} color={"Gold"} />
        <div className='flex flex-col'>
          <div className='mt-10 text-xl font-bold'>
            {!splitActive?<h2>Pot: {pot}</h2>:<><h2>Pot: {pot}</h2><h2>Pot2: {pot2}</h2></>}
          </div>
          <div className="m-10 text-xl font-bold">
            <h2>Stack: {stack}</h2>
          </div>
         
        </div>
        
      </div>
    </>
  )
}
export default ChipsList;

