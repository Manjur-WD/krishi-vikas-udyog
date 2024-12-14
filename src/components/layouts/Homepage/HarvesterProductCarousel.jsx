import CategoryWiseProductCarousel from "./CategoryWiseProductCarousel";
import { useQuery } from "@tanstack/react-query";
import { loadAllCategoryWiseData } from "../../../services/api";
import { useEffect, useState } from "react";

const tabs = ["rent", "old", "new"];

const HarvesterProductCarousel = () => {
  const [harvestorData, setharvestorData] = useState({});

  const { data } = useQuery({
    queryKey: ["category-list"],
    queryFn: () => loadAllCategoryWiseData(),
  });

  useEffect(() => {
    if (data) {
      setharvestorData(data.harvester); // Set tractor data from the API response
    }
  }, [data]);

  return (
    <>
      <CategoryWiseProductCarousel
        category_title="harvester"
        tabs={tabs}
        product_data={harvestorData}
        populer_brand_id="4"
        view_all_category="harvester"
      />
    </>
  );
};

export default HarvesterProductCarousel;

