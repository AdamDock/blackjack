import Card from "./Cards";
import { useSelector } from "react-redux";
const DealerHand = ()=>{
    const {hand, dealerScore} = useSelector((state: any) => state.dealer);
    const {betStage, dealStage, isBlackjack } = useSelector((state: any) => state.game);
    const renderedHand = hand.map((card: any) => (
        <div key={card.code}>
            <Card code={card.code} />
        </div>
    ));
   
    return (
        <>
            <div className="flex justify-center">
                {betStage? 

                    <>
                        <Card code={"back"}/>
                        <Card code={"back"}/>
                        <h1>DealerScore:</h1>
                    </>

                : 

                dealStage && !isBlackjack?

                    <>
                        <Card code={"back"}/>
                        <Card code={`${hand[1].code}`}/>
                        <h1>DealerScore: {hand[1].value}</h1>
                    </>

                :
                
                    <>
                        {renderedHand}
                        <h1>DealerScore: {dealerScore}</h1>
                    </>
             }
            </div>
        </>
    )
  }
  export default DealerHand;