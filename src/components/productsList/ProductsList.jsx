import { useMemo } from "react";
import ProductItem from "../productItem/ProductItem";

const ProductList = (props) => {
  const {
    products,
    filters
  } = props;

  const {
    product,
    priceFrom,
    priceTo,
    category
  } = filters;

  const productQuery = useMemo(() => {return product || '';}, [product]);
  const priceFromQuery = useMemo(() => {return priceFrom || '';}, [priceFrom]);
  const priceToQuery = useMemo(() => {return priceTo || 1000000;}, [priceTo]);
  const categoryQuery = useMemo(() => {
    return category ? category : [];
  }, [category]);

  const filteredProducts = useMemo (() => {
    return products.filter(item =>
      item.title.toLowerCase().includes(productQuery.toLowerCase()) &&
      item.price > priceFromQuery &&
      item.price < priceToQuery &&
      (categoryQuery.length === 0 || categoryQuery.some(category => 
        item.category.toLowerCase() === category.toLowerCase()
      ))
    );
  }, [productQuery, priceFromQuery, priceToQuery, categoryQuery, products]);
  
  return (
    filteredProducts?.map(item => 
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-3 mb-4">
          <ProductItem product={item} />
        </div>  
    )
  )
};

export default ProductList;