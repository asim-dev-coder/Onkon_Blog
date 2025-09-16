import React from "react";
import CardDesign from "../../../../Components/CardDesign";

const RightProductsDetalis = ({ products }) => {
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <CardDesign
            key={product.id}
            productId={product.id}
            title={product.title}
            image={product.image}
            category={product.category}
            rating={product.rating}
            price={product.price}
            quantity={product.quantity}
            review={product.review}
          />
        ))}
      </div>
    </div>
  );
};

export default RightProductsDetalis;
