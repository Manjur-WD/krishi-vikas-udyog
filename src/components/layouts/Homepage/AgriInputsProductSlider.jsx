import CategoryWiseProductCarousel from "./CategoryWiseProductCarousel";
import { useQuery } from "@tanstack/react-query";
import { loadAllCategoryWiseData } from "../../../services/api";
import { useEffect, useState } from "react";

const tabs = ["seeds", "pesticides", "fertilizers"];

const AgriInputsProductSlider = () => {
  const [agriInputsData, setAgriInputsData] = useState({});

  const { data } = useQuery({
    queryKey: ["category-list"],
    queryFn: () => loadAllCategoryWiseData(),
  });

  useEffect(() => {
    if (data) {
      setAgriInputsData(data.agri_inputs); // Set tractor data from the API response
    }
  }, [data]);

  return (
    <>
      <CategoryWiseProductCarousel
        category_title="agri inputs"
        tabs={tabs}
        product_data={agriInputsData}
        populer_brand_id="1"
        company_id="1"
      />
    </>
  );
};

export default AgriInputsProductSlider;

