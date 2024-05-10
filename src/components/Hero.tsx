"use client";
import Slide from '@/Slide';
import React from 'react'
import Slider from "react-slick";
const Hero = () => {
    var settings={
        dots:true,
        infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    pauseOnHover:false,
};
const slideData=[
{
id:0,
img:"/wome.jpg",
title:"Trending Item",
mainTitle:"WOMEN'S LATEST FASHION SALE",
price:"$20",
},
{
    id:1,
    img:"/sunglasses_banner.jpg",
    title:"Trending Accessories",
    mainTitle:"MODERN SUNGLASSES",
    price:"$12",
    },
    {
        id:2,
        img:"/watches_banner.jpg",
        title:"Trending Item",
        mainTitle:"WOMEN'S LATEST FASHION SALE",
        price:"$25",
        },
        {
            id:3,
            img:"/shoes_banner.jpg",
            title:"Trending Item",
            mainTitle:"WOMEN'S LATEST FASHION SALE",
            price:"$25",
            },
];
  return <div>
       <div className="container pt-6 lg:pt-0">
        <Slider {...settings} >
        {slideData.map((item)=>(
            <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
            />
        ))}
        </Slider>
        </div> 
    </div>
}

export default Hero
