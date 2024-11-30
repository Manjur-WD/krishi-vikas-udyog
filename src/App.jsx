import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import MobileScreenNav from "./components/layouts/Header/MobileScreenNav";
import HomePage from "./pages/HomePage";
import CategoryWiseAllProduct from "./pages/CategoryWiseAllProduct";

const App = () => {

  const baseUrl = "/krishi-vikas-udyog";
  return (
    <>
      <Header />
      <MobileScreenNav />
      <main>
        <Routes>
          <Route path={`${baseUrl}`} element={<HomePage />} />
          <Route path={`${baseUrl}/:category/:type`} element={<CategoryWiseAllProduct />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
