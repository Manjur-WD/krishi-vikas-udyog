import BreadCrumb from "../components/elements/BreadCrumb";
import { useQuery } from "@tanstack/react-query";
import { getCategoryWiseProduct } from "../services/api";
import { useState } from "react";

const CategoryWiseAllProduct = () => {
  const [categoryId, setCategoryId] = useState(1);
  const [type, setType] = useState("");
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(12);
  const { data : allProducts, isLoading, isError, error } = useQuery({
    queryKey: ["category-wise-all-product", categoryId, type, skip, take], // Add the languageId to the queryKey for better cache management
    queryFn: () => getCategoryWiseProduct(categoryId, "", skip, take), // Pass a function that calls getCategoryList
  });

  // console.log(allProducts);

  return (
    <>
      <BreadCrumb />
      
    </>
  );
};

export default CategoryWiseAllProduct;
