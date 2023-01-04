import productData from '../data';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

const Content = () => {
  const [products, setProducts] = useState(productData);

  useEffect(() => {
    setProducts(productData);
  }, []);
  return (
    <div className="productList">
      {products.map((product) => (
        <Link className="productCard" key={product.id} to={`/fullproduct/${product.id}`}>
          <img src={product.image} alt="product-img" className="productImage"></img>
          <FaShoppingCart className={'productCard__cart'} />
          <FaRegBookmark className={'productCard__wishlist'} />
          <FaFireAlt className={'productCard__fastSelling'} />

          <div className="productCard__content">
            {product.name}
            <div className="displayStack__1">
              <div className="productPrice">${product.price}</div>
              <div className="productSales">{product.totalSales} units sold</div>
            </div>
            <div className="displayStack__2">
              <div className="productRating">
                {[...Array(product.rating)].map((index) => (
                  <FaStar id={index + 1} key={index} />
                ))}
              </div>
              <div className="productTime">{product.timeLeft} days left</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Content;
