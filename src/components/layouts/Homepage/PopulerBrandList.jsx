import { useEffect, useState } from "react";
import { loadAllPopulerBrandAndCompanyData } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
const PopulerBrandList = ({ populer_brand_id, company_id }) => {
  const [brandData, setBrandData] = useState([]);
  console.log(populer_brand_id);
  const { data } = useQuery({
    queryKey: ["populer-brand-and-company"],
    queryFn: () => loadAllPopulerBrandAndCompanyData(),
  });

  useEffect(() => {
    if (data && populer_brand_id) {
      setBrandData(data.brand[+populer_brand_id]);
    } else if (data && company_id) {
      setBrandData(data.company[+company_id]);
    }
  }, [data, populer_brand_id, company_id]);

  // console.log(data);

  return (
    <>
      <div className="populer-brand-list flex items-center container overflow-auto mt-3 ">
        {brandData.map((brand) => (
          <div
            className="w-[150px] shadow shadow-lightgreen flex gap-2 justify-center items-center brand-card py-2 px-3 bg-white my-2 me-5 rounded-2xl hover:scale-95 flex-shrink-0 flex-grow-0"
            key={brand.id}
          >
            <img
              src={brand.logo}
              alt="populer-brand-logo"
              className="w-[50px] h-[50px] object-contain"
            />
            <p className="brand-title text-[12px] uppercase">{brand.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopulerBrandList;
