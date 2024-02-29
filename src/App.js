import './App.css';
import {useState, useCallback, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import About from './pages/About';
import PageNotFound from './pages/Pagenotfound';
import {getAllCatagories} from './fakeStoreAPI';

function App() {
  const [listCategory, setListCategory] = useState(null);

  const getListCategories = useCallback(() => {
    const allCategories = getAllCatagories();
    allCategories
    .then(
      result => {
        setListCategory([...result]);
      }
    )
    .catch(
      err => {
        console.log(err)
        setListCategory(null);
      }
    )
  }, []);

  useEffect(() => {
    getListCategories();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout listCategory={listCategory} />} >
        <Route index element={<Home listCategory={listCategory} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:title" element={<Category />} />
        <Route path="/about/" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
