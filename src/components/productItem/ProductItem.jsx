import { useMemo } from "react";
import {Link} from "react-router-dom";

const ProductItem = (props) => {
  const {
    id,
    category,
    description,
    image,
    price,
    title
  } = props.product;

  const descriptionPart = useMemo(() => {
    return `${description.substr(0, 99)}...`;
  }, [description]);

  return (
    <div className="card h-100">
      <Link to={`/product/${id}`} className="myLink">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{descriptionPart}</p>
          <p className="card-text"><strong>Category:</strong> {category}</p>
          <p className="card-text price">{`${price}$`}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;