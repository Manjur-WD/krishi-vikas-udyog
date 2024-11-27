import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../../elements/ProductCard";

const CategoryWiseProductCarousel = ({
  category_title,
  tabs = [],
  tractor_data = {},
}) => {
  console.log(tractor_data); // Log to check if data is available

  return (
    <>
      <div className="category-wise-product-slider relative my-10">
        <div className="category-header__title bg-lightdark">
          <h3 className="text-2xl w-[350px] p-4 text-white font-bold shadow-lg text-center uppercase">
            {category_title}
          </h3>
        </div>
        <div className="category__tabs bg-white w-[95%] rounded-xl mx-auto">
          <div className="container px-4">
            <Tabs defaultValue={tabs[0]} className="w-full">
              <TabsList className="absolute top-3 right-[5%]">
                {/* Dynamically render TabsTrigger with unique key */}
                {tabs.map((tab, idx) => (
                  <TabsTrigger
                    key={idx} // Use a unique identifier, such as tab.value or tab.label
                    value={tab === "old" ? "used" : tab}
                    className="px-10 uppercase category-tab text-black"
                  >
                    {tab === "old" ? "used" : tab}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Dynamically render TabsContent based on the selected tab */}
              {tabs.map((tab, idx) => (
                <TabsContent value={tab === "old" ? "used" : tab} key={idx}>
                  <Carousel>
                    <CarouselContent>
                      {/* Ensure tractor_data[tab] is not undefined and map over it */}
                      {tractor_data[tab]?.map((item) => {
                        // Make sure to return the CarouselItem to render
                        return (
                          <CarouselItem
                            key={item.id}
                            className="md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                          >
                            {/* Example rendering each item, adjust based on your data */}
                            <ProductCard
                              product_image={item.front_image}
                              product_title={`${item.brand_name}${" "}${
                                item.model_name
                              }`}
                              product_location={item.district_name}
                              product_pricing={item.price}
                              distance_product={item.distance}
                            />
                          </CarouselItem>
                        );
                      })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryWiseProductCarousel;
