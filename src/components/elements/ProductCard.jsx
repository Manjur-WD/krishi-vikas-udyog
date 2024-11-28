import { GrMapLocation } from "react-icons/gr";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

const ProductCard = ({
  product_image,
  product_title,
  product_pricing,
  product_location,
  distance_product,
  rent_type
}) => {
  return (
    <>
      <div className="product-card bg-white rounded-3xl overflow-hidden my-5 shadow-lg border hover:scale-95 transition-all">
        <div className="product_image p-1">
          <img
            src={product_image}
            alt="this is product image"
            className="w-full h-[200px] object-cover object-center rounded-3xl"
          />
        </div>
        <p className="text-center py-4 product-title px-4">{product_title}</p>
        <div className="flex text-sm justify-between items-center px-5 py-3 location-and-price">
          <p className="distance">
            <GrMapLocation className="inline-block mb-2 me-1" />
            {product_location}
          </p>
          <p className="pricing">
            <MdOutlineCurrencyRupee className="inline-block mb-1 " />
            {product_pricing}{rent_type !== null ? rent_type :""}
          </p>
        </div>
        <p className="distance bg-lightdark text-white text-center py-2"> 
          <GiPathDistance className="inline-block mb-1 me-2" />
          Distance :
          <span className="mx-1">{distance_product}</span>
          Km
        </p>
      </div>
    </>
  );
};

export default ProductCard;
