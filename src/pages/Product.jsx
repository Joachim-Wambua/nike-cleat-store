// ProductPage.jsx
import { useParams } from "react-router-dom";
import { products } from "../constants";
import Button from "../components/Button";

const ProductPage = () => {
  const { id } = useParams();

  // Find the product with the matching ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const { imgURL, name, price, description } = product;

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/2 mt-40 sm:mt-60">
          <img
            src={imgURL}
            alt={name}
            className="lg:ml-40 mb-20 h-auto"
            width={540}
            height={540}
          />
        </div>
        <div className="w-1/2 pl-8 lg:mt-60 sm:mt-40">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="text-lg text-gray-700 mb-8">{price}</p>
          <p className="text-gray-600">{description}</p>
          <div className="mt-6">
            <Button label="Add to Cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
