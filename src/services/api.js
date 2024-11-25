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
