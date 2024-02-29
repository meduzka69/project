import {useState, useEffect, useCallback} from "react";
import {useParams} from "react-router-dom";
import ProductList from "../components/productsList/ProductsList";
import {getProductsInCategory} from "../fakeStoreAPI";

const Category = () => {
  const {title} = useParams();
  const [productsInCategory, setproductsInCategory] = useState(null);

  const getAllProductsInCategories = useCallback(() => {
    const productsInCategory = getProductsInCategory(title);
    productsInCategory
    .then(
      result => {
        setproductsInCategory([...result]);
      }
    )
    .catch(
      err => {
        console.log(err)
        setproductsInCategory(null);
      }
    );
  }, [title]);

  useEffect(() => {
    getAllProductsInCategories();
  }, [title]);

  return (
    <div className="container">
        <div className="row">
          {productsInCategory &&
            <ProductList products={productsInCategory} filters={{}} />
          }
        </div>
    </div>
  );
};

export default Category;