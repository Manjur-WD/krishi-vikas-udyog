import axios from "axios";

// Base API configuration

const api = axios.create({
  baseURL: "https://krishivikas.com/api/v2",
  headers: {
    Authorization:
      "Bearer 30609|IxX5Do8U2HvxfCTAhJimtbTXzExMHb97QejGeMjXe885fa10",
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
    const response = await api.get("/home2");  // Make the API request
    return response.data.result.response;      // Return the resolved data
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error;  // Optionally throw or return a default value if you want to handle errors differently
  }
};

// HOMEPAGE POPULER BRAND AND COMPANY ALL DATAS

export const loadAllPopulerBrandAndCompanyData = async () => {
  try {
    const response = await api.get("/home-brand-and-company");  // Make the API request
    return response.data.result.response;      // Return the resolved data
  } catch (error) {
    console.error("Error loading category data:", error);
    throw error;  // Optionally throw or return a default value if you want to handle errors differently
  }
};