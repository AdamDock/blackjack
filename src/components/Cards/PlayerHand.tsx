import Card from "./Cards";
import { useSelector } from "react-redux";

const PlayerHand = ()=>{
    const {hand, hand2, score, score2} = useSelector((state: any) => state.player);
    const {betStage} = useSelector((state: any) => state.game);
    const {splitActive} = useSelector((state: any) => state.game);

    const renderedHand = hand.map((card: any) => (
      <Card key={card.code} code={card.code} />
    ));
    const renderedHand2 = hand2.map((card: any) => (
      <Card key={card.code} code={card.code} />
    ));
    return ( 
      <div>  

        {!betStage && !(hand2.length > 0) ?
          <>
            <div className="flex justify-center">
              {renderedHand}
              <h2>PlayerScore: {score} </h2>
            </div>
          </> 
        : 
        !betStage && splitActive ?
          <>
            <div>
                <div className="flex justify-between">
                  {renderedHand}
                </div>
                <h2>Hand 1 Score: {score} </h2>
            </div>
            <div>
              <div className="flex justify-between">
                {renderedHand2}
              </div>
              <h2>Hand 2 Score: {score2} </h2>
            </div>
          </> 
        :
          <>
            <div className="flex justify-center">
              <Card code={"back"} />
              <Card code={"back"} />
              <h2>PlayerScore: {score} </h2>
            </div>
          </>
}
      </div>
    )
  }
  export default PlayerHand;