/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FilterBtnContext } from "../../context/CategoryWiseAllProduct/FilterBtnContext";
import { useQuery } from "@tanstack/react-query";
import {
  getBrandList,
  getMaxMinPrice,
  getStateDistrictList,
  getYearOfPurchaseList,
} from "../../services/api";
import BrandModelSkeleton from "./BrandModelSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { addBrand, addStates } from "../../redux/features/filterProducts/CounterSlice";

const FilterProductSidebar = ({ categoryId, type, categoryProduct }) => {
  const { filterBtnState, setFilterBtnState } = useContext(FilterBtnContext);
  console.log(categoryId);
  console.log(type);

  const { data: brandList, isLoading: brandLoading } = useQuery({
    queryKey: ["brand-list", categoryId, type],
    queryFn: () => getBrandList(categoryId, type),
    enabled: !!categoryProduct,
  });
  const { data: statedistrictList, isLoading: stateLoading } = useQuery({
    queryKey: ["state-district-list", categoryId, type],
    queryFn: () => getStateDistrictList(categoryId, type),
    enabled: !!brandList,
  });
  const { data: yearOfPurchaseList, isLoading: yopLoading } = useQuery({
    queryKey: ["year-of-purchase-list", categoryId, type],
    queryFn: () => getYearOfPurchaseList(categoryId, type),
    enabled: !!statedistrictList,
  });
  const { data: maxminPrice, isLoading: maxminpriceLoading } = useQuery({
    queryKey: ["maxmin-price-list", categoryId, type],
    queryFn: () => getMaxMinPrice(categoryId, type),
    enabled: !!yearOfPurchaseList,
  });

  const popular_brand_list = brandList
    ? brandList.filter((brand) => brand.popular === 1 && brand.item_count != 0)
    : [];
  const other_brand_list = brandList
    ? brandList.filter((brand) => brand.item_count != 0 && brand.popular != 1)
    : [];

  // console.log(statedistrictList);
  // console.log(yearOfPurchaseList);
  // console.log(maxminPrice);

  console.log(brandList);

  const dispatch = useDispatch();

  const brands = useSelector((state) => state.counter.filterParams.brandId);
  const states = useSelector((state) => state.counter.filterParams.stateId);

  console.log(`"${brands}"`);
  console.log(`"${states}"`);

  return (
    <>
      <aside
        className={
          filterBtnState
            ? "filter-product-sidebar active"
            : "filter-product-sidebar"
        }
      >
        <div className="lg:hidden filter-headeing flex items-center px-5 py-2 sticky -top-[10px] rounded-xl">
          <HiOutlineArrowNarrowLeft
            className="text-3xl text-white absolute"
            onClick={() => {
              setFilterBtnState(false);
            }}
          />
          <p className="text-xl text-white text-center w-full ">Filter</p>
        </div>

        <section className="w-full bg-white my-3 p-2 rounded-3xl shadow">
          {categoryId !== 6 && categoryId !== 8 && categoryId !== 9 ? (
            <>
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
                  <div className="brands-list border-t p-2 h-[400px] overflow-y-auto">
                    <div className="popular-brands text-center">
                      <p className="text-sm bg-gradient-green text-white px-3 py-2 mb-2 rounded-xl">
                        POPULAR BRANDS
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {brandLoading ? (
                          <BrandModelSkeleton />
                        ) : (
                          popular_brand_list &&
                          popular_brand_list.map((item) => (
                            <div className="brand-select " key={item.brand_id}>
                              <input type="checkbox" id={item.brand_id} className="hidden" />
                              <label htmlFor={item.brand_id} className=" border rounded-2xl p-2">
                                <div
                                  className="text-center"
                                  onClick={() => dispatch(addBrand(item.brand_id))}
                                >
                                  <img
                                    src={item.brand_logo}
                                    alt="brand-logo"
                                    className="w-[40px] h-[40px] object-contain mx-auto"
                                  />
                                  <p className="brand-name capitalize text-sm truncate">
                                    {item.brand_name}
                                  </p>
                                  <p className="brand-product-count text-sm">
                                    ({item.item_count})
                                  </p>
                                </div>
                              </label>
                            </div>

                          ))
                        )}
                      </div>
                      <p className="text-sm bg-gradient-green text-white px-3 py-2 my-3 rounded-xl">
                        OTHER BRANDS
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {brandLoading ? (
                          <BrandModelSkeleton />
                        ) : (
                          other_brand_list &&
                          other_brand_list.map((item) => (
                            <div className="brand-select " key={item.brand_id}>
                              <input type="checkbox" id={item.brand_id} className="hidden" />
                              <label htmlFor={item.brand_id} className=" border rounded-2xl p-2">
                                <div
                                  className="text-center"
                                  onClick={() => dispatch(addBrand(item.brand_id))}
                                >
                                  <img
                                    src={item.brand_logo}
                                    alt="brand-logo"
                                    className="w-[40px] h-[40px] object-contain mx-auto"
                                  />
                                  <p className="brand-name capitalize text-sm truncate">
                                    {item.brand_name}
                                  </p>
                                  <p className="brand-product-count text-sm">
                                    ({item.item_count})
                                  </p>
                                </div>
                              </label>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </details>
              </div>
              <div className="product_statewise">
                <details className="rounded-3xl bg-white overflow-hidden shadow mb-3">
                  <summary className="list-none">
                    <div className="flex text-darkGreen w-full justify-between items-center px-5 py-4">
                      <span>STATES</span>
                      <FaAngleDown className="inline" />
                    </div>
                  </summary>
                  <div className="state-list border-t p-2 max-h-[400px] overflow-y-auto">
                    <ul>
                      {statedistrictList &&
                        statedistrictList
                          .filter((state) => state.item_count != 0)
                          .map((state) => (
                            <li
                              key={state.state_id}
                              className="state-and-district-list "
                            >
                              <input type="checkbox" id={state.state_name} className="hidden" />
                              <label htmlFor={state.state_name} className=" bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between transition-[0.3s] hover:scale-105"
                              onClick={() => dispatch(addStates(state.state_id))}>
                                <div className="flex justify-between">
                                  <span className="inline-block">{state.state_name}</span>
                                  <span className="text-nowrap inline-block">
                                    {state.item_count} Items
                                  </span>
                                </div>
                              </label>
                            </li>
                          ))}
                    </ul>
                  </div>
                </details>
              </div>
              <div className="product_districtwise">
                <details className="rounded-3xl bg-white overflow-hidden shadow mb-3">
                  <summary className="list-none ">
                    <div className="flex text-darkGreen w-full justify-between items-center px-5 py-4">
                      <span>BY YEAR</span>
                      <FaAngleDown className="inline" />
                    </div>
                  </summary>
                  <div className="state-list border-t p-2 max-h-[400px] overflow-y-auto">
                    <ul>
                      {yearOfPurchaseList &&
                        yearOfPurchaseList
                          .filter((yop) => yop.item_count != 0)
                          .map((yop) => (
                            <li
                              key={yop.year}
                              className="year-of-manufacture"
                            >
                              <input type="checkbox" id={yop.year} className="hidden" />
                              <label htmlFor={yop.year} className=" bg-white shadow m-3 p-3 rounded-2xl text-sm justify-between hover:scale-105">
                                <div className="flex justify-between items-center">
                                  <span>{yop.year}</span>
                                  <span className="text-nowrap">
                                    {yop.item_count} Items
                                  </span>
                                </div>
                              </label>
                            </li>
                          ))}
                    </ul>
                  </div>
                </details>
              </div>
            </>
          ) : null}

          <div className="product_by_year">
            <details className="rounded-3xl bg-white overflow-hidden shadow mb-3">
              <summary className="list-none ">
                <div className="flex text-darkGreen w-full justify-between items-center px-5 py-4">
                  <span>PRICE</span>
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