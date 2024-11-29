import "./App.css";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import MobileScreenNav from "./components/layouts/Header/MobileScreenNav";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <MobileScreenNav />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default App;
