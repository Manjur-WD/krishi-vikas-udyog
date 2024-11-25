import { BsGridFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CategorySection = () => {
  const getCategoryList = async () => {
    const response = await axios.post(
      "https://krishivikas.com/api/v2/category-list",
      {
        language_id: 1,
      },
      {
        headers: {
          Authorization:
            "Bearer 30609|IxX5Do8U2HvxfCTAhJimtbTXzExMHb97QejGeMjXe885fa10",
        },
      }
    );
    return response.data.result.response; // Ensure this is an array
  };

  // Use the useQuery hook to fetch data
  const {
    data: categoryList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category-list"],
    queryFn: getCategoryList,
  });

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="category-section w-[95%] mx-auto py-10 px-10 bg-white mt-5 rounded-xl">
      <div className="container">
        <h2 className="text-3xl text-center mb-10">
          <BsGridFill className="inline pb-1 me-1" />
          Top Categories
        </h2>
        <div className="categories grid grid-cols-4 gap-5">
          {categoryList && categoryList.length > 0 ? (
            categoryList.map((item) => (
              <div
                key={item.id} // Ensure a unique key for each element
                className="category hover:scale-105 flex items-center gap-4 bg-white shadow-lg p-5 rounded-3xl transition-shadow border"
              >
                <img
                  src={item.category_icon}
                  alt="this is category icon"
                  className="w-[70px] h-[70px] object-contain p-2 rounded-full"
                />
                <p className="uppercase text-darkGreen">{item.category_name}</p>
              </div>
            ))
          ) : (
            <div>No categories available</div> // Fallback message if categoryList is empty
          )}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
