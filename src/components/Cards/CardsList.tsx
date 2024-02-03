import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

 const CardsList = ()=>{
    return (
        <>
        <div className="items-center mb-20">
          <div className="flex justify-center m-5">
            <DealerHand />
          </div>
          <div className="flex justify-center  m-5">
            <PlayerHand />
          </div>
        </div>
        </>
    )
}
export default CardsList;