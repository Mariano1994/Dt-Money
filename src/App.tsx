import "./App.css";
import Header from "./components/Header";
import MainContentWrapper from "./components/MainContentWrapper";
import { TransactionsContextProvider } from "./contexts/TransactionsContext";

function App() {
  return (
    <div className="bg-gray-800 h-screen text-gray-100  antialiased font-app">
      <TransactionsContextProvider>
        <Header />
        <MainContentWrapper />
      </TransactionsContextProvider>
    </div>
  );
}

export default App;
