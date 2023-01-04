import { useParams } from 'react-router-dom';
import productData from '../data';
import { useState, useEffect } from 'react';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';



const FullProduct = () => {
	const {id} = useParams();
	const [product, setProduct] = useState(null)

	useEffect(() => {
		setProduct(productData[id -1])
	}, [id])

	return (
    <div className="productFullList">
      {product && (
        <>
          <div className="productFullCard">{product.id}
          <img src={product.image} alt="product-img" className="fullImage"></img>
          <FaShoppingCart className={'productCard__cart'} />
          <FaRegBookmark className={'productCard__wishlist'} />
          <FaFireAlt className={'productCard__fastSelling'} />
		  <div className="productCard__fullContent">
            {product.name}
			<div className='productDescription'>{product.title}</div>
            <div className="displayStack__1">
              <div className="productPrice">${product.price}</div>
              <div className="productales">{product.totalSales} units sold</div>
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
		  </div>
        </>
      )}
    </div>
  );
}

export default FullProduct;