import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import Preloader from "./components/elements/Preloader";
import SplashScreen from "./components/elements/SplashScreen";
import { FilterButtonStateProvider } from "./context/CategoryWiseAllProduct/FilterBtnContext";
import { IffcoDataProvider } from "./context/IffcoData/IffcoDataContext";
import { SortStatusProvider } from "./context/SortingProductContext/SortProductContext";

// Lazy load the component

const LazyHomepage = React.lazy(() => import("./pages/HomePage"));
const LazyCategoryViewAllPage = React.lazy(() =>
  import("./pages/CategoryWiseAllProduct")
);
const LazySingleProductPage = React.lazy(() =>
  import("./pages/SinglProductPage")
);
const LazyIffcoProductPage = React.lazy(() =>
  import("./pages/IffcoProductsPage")
);
const LazyIffcoDealerPage = React.lazy(() =>
  import("./pages/IffcoDealersPage")
);
const LazyWeatherForecastPage = React.lazy(() =>
  import("./pages/WeatherForecastPage")
);

const App = () => {
  const baseUrl = "/krishi-vikas-udyog";
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [isloading, setLoading] = useState(true);

  return (
    <>
      <IffcoDataProvider>
        <SortStatusProvider>
          {isloading ? <SplashScreen setLoading={setLoading} /> : null}
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
            <Route
              path={`${baseUrl}/iffco-products`}
              element={
                <Suspense fallback={<Preloader />}>
                  <LazyIffcoProductPage key={location.key} />
                </Suspense>
              }
            />
            <Route
              path={`${baseUrl}/iffco-dealers`}
              element={
                <Suspense fallback={<Preloader />}>
                  <LazyIffcoDealerPage key={location.key} />
                </Suspense>
              }
            />
            <Route
              path={`${baseUrl}/weather-forecast`}
              element={
                <Suspense fallback={<Preloader />}>
                  <LazyWeatherForecastPage key={location.key} />
                </Suspense>
              }
            />
          </Routes>
        </SortStatusProvider>
      </IffcoDataProvider>
    </>
  );
};

export default App;
