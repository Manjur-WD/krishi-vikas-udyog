import axios from "axios";

// Base API configuration

const api = axios.create({
  // baseURL: "https://database.businessenquiry.co.in/api/v3",
  baseURL: "https://krishivikas.com/api/v2",
  // headers: {
  //   Authorization:
  //     // "Bearer 1280|wxPHniERi5WY1UEJ2kg0p26m1yj93JsDKAGwK7048ebf885b",
  //     "Bearer 31372|bdYSZ2QkoH91uh49LlmX2OXd26Kj0y6a9FB3u4C93f0911a9",
  // },
});

api.interceptors.request.use(
  (config) => {

    config.headers[
      "Authorization"
    ] = `Bearer 31402|ycaBoacBD1m2hb4cBPIpGBTphlQ6TCmQIiBe1E1V0834bbfd`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// const authState = useSelector((state)=> state.auth )
// CATEGORY API CALL

export const getCategoryList = async (languageId) => {
  const response = await api.post("/category-list", {
    language_id: languageId,
  });
  return response.data.result.response;
};

// HERO BANNER API

export const loadHeroSlides = async (langId) => {
  const response = await api.post("/home-banner", {
    lang_id: langId,
  });
  return response.data.result.response;
};

// HOMEPAGE CATEGORY WISE ALL DATAS

export const loadAllCategoryWiseData = async () => {
  try {
    const response = await api.get("/home"); // Make the API request
    return response.data.result.response; // Return the resolved data
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// HOMEPAGE POPULER BRAND AND COMPANY ALL DATAS

export const loadAllPopulerBrandAndCompanyData = async () => {
  try {
    const response = await api.get("/home-brand-and-company"); // Make the API request
    return response.data.result.response; // Return the resolved data
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// WEATHER REPORT DATA

export const getWeatherData = async (pincode, latitude, longitude, time) => {
  try {
    const response = await api.post("/weather-report", {
      pincode: pincode,
      latitude: latitude, //22.515310
      longitude: longitude, //88.348038
      time: time,
    });
    return response.data.result.response; // Return the resolved data
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// CATEGORY VIEW ALL PRODUCT

export const getCategoryWiseAllProduct = async (
  category_id,
  type,
  skip,
  take
) => {
  try {
    const response = await api.post("/category-view-all-data", {
      category_id: category_id,
      type: type,
      skip: skip,
      take: take,
    });
    return response.data.result.response; // Return the resolved data
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// CATEGORY FILTER ALL DATA

export const getCategoryWiseProduct = async (
  category_id,
  type,
  skip,
  take,
  price_sort,
  state_id,
  district_id,
  yom,
  brand_id,
  model_id,
  min_price,
  max_price
) => {
  try {
    const response = await api.post("/category-filter", {
      category_id: category_id,
      type: type,
      price_sort: price_sort,
      state_id: state_id,
      district_id: district_id,
      yom: yom,
      brand_id: brand_id,
      model_id: model_id,
      min_price: min_price,
      max_price: max_price,
      skip: skip,
      take: take,
    });
    return response.data.result.response; // Return the resolved data
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// SINGLE PRODUCT VIEW

export const getSingleProduct = async (category_id, id) => {
  try {
    const response = await api.post("/category-view-by-id", {
      category_id: category_id,
      id: id,
    });
    return response.data.result.response; // Return the resolved data
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// COMPANY PRODUCT

export const getCompanyProduct = async (company_id) => {
  try {
    const response = await api.post("company/products", {
      company_id: company_id,
    });
    return response.data.result.response;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// COMPANY DEALERS

export const getCompanyDealers = async (company_id) => {
  try {
    const response = await api.post("company/dealer", {
      company_id: company_id,
    });
    return response.data.result.response;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// GET BRAND LIST
export const getBrandList = async (category_id, type) => {
  try {
    const response = await api.post("/brand-data-show", {
      category_id: category_id,
      type: type,
    });
    return response.data.result.response;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// GET STATE WISE DISTRICT
export const getStateDistrictList = async (category_id, type) => {
  try {
    const response = await api.post("/state-wise-district-show", {
      category_id: category_id,
      type: type,
    });
    return response.data.result.response;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};
// GET YEAR OF PURCHASE LIST
export const getYearOfPurchaseList = async (category_id, type) => {
  try {
    const response = await api.post("/year-of-purchase-data", {
      category_id: category_id,
      type: type,
    });
    return response.data.result.response;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};
// GET STATE WISE DISTRICT
export const getMaxMinPrice = async (category_id, type) => {
  try {
    const response = await api.post("/price-max-min-data", {
      category_id: category_id,
      type: type,
    });
    return response.data.result.response;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// OTP SEND TO MOBILE NUMBER

export const sendOtp = async (mobile_no) => {
  try {
    const response = await api.post("/otp-send", {
      mobile: mobile_no,
    });
    return response.data.result.response;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// LOGIN WITH MOBILE NUMBER

export const getLogInDetails = async (mobile_no) => {
  try {
    const response = await api.post("/login", {
      mobile: mobile_no,
    });
    return response.data.result.response;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};


// WISHLIST APIS

export const getWishList = async () => {
  try {
    const response = await api.get("/wishlist");
    return response.data.result;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// ADD TO WISHLIST

export const addToWishList = async ( category_id,item_id) => {
  try {
    const response = await api.post("/wishlist-add",
      {
        category_id: category_id,
        item_id: item_id
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};

// REMOVE FROM WISHLIST

export const removeFromWishList = async ( category_id,item_id) => {
  try {
    const response = await api.post("/wishlist-delete", {
      category_id: category_id,
      item_id: item_id
    });
    return response.data.result;
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error; // Optionally throw or return a default value if you want to handle errors differently
  }
};
