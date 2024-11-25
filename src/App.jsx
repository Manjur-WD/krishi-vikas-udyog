import "./App.css";
import Header from "./components/layouts/Header/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
    </>
  );
};

export default App;
