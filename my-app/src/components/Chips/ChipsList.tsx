import React from 'react';
import Chip from "./Chip";
import { useDispatch, useSelector } from "react-redux";
import { addChips, resetChips } from "../../store/index";

const ChipsList = () => {
  const dispatch = useDispatch();
  const { bet } = useSelector((state: any) => state.player);
  const {stack, pot}  = useSelector((state: any) => state.chips);

const handleResetClick = () => {
    dispatch(resetChips(0));
  }
  
  const handleChipClick = (amount: number) => {
    dispatch({ type: "chips/addChips", payload: amount });
  }

  return (
    <>
      <div className="flex">
        <button onClick={handleResetClick}>
          <h4>Reset</h4>
        </button>
        <Chip onClick={handleChipClick} amount={1} color={"Red"} />
        <Chip onClick={handleChipClick} amount={5} color={"green"} />
        <Chip onClick={handleChipClick} amount={10} color={"Yellow"} />
        <Chip onClick={handleChipClick} amount={25} color={"blue"} />
        <Chip onClick={handleChipClick} amount={50} color={"pink"} />
        <Chip onClick={handleChipClick} amount={100} color={"Purple"} />
        <Chip onClick={handleChipClick} amount={500} color={"white"} />
        <Chip onClick={handleChipClick} amount={1000} color={"black"} />
        <Chip onClick={handleChipClick} amount={stack} color={"yellow"} />
        <div className='flex flex-col'>
          <div>
            <h2>Pot: {pot}</h2>
          </div>
          <div>
            <h2>Stack: {stack}</h2>
          </div>
         
        </div>
        
      </div>
    </>
  )
}

export default ChipsList;
