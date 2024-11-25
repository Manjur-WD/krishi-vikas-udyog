import { BsGridFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "../../../services/api";
import Preloader from "../../elements/Preloader";

const CategorySection = () => {
  // Use the useQuery hook to fetch data
  const {
    data: categoryList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category-list", 1], // Add the languageId to the queryKey for better cache management
    queryFn: () => getCategoryList(1), // Pass a function that calls getCategoryList
  });

  // Handle loading and error states
  if (isLoading) {
    return <Preloader />;
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
        <div className="categories grid place-content-center lg:grid-cols-4 md:grid-cols-2 gap-y-5 gap-x-8">
          {categoryList && categoryList.length > 0 ? (
            categoryList.map((item) => (
              <div
                key={item.id} // Ensure a unique key for each element
                className="category hover:scale-105 flex items-center gap-4 bg-white shadow-lg p-5 rounded-3xl transition-shadow border"
              >
                <div className="category-image">
                  <img
                    src={item.category_icon}
                    alt="this is category icon"
                    className="w-[70px] h-[70px] object-contain p-3 rounded-full"
                  />
                </div>
                <p className="uppercase  text-lg text-darkGreen">
                  {item.category_name}
                </p>
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
