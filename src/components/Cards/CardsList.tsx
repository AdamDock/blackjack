import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

 const CardsList = ()=>{
    return (
        <>
          <div className="flex justify-center">
            <DealerHand />
          </div>
          <div className="flex justify-center">
            <PlayerHand />
          </div>
        </>
    )
}
export default CardsList;