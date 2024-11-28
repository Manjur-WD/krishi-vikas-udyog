import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../../elements/ProductCard";
import { motion } from "motion/react";
import { TbArrowMoveRight } from "react-icons/tb";
import AnimateButton from "../../animation/AnimateButton";
import PopulerBrandList from "./PopulerBrandList";

const CategoryWiseProductCarousel = ({
  category_title,
  tabs = [],
  product_data = {},
  populer_brand_id,
  company_id
}) => {
  return (
    <>
        
      <section className="category-wise-product-slider relative my-10">
        <div className="category-header__title bg-lightdark shadow flex justify-between items-center">
          <h3 className="text-2xl w-[350px] p-4 text-white font-bold shadow-lg text-center uppercase">
            {category_title}
          </h3>
          <AnimateButton>
            <a
              href="#"
              className="block uppercase border-lightgreen bg-white me-10 px-4 py-1 rounded-3xl font-bold shadow text-darkGreen border"
            >
              View All <TbArrowMoveRight className="inline mb-1" />
            </a>
          </AnimateButton>
        </div>

        <div className="category__tabs  w-[95%] rounded-xl mx-auto">
          <div className="container">
            <Tabs
              defaultValue={tabs[0] === "old" ? "used" : tabs[0]}
              className="w-full"
            >
              <TabsList className="absolute top-3 left-[50%] -translate-x-1/2 rounded-2xl">
                {/* Dynamically render TabsTrigger with unique key */}
                {tabs.map((tab, idx) => (
                  <TabsTrigger
                    key={idx} // Use a unique identifier, such as tab.value or tab.label
                    value={tab === "old" ? "used" : tab}
                    className="px-10 uppercase category-tab text-black rounded-2xl"
                  >
                    {tab === "old" ? "used" : tab}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Dynamically render TabsContent based on the selected tab */}
              {tabs.map((tab, idx) => (
                <motion.div className="" key={idx}>
                  
                  <TabsContent value={tab === "old" ? "used" : tab} className="animate__animated animate__fadeIn">
                  {/* POPULER BRAND RENDERING CODE START */}

                  {
                    tab === "new"?  null : <PopulerBrandList populer_brand_id={populer_brand_id}/>
                  }

                  {
                    tab === "seeds"?  <PopulerBrandList company_id= "6" /> : null
                  }

                  {
                    tab === "pesticides"?  <PopulerBrandList company_id= "8" /> : null
                  }

                  {
                    tab === "fertilizers"?  <PopulerBrandList company_id= "9" /> : null
                  }

                  {/* POPULER BRAND RENDERING CODE END */}
                    <Carousel>
                      <CarouselContent>
                      
                        {/* Ensure tractor_data[tab] is not undefined and map over it */}
                        {product_data[tab]?.map((item) => {
                          // Make sure to return the CarouselItem to render
                          return (
                            <CarouselItem
                              key={item.id}
                              className="md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                            >
                              {/* Example rendering each item, adjust based on your data */}
                              <ProductCard
                                product_image={
                                  item.front_image
                                    ? item.front_image
                                    : item.image1
                                }
                                product_title={
                                  `${item.brand_name} ${item.model_name}` ===
                                    "Others Others" ||
                                  `${item.brand_name} ${item.model_name}` ===
                                    "undefined undefined"
                                    ? item.title
                                    : `${item.brand_name} ${item.model_name}`
                                }
                                product_location={item.district_name}
                                product_pricing={item.price}
                                distance_product={item.distance}
                                rent_type={
                                  tab === "rent"
                                    ? item.rent_type
                                      ? ` / ${item.rent_type.slice(4)}`
                                      : ""
                                    : ""
                                }
                              />
                            </CarouselItem>
                          );
                        })}
                        {/* <CarouselItem className="md:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                          VIEW ALL
                        </CarouselItem> */}
                      </CarouselContent>
                      <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
                      <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
                    </Carousel>
                  </TabsContent>
                </motion.div>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryWiseProductCarousel;
