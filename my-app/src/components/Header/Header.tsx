import { useSelector } from "react-redux";
const Header = () => {
  const { playerScore, textOutcome } = useSelector((state: any) => state.game);
  const score = 0;
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <h2>
          Score: {playerScore}
        </h2>
       

      </div>
      <div>
        <h2 className="text-lg font-bold ">{textOutcome}</h2>
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

