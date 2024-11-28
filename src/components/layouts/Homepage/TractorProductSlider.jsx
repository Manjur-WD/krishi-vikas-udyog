import CategoryWiseProductCarousel from "./CategoryWiseProductCarousel";
import { useQuery } from "@tanstack/react-query";
import { loadAllCategoryWiseData } from "../../../services/api";
import { useEffect, useState } from "react";


const tabs = ["rent", "old", "new"];

const TractorProductSLider = () => {
  const [tractorData, setTractorData] = useState({});

  const { data } = useQuery({
    queryKey: ["category-list"],
    queryFn: () => loadAllCategoryWiseData(),
  });

  useEffect(() => {
    if (data) {
      setTractorData(data.tractor); // Set tractor data from the API response
    }
  }, [data]);

  return (
    <>

      <CategoryWiseProductCarousel
        category_title="tractor"
        tabs={tabs}
        product_data={tractorData}
        populer_brand_id="1"
      />
    </>
  );
};

export default TractorProductSLider;
