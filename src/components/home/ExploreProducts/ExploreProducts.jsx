import React, { useState, useEffect } from 'react';
import productsData from '../../../data/product.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ExProducts from './ExProducts'
const ExploreHead = () => {
  // const [products, setProducts] = useState([]);
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  // useEffect(() => {
  //   setProducts(productsData);
  // }, []);

  return (
    <div className="product-list">
      <h2>Explore Our Products</h2>
      <Slider {...settings}>
      {productsData.map((data) => (
        <ExProducts data={ data} key={data.id} />
      ))}
    </Slider>  
      <button className="view-all-button">View All Products</button>
    </div>
  );
};

export default ExploreHead;
