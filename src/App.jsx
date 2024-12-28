import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import Preloader from "./components/elements/Preloader";
import SplashScreen from "./components/elements/SplashScreen";
import { FilterButtonStateProvider } from "./context/CategoryWiseAllProduct/FilterBtnContext";
import { CompanyDataProvider } from "./context/CompanyData/CompanyDataContext";
import { SortStatusProvider } from "./context/SortingProductContext/SortProductContext";
import { useDispatch } from "react-redux";
import { setLogInState, setToken } from "./redux/features/Auth/AuthSlice";
import MobileScreenNav from "./components/layouts/Header/MobileScreenNav";

// Lazy load the component

const LazyHomepage = React.lazy(() => import("./pages/HomePage"));
const LazyCategoryViewAllPage = React.lazy(() =>
  import("./pages/CategoryWiseAllProduct")
);
const LazySingleProductPage = React.lazy(() =>
  import("./pages/SinglProductPage")
);
const LazyIffcoProductPage = React.lazy(() =>
  import("./pages/CompanyProductsPage")
);
const LazyIffcoDealerPage = React.lazy(() =>
  import("./pages/CompanyDealersPage")
);
const LazyWeatherForecastPage = React.lazy(() =>
  import("./pages/WeatherForecastPage")
);
const LazyWistListPage = React.lazy(() =>
  import("./pages/WishListPage")
);
const LazyUserProfilePage = React.lazy(() =>
  import("./pages/UserProfile")
);
const LazySellProductPage = React.lazy(() =>
  import("./pages/SellProductPage")
);

const App = () => {
  const baseUrl = "/krishi-vikas-udyog";
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const logInState = localStorage.getItem("isLoggedIn");
    const token = localStorage.getItem("token");
    if (logInState) {
      dispatch(setLogInState(logInState));
    }
    else if (token) {
      dispatch(setToken(token));
    }

  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [isloading, setLoading] = useState(true);

  return (
    <>
    <MobileScreenNav />
      <CompanyDataProvider>
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
              path={`${baseUrl}/:companyId`}
              element={
                <Suspense fallback={<Preloader />}>
                  <LazyIffcoProductPage key={location.key} />
                </Suspense>
              }
            />
            <Route
              path={`${baseUrl}/company-dealers/:id`}
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
            <Route
              path={`${baseUrl}/wishlist`}
              element={
                <Suspense fallback={<Preloader />}>
                  <LazyWistListPage key={location.key} />
                </Suspense>
              }
            />
            <Route
              path={`${baseUrl}/profile`}
              element={
                <Suspense fallback={<Preloader />}>
                  <LazyUserProfilePage key={location.key} />
                </Suspense>
              }
            />
            <Route
              path={`${baseUrl}/sell-product`}
              element={
                <Suspense fallback={<Preloader />}>
                  <LazySellProductPage key={location.key} />
                </Suspense>
              }
            />
          </Routes>
        </SortStatusProvider>
      </CompanyDataProvider>
    </>
  );
};

export default App;
