import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import { getSingleProduct } from "../fakeStoreAPI";
import ButtonGoBack from "../components/buttonGoBack/ButtonGoBack";

const Product = () => {
  const {id} = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  const {
    title,
    price,
    category,
    description,
    image
  } = singleProduct || {};

  useEffect(() => {
    const product = getSingleProduct(id);
    product
    .then(
      result => {
        setSingleProduct(result);
      }
    )
    .catch(
      err => {
        console.log(err);
      }
    );
  }, [id]);

  return (
    singleProduct && (
      <>
        <div className="container">
          <div className="row">
            <div className="col col-for-card">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src={image} className="img-fluid rounded-start" alt={title} />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h4 className="card-title">{title}</h4>
                      <p className="card-text">{description}</p>
                      <p className="card-text"><strong>Category:</strong>
                        <Link to={`/category/${category}`} className="myLink"> {category}</Link>
                      </p>
                      <p className="card-text price">{`${price}$`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col txt-center">
              <ButtonGoBack />
            </div>
          </div>
        </div>
      </>  
    )
  );
};

export default Product;