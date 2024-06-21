import React from "react";
import SliderCont from "../components/home/SliderCont";
import Today from "../components/home/Today";
import TProducts from "../components/home/TProducts";
import Categories from "../components/home/categories/Categories";
import products from "../data/product.json";
import Products from "../components/home/bestProducts/Products";
import BestPHead from "../components/home/bestProducts/BestPHead";
import MusicExperience from "../components/home/musicExperience/MusicExperience";
import ExploreHead from "../components/home/ExploreProducts/ExploreProducts";
// import SameHead from "../components/SameHead";
// import Cslider from "../components/home/categories/Cslider";
function Home() {
  return (
    <div>
      <SliderCont />
      <Today products={products.flashSales} />
      <Categories />
      <BestPHead />
      <div className="flex mt-12">
        {products.BestProducts.map((product, index) => (
          <Products key={index} data={product} />
        ))}
      </div>
      {/* <SameHead name={"Explore Our Products"} SliderComponent={Cslider} /> */}

      <MusicExperience />
      <ExploreHead/>
    </div>
  );
}

export default Home;
