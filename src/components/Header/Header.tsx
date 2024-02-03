import { useSelector } from "react-redux";

const Header = () => {
  const { gameScore, textOutcome, textOutcome2, splitActive } = useSelector((state: any) => state.game);
 
  return (
      <div className="flex flex-row justify-evenly m-10">
        <h2 className="text-xl font-bold m-4">
          Score: {gameScore} 
        </h2>
      <div className="flex grow items-center justify-around">
        <div className="flex justify-evenly">
          <h2 className="text-2xl font-bold m-4 ">Hand 1 result:{textOutcome}</h2>
        </div>
        {splitActive?<h2 className="text-2xl font-bold m-4 ">Hand 2 result: {textOutcome2}</h2>:<></>}
      </div>
      <div>
        <button onClick={()=> window.location.reload()}>
          <h4 className="text-xl font-bold m-4">Restart</h4>
        </button>
      </div>
    </div>
  );
}
export default Header;

