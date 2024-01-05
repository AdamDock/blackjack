import Header from "./Header/Header";
import CardsList from "./Cards/CardsList";
import ChipsList from "./Chips/ChipsList";
import ChoiceList from "./Choices/ChoiceList";
const Table = () => {
    return (<div className="flex flex-col border-2 border-white h-screen ">
        <Header />
        <CardsList />
        <ChoiceList />
        <ChipsList />

        <div>

        </div>
    </div>);
}
export default Table;