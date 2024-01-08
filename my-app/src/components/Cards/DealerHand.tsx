import Card from "./Cards";
import { useDispatch, useSelector } from "react-redux";

const DealerHand = ()=>{
    const dispatch = useDispatch();
    const {hand, dealerScore} = useSelector((state: any) => state.dealer);
    const {betStage, dealStage } = useSelector((state: any) => state.game);
   
    return (
        <>
        <div>
        <div>  
            <div className="flex justify-center">
            {betStage?  <>
                
                <Card code={"back"}/>
                <Card code={"back"}/>
                <h1>DealerScore:</h1>
             </>
             : dealStage ?
             <>
                    <Card code={"back"}/>
                    <Card code={`${hand[1].code}`}/>

                    
                        
                <h1>DealerScore: {hand[1].value}</h1>
              </>: <>
                {hand.map((card: any) => (
                        <div key={card.code}>
                            <Card code={card.code} />
                            
                        </div>
                    ))}
                    <h1>DealerScore: {dealerScore}</h1>
                </>
             }
             
            </div>
            </div>
        </div>
        
            
        </>
    )
  }
  export default DealerHand;