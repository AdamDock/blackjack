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
            <div className="flex justify-center items-center">
              {renderedHand}
              <h2 className="ml-10 text-xl font-bold">PlayerScore: {score} </h2>
            </div>
          </> 
        : 
        !betStage && splitActive ?
          <>
          <div className="flex">
            <div className="flex">
                <div className="flex items-center justify-center">
                  {renderedHand}
                <h2 className="m-10 text-xl font-bold">Hand 1 Score: {score} </h2>
                </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                {renderedHand2}
              
              <h2 className="m-10 text-xl font-bold">Hand 2 Score: {score2} </h2>
              </div>
            </div>
          </div>
          </> 
        :
          <>
            <div className="flex justify-center items-center">
              <Card code={"back"} />
              <Card code={"back"} />
              <h2 className="ml-10 text-xl font-bold">PlayerScore: {score===0? <></>:score} </h2>
            </div>
          </>
}
      </div>
    )
  }
  export default PlayerHand;