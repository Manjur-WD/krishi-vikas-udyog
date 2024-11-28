import "./App.css";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default App;
