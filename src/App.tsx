import "./App.css";
import Header from "./components/Header";
import MainContentWrapper from "./components/MainContentWrapper";

function App() {
  return (
    <div className="bg-gray-800 h-screen text-gray-100  antialiased font-app">
      <Header />
      <MainContentWrapper />
    </div>
  );
}

export default App;
