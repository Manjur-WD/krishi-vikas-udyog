import { FaAngleDown } from "react-icons/fa6";

const FilterProductSidebar = () => {
  return (
    <>
      <aside className="sticky top-0">
        <section className="filter-product-sidebar w-full bg-white my-3 p-2 rounded-3xl shadow">
          <div className="product__brands">
            <details
              open
              className="rounded-3xl bg-white overflow-hidden shadow mb-3"
            >
              <summary className="list-none">
                <div className="flex text-darkGreen w-full justify-between items-center px-5 py-4">
                  <span>BRANDS</span>
                  <FaAngleDown className="inline" />
                </div>
              </summary>
              <div className="brands-list border-t p-2">
                <div className="popular-brands grid grid-cols-3 gap-2">
                  <div className="brand-select text-center border rounded-2xl p-2">
                    <img
                      src="https://krishivikas.com/storage/images/brands/mf.png"
                      alt="brand-select"
                      className="w-[60px] h-[60px] object-contain mx-auto"
                    />
                    <p className="brand-name capitalize">brand</p>
                    <p className="brand-product-count text-sm">(250)</p>
                  </div>
                  <div className="brand-select text-center border rounded-2xl p-2">
                    <img
                      src="https://krishivikas.com/storage/images/brands/mf.png"
                      alt="brand-select"
                      className="w-[60px] h-[60px] object-contain mx-auto"
                    />
                    <p className="brand-name capitalize">brand</p>
                    <p className="brand-product-count text-sm">(250)</p>
                  </div>
                  <div className="brand-select text-center border rounded-2xl p-2">
                    <img
                      src="https://krishivikas.com/storage/images/brands/mf.png"
                      alt="brand-select"
                      className="w-[60px] h-[60px] object-contain mx-auto"
                    />
                    <p className="brand-name capitalize">brand</p>
                    <p className="brand-product-count text-sm">(250)</p>
                  </div>
                </div>
                <div className="all-brands"></div>
              </div>
            </details>
          </div>
          <div className="product_statewise">
            <details className="rounded-3xl bg-white overflow-hidden shadow mb-3">
              <summary className="list-none ">
                <div className="flex text-darkGreen w-full justify-between items-center px-5 py-4">
                  <span>STATES</span>
                  <FaAngleDown className="inline" />
                </div>
              </summary>
              <ul>
                <li>manjur</li>
                <li>manjur</li>
                <li>manjur</li>
                <li>manjur</li>
              </ul>
            </details>
          </div>
          <div className="product_districtwise">
            <details className="rounded-3xl bg-white overflow-hidden shadow mb-3">
              <summary className="list-none ">
                <div className="flex text-darkGreen w-full justify-between items-center px-5 py-4">
                  <span>DISTRICT</span>
                  <FaAngleDown className="inline" />
                </div>
              </summary>
              <ul>
                <li>manjur</li>
                <li>manjur</li>
                <li>manjur</li>
                <li>manjur</li>
              </ul>
            </details>
          </div>
          <div className="product_by_year">
            <details className="rounded-3xl bg-white overflow-hidden shadow mb-3">
              <summary className="list-none ">
                <div className="flex text-darkGreen w-full justify-between items-center px-5 py-4">
                  <span>BY YEAR</span>
                  <FaAngleDown className="inline" />
                </div>
              </summary>
              <ul>
                <li>manjur</li>
                <li>manjur</li>
                <li>manjur</li>
                <li>manjur</li>
              </ul>
            </details>
          </div>
        </section>
      </aside>
    </>
  );
};

export default FilterProductSidebar;
