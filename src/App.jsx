import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import MobileScreenNav from "./components/layouts/Header/MobileScreenNav";
import React, { Suspense, useEffect } from "react";
import Preloader from "./components/elements/Preloader";
import { FilterButtonStateProvider } from "./context/CategoryWiseAllProduct/FilterBtnContext";

// Lazy load the component

const LazyHomepage = React.lazy(() => import("./pages/HomePage"));
const LazyCategoryViewAllPage = React.lazy(() =>
  import("./pages/CategoryWiseAllProduct")
);
const LazySingleProductPage = React.lazy(() =>
  import("./pages/SinglProductPage")
);

const App = () => {
  const baseUrl = "/krishi-vikas-udyog";
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route
          path={`${baseUrl}`}
          element={
            <Suspense fallback={<Preloader />}>
              <LazyHomepage />
            </Suspense>
          }
        />
        <Route
          path={`${baseUrl}/:category/:type`}
          element={
            <Suspense fallback={<Preloader />}>
              <FilterButtonStateProvider>
                <LazyCategoryViewAllPage key={location.key} />
              </FilterButtonStateProvider>
            </Suspense>
          }
        />
        <Route
          path={`${baseUrl}/:category/:type/:id`}
          element={
            <Suspense fallback={<Preloader />}>
                <LazySingleProductPage key={location.key} />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
