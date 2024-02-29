import {useState, useEffect, useCallback} from "react";
import {useSearchParams} from 'react-router-dom';
import SearchPanel from "../components/searchPanel/SearchPanel";
import ProductList from "../components/productsList/ProductsList";
import {getAllProducts} from "../fakeStoreAPI";

const Home = (props) => {
  const {listCategory} = props;
  const [products, setProducts] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const productQuery = searchParams.get('product') || null;
  const priceFromQuery = searchParams.get('priceFrom') || null;
  const priceToQuery = searchParams.get('priceTo') || null;
  const categoryQuery = searchParams.get('category') ? searchParams.get('category').split(', ') : null;
  const [filters, setFilters] = useState({
    product: productQuery,
    priceFrom : priceFromQuery,
    priceTo: priceToQuery,
    category: categoryQuery
  });

  const handleSearchFilters = useCallback((name, value) => {
    const params = {
      ...filters,
      [name]: name !== 'category' ? value : value.join(', ')
    }

    const clearedParams = Object.fromEntries(Object.entries(params).filter(item => item[1] !== null && item[1] !== ''));

    setSearchParams(clearedParams);
  }, [setSearchParams, filters]);

  const hendleSearchInput = useCallback((e) => {
    const {
      name,
      value
    } = e.target;

    setFilters(currentState => {
      return {
        ...currentState,
        [name]: name !== 'category' ? value : typeof value === 'string' ? value.split(', ') : value
      }
    });

    handleSearchFilters(name, value);
  }, [handleSearchFilters]);

  const handleClearButton = useCallback(() => {
    setFilters({
      product: null,
      priceFrom: null,
      priceTo: null,
      category: null
    });
    setSearchParams();
  }, [setSearchParams]);

  const getProducts = () => {
    const allProducts = getAllProducts();
    allProducts
    .then(
      result => {
        setProducts([...result]);
      }
    )
    .catch(
      err => {
        console.log(err);
        setProducts(null);
      }
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchPanel
              filters={filters}
              listCategory={listCategory}
              onChange={hendleSearchInput}
              onClear={handleClearButton}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {products &&
            <ProductList
              products={products}
              filters={filters}  
            />
          }
        </div>
    </div>
    </>
  );
};

export default Home;