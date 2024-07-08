import React from "react";
import { Link } from "react-router-dom";
import Star from "../star/Star";
import { Heart } from "iconsax-react";
import { PRODUCT_ITEM } from "../../types/types";

interface ProductCardProps {
  product: PRODUCT_ITEM;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="relative rounded-2xl p-6 border border-borderClr2 overflow-hidden shadow-lg mx-auto"
      style={{ width: "300px", height: "305px" }}
    >
      <div className="space-y-4 sm:space-y-[43.35px]">
        <div className="flex items-center justify-center">
          <img
            className="object-contain"
            src={product.image}
            style={{ width: "154px", height: "94px" }}
            alt="Card Image"
          />
        </div>

        <div className="flex flex-col text-left justify-start gap-[15.74px] text-secondary max-w-[188px]">
          <div className="font-semibold truncate">{product.title}</div>
          <div className="font-semibold text-textClr1 text-[17.09px]">
            ${product.price}
          </div>
          <div className="font-semibold text-border1">
            <Star stars={product.rating.rate} />
          </div>
        </div>
      </div>
      <div className="absolute top-[30px] right-[20px] w-[27.54px] h-[27.54px] rounded-[122.4px] bg-favorite flex items-center justify-center">
        <Heart className="h-[14.45px] w-[14.45px]" />
      </div>
    </Link>
  );
};

export default ProductCard;
