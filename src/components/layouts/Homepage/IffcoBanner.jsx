import { Link } from "react-router-dom";
import iffcoBanner from "../../../assets/images/iffco-bner-10.webp";
import BASE_URL from "../../../../config";
const IffcoBanner = () => {
  return (
    <>
      <section className="iffco-banner">
        <Link to={`${BASE_URL}/iffco-products`}>
          <img
            src={iffcoBanner}
            alt="this is iffco banner"
            className=""
          />
        </Link>
      </section>
    </>
  );
};

export default IffcoBanner;
