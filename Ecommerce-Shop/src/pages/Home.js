import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter(item => (item.category).includes("men") || item.category.includes("women"));
  return (
    <>
      <Hero />
      <section className='py-[5rem]'>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-5 gap-[30px] max-sm-w">
            {filteredProducts.map(product => <Product product={product} key={product.id} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
