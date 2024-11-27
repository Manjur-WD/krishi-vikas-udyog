import CategoryWiseProductCarousel from "./CategoryWiseProductCarousel";
import { useQuery } from "@tanstack/react-query";
import { loadAllCategoryWiseData } from "../../../services/api";
import { useEffect, useState } from "react";

const tabs = ["rent", "old", "new"];

const ImplementsProductsSlider = () => {
  const [implemetsData, setImplementsData] = useState({});

  const { data } = useQuery({
    queryKey: ["category-list"],
    queryFn: () => loadAllCategoryWiseData(),
  });

  useEffect(() => {
    if (data) {
      setImplementsData(data.implements); // Set tractor data from the API response
    }
  }, [data]);

  return (
    <>
      <CategoryWiseProductCarousel
        category_title="implements"
        tabs={tabs}
        product_data={implemetsData}
        populer_brand_id="5"
        company_id="5"
      />
    </>
  );
};

export default ImplementsProductsSlider;

