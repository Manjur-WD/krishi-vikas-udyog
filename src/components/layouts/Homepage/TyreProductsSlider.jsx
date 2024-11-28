import CategoryWiseProductCarousel from "./CategoryWiseProductCarousel";
import { useQuery } from "@tanstack/react-query";
import { loadAllCategoryWiseData } from "../../../services/api";
import { useEffect, useState } from "react";

const tabs = ["old", "new"];

const TyreProductsSlider = () => {
  const [tyresData, setTyresData] = useState({});

  const { data } = useQuery({
    queryKey: ["category-list"],
    queryFn: () => loadAllCategoryWiseData(),
  });


  

  useEffect(() => {
    if (data) {
      setTyresData(data.tyre); // Set tractor data from the API response
    }
  }, [data]);

  return (
    <>
      <CategoryWiseProductCarousel
        category_title="tyres"
        tabs={tabs}
        product_data={tyresData}
        populer_brand_id="7"
      />
    </>
  );
};

export default TyreProductsSlider;

