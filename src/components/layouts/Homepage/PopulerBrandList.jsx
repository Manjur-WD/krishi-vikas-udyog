import { useEffect, useState } from "react";
import { loadAllPopulerBrandAndCompanyData } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
const PopulerBrandList = ({populer_brand_id,company_id}) => {
  const [brandData, setBrandData] = useState([]);
console.log(populer_brand_id);
  const { data } = useQuery({
    queryKey: ["populer-brand-and-company"],
    queryFn: () => loadAllPopulerBrandAndCompanyData(),
  });

  useEffect(() => {
    if (data) {
      setBrandData(data.brand[+populer_brand_id]);
    }
  }, [data]);

  console.log(data);

  return (
    <>
      <div className="populer-brand-list flex items-center container overflow-auto mt-3 ">
        {brandData.map((brand) => (
          <div className="brand-card bg-white my-2 me-5 flex items-center gap-2 p-5 rounded-2xl hover:scale-95" key={brand.id}>
            <img
              src={brand.logo}
              alt="populer-brand-logo"
              className="w-[50px] h-[50px] block object-contain"
            />
            <p className="brand-title">{brand.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopulerBrandList;
