import React, {useState, useEffect} from "react";
import styles from '../index.module.css';
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

  

 const CardsList = ()=>{

    return (
        <>
        <div className="flex flex-col">
          <div>
            <DealerHand />
          </div>
          <div>
            <PlayerHand />
          </div>
        </div>
        </>
    )
}
export default CardsList;