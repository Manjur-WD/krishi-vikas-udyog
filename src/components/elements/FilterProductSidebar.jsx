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
  const all_brand_list = brandList
    ? brandList.filter((brand) => brand.item_count != 0)
    : [];

  console.log(statedistrictList);
  console.log(yearOfPurchaseList);
  console.log(maxminPrice);

  // console.log(data);

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
                            <div
                              className="brand-select text-center border rounded-2xl p-2"
                              key={item.brand_id}
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
                          ))
                        )}
                      </div>
                      <p className="text-sm bg-gradient-green text-white px-3 py-2 my-3 rounded-xl">
                        ALL BRANDS
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {brandLoading ? (
                          <BrandModelSkeleton />
                        ) : (
                          all_brand_list &&
                          all_brand_list.map((item) => (
                            <div
                              className="brand-select text-center border rounded-2xl p-2"
                              key={item.brand_id}
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
                        statedistrictList.filter((state) => state.item_count != 0).map((state) => (
                          <li
                            key={state.state_id}
                            className="state-and-district-list flex bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between hover:scale-105"
                          >
                            <span>{state.state_name}</span>
                            <span className="text-nowrap">{state.item_count}{" "}Items</span>
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
                        yearOfPurchaseList.filter((yop) => yop.item_count != 0).map((yop) => (
                          <li
                            key={yop.state_id}
                            className="state-and-district-list flex bg-white shadow m-3 p-3 rounded-2xl text-sm items-center justify-between hover:scale-105"
                          >
                            <span>{yop.year}</span>
                            <span className="text-nowrap">{yop.item_count}{" "}Items</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </details>
              </div>
              
            </>

          ) :
            null
          }

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
