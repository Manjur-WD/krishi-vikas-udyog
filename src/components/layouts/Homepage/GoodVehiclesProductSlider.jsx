import { useEffect, useState } from "react";
import { loadAllCategoryWiseData } from "../../../services/api";
import CategoryWiseProductCarousel from "./CategoryWiseProductCarousel";
import { useQuery } from "@tanstack/react-query";

const tabs = ["rent", "old", "new"];

const GoodVehiclesProductSlider = () => {
  const [goodsVehicleData, setGoodVenhicleData] = useState({});

  const { data } = useQuery({
    queryKey: ["category-list"],
    queryFn: () => loadAllCategoryWiseData(),
  });

  useEffect(() => {
    if (data) {
      setGoodVenhicleData(data.good_vehicles);
    } 
  }, [data]);

  return (
    <>
      <CategoryWiseProductCarousel
        category_title="Goods Vehicle"
        tabs={tabs}
        product_data={goodsVehicleData}
        populer_brand_id="3"
      />
    </>
  );
};

export default GoodVehiclesProductSlider;
