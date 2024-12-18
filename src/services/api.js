import axios from "axios";

// Base API configuration

const api = axios.create({
  baseURL: "https://krishivikas.com/api/v2",
  headers: {
    Authorization:
      "Bearer 31084|pgDZr5S9qDoBEVPzxlAJOlONBcoo0TnvKS7xRZo5f54bba35",
  },
});

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
    const response = await api.get("/home2"); // Make the API request
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

// CATEGORY VIEW ALL DATA

export const getCategoryWiseProduct = async (category_id, type, skip, take) => {
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
