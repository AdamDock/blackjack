import { useSelector } from "react-redux";
const Header = () => {
  const { gameScore, textOutcome, textOutcome2, splitActive } = useSelector((state: any) => state.game);
  const score = 0;
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <h2>
          Score: {gameScore}
        </h2>
       

      </div>
      <div>
        <h2 className="text-lg font-bold ">Hand 1 result: {textOutcome}</h2>
        {splitActive?<h2 className="text-lg font-bold ">Hand 2 result: {textOutcome2}</h2>:<></>}
      </div>
      <div>
        <button onClick={()=> window.location.reload()}>
          <h4>Restart</h4>
        </button>
      </div>
    </div>
  );
}
export default Header;

