import { useParams } from "react-router-dom";
import breadcrumbImage from "../../assets/images/img_hero.jpg";
import { FaChevronRight } from "react-icons/fa6";

const BreadCrumb = () => {
  const { category, type } = useParams();

  return (
    <>
      <section
        className="breadcrumb flex justify-center items-center md:h-[300px] h-[200px]"
        style={{
          backgroundImage: `linear-gradient(#13693a, #13693a6e),url(${breadcrumbImage})`,
          backgroundSize: "cover", // Ensures the image covers the entire section
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div className="breadcrumb-content">
          <div className="breadcrumb-links flex justify-center items-center text-2xl text-white">
            <p className="hover:text-lightgreen px-3">Home</p>
            <FaChevronRight />
            <p className="hover:text-lightgreen px-3 capitalize">{
                category === "goods-vehicle" ? "good vehicle" : category
                }</p>
          </div>
          <p
            className="text-lightgreen md:text-6xl text-4xl font-bold text-center mt-3 uppercase"
            style={{ textShadow: "0 0 15px black" }}
          >
            {category==="agri-inputs" ? type : `${type === "old"? "used" : type} ${category}`}

          </p>
        </div>
      </section>
    </>
  );
};

export default BreadCrumb;
