import Searchbar from "./Searchbar";
import SummaryTransations from "./SummaryTransations";
import TransactionsTable from "./TransactionsTable";

const MainContentWrapper = () => {
  return (
    <div className="w-[100%] max-w-[1120px] mx-auto px-6">
      <SummaryTransations />
      <Searchbar />
      <TransactionsTable />
    </div>
  );
};

export default MainContentWrapper;
