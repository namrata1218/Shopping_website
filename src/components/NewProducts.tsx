import React from 'react'
import ProductCard from './ProductCard';

const productsData=[
    {
        img:"/bag.jpg",
        title:"Sports",
        desc:"Trekking & Running Shoes -Black",
        rating:5,
        price:"58.00"
    },
    {
        img:"/bags.jpg",
        title:"Sports",
        desc:"Trekking & Running Shoes -Black",
        rating:3,
        price:"58.00"
    },
    {
        img:"/shoe.jpg",
        title:"Sports",
        desc:"Trekking & Running Shoes -Black",
        rating:4,
        price:"58.00"
    },
    {
        img:"/earrings.jpg",
        title:"Sports",
        desc:"Trekking & Running Shoes -Black",
        rating:3,
        price:"58.00"
    },
    {
        img:"/flat.jpg",
        title:"Sports",
        desc:"Trekking & Running Shoes -Black",
        rating:4,
        price:"58.00"
    },
    {
        img:"/ring.jpg",
        title:"Sports",
        desc:"Trekking & Running Shoes -Black",
        rating:4,
        price:"58.00"
    },
    {
        img:"/watch_s.jpg",
        title:"Sports",
        desc:"Trekking & Running Shoes -Black",
        rating:4,
        price:"58.00"
    },
    {
        img:"/wallet.jpg",
        title:"Sports",
        desc:"Trekking & Running Shoes -Black",
        rating:4,
        price:"58.00"
    },

];
const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Product</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10" >
                {productsData.map((item,index)=>(
                    <ProductCard key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    rating={item.rating}
                    price={item.price}/>
                    
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default NewProducts;
