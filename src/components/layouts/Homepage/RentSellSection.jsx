import sell_icon from "../../../assets/images/sell.svg";
import rent_icon from "../../../assets/images/rent.svg";

const RentSellSection = () => {
  return (
    <>
      <section className="rent-sell-cta bg-rentSellBanner md:h-[400px] h-[250px] bg-cover bg-bottom  flex justify-top flex-col pt-10 ">
        <h2 className="md:text-6xl text-2xl text-center font-black text-white mb-5">
          What would you like to do?
        </h2>
        <div className="rent-sell-btn flex justify-center gap-5">
          <a
            href="#"
            className=" bg-lightgreen md:text-2xl text-white md:px-10 px-5 py-3 rounded-3xl border animate-pulse hover:animate-none"
          >
            <img
              src={rent_icon}
              alt="this is a sell icon"
              className="inline me-1"
              width={25}
            />
            RENT
          </a>
          <a
            href="#"
            className=" bg-lightgreen md:text-2xl text-white md:px-10 px-5 py-3 rounded-3xl border animate-pulse hover:animate-none shadow"
          >
            <img
              src={sell_icon}
              alt="this is a sell icon"
              className="inline me-1"
              width={25}
            />
            SELL
          </a>
        </div>
      </section>
    </>
  );
};

export default RentSellSection;
