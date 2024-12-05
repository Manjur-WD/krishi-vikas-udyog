import { useState } from "react";

const SortProductTabs = () => {
  // Set the initial active button index to 0 (first button active initially)
  const [activeButton, setActiveButton] = useState(0);

  // Function to handle button click
  const handleButtonClick = (index) => {
    setActiveButton(index); // Set the clicked button as active
  };

  return (
    <>
      <section className="sort-product-tab-section  sticky top-[155px] z-10 py-2 bg-whitesmoke">
        <div className="bg-white mx-3 mt-3 flex md:flex-row flex-col items-center rounded-3xl gap-5">
          <p className="label-sort text-white bg-darkGreen px-5 py-2 rounded-3xl m-2">
            SORT BY
          </p>
          <div className="sort-buttons flex md:flex-row items-center flex-col">
            <button
              onClick={() => handleButtonClick(1)} // Set first button as active
              className={`px-4 py-2 m-2 ${
                activeButton === 1 ? "border-b border-darkGreen text-darkGreen" : "border-b text-black"
              }`}
            >
              Price High to Low
            </button>

            <button
              onClick={() => handleButtonClick(2)} // Set second button as active
              className={`px-4 py-2 m-2 ${
                activeButton === 2 ? "border-b border-darkGreen text-darkGreen" : "border-b text-black"
              }`}
            >
              Price Low to High
            </button>

            <button
              onClick={() => handleButtonClick(3)} // Set third button as active
              className={`px-4 py-2 m-2 ${
                activeButton === 3 ? "border-b border-darkGreen text-darkGreen" : "border-b text-black"
              }`}
            >
              Newest First
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SortProductTabs;
