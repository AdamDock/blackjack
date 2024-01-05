import Card from "./Cards";
import { useDispatch, useSelector } from "react-redux";


const PlayerHand = ()=>{
    const dispatch = useDispatch();
    const {hand, hand2, score} = useSelector((state: any) => state.player);
    const {betStage} = useSelector((state: any) => state.game);
    const {splitActive} = useSelector((state: any) => state.game);
    console.log(hand);

    return (
        <div>
          <div>  
            <div>  
            {!betStage && !(hand2.length > 0) ?
  <>
  <div className="flex justify-center">
  {hand.map((card: any) => (
      <Card key={card.code} code={card.code} />
    ))}
    <h2>PlayerScore: {score} </h2>

  </div>
    
  </> : !betStage && splitActive ?
  <>
  <div>
  <div className="flex justify-between">
      <div className="flex">
        {hand.map((card: any) => (
          <Card key={card.code} code={card.code} />
        ))}
              

      </div>
      <div>
        <h2>PlayerScore: {score} </h2>
      </div>
      
      <div className="flex">
        {hand2.map((card: any) => (
          <Card key={card.code} code={card.code} />
        ))}

      </div>
      <div>
        <h2>PlayerScore: {score} </h2>
        </div>
    </div>

  </div>
    
  </> :
  <>
    <div className="flex justify-center">
      <Card code={"back"} />
      <Card code={"back"} />
      <h2>PlayerScore: {score} </h2>
    </div>
    
  </>
}

              
            </div>
            </div>

        </div>
    )
  }
  export default PlayerHand;