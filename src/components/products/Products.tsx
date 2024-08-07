import Star from "../star/Star";
import useProducts from "./useProducts";
import useFetchProductIdFromUrl from "../../hooks/useFetchProductIdFromUrl";
import Loader from "../loader/Loader";
import { SIZES } from "../../constants/products";
import { SOCIAL_ICONS } from "../../constants/socialIcons";
import WishlistIcon from "../wishlistIcon/WishlistIcon";
import RelatedProducts from "../relatedProducts/RelatedProducts";

const Products: React.FC = () => {
  const [, productIdNum] = useFetchProductIdFromUrl();

  const {
    product,
    quantityCount,
    addToCart,
    handleIncrement,
    handleDecrement,
  } = useProducts(`/products/${productIdNum}`);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="xxl:mx-[63px] lg:mx-[33px] mt-[22px] mb-[100.25px] mx-6 ">
      <div className="flex flex-col md:flex-row lg:gap-[49px] md:gap-[20px] items-center md:items-start justify-center lg:items-start">
        <div className="lg:basis-1/2">
          <img
            className="object-contain lg:h-[500px] lg:w-[630px] md:h-[340px] md:w-[350px] h-[150px] w-[190px]"
            src={product?.image}
            alt=""
          />
        </div>

        <div className="lg:basis-1/2">
          <div className="mb-[22.47px] flex flex-col gap-[16px] lg:mx-0">
            <div className="text-navColor font-medium md:text-[29.68px] text-[20px] md:leading-[44px] leading-[35px] md:mb-[11px]">
              {product?.title}
            </div>
            <div className="text-textClr1 font-medium md:text-[29.68px] text-[20px] leading-[44px]">
              ${product?.price}
            </div>
            <div className="flex gap-[9.67px]">
              <div className="text-brandYellowClr">
                <Star stars={product?.rating?.rate} />
              </div>
              <div className="text-textClr1 text-[13.19px] font-medium">
                {product?.rating?.count} reviews
              </div>
            </div>
            <div className="flex gap-[19.08px] items-center">
              <div className="text-productAttribute1 text-[18.17px] font-medium">
                Availability
              </div>
              <div className="text-productAttributeGreen text-[18.17px] font-medium">
                In stock
              </div>
            </div>
            <div className="text-brownClr text-[15.93px]">
              Hurry up only {34} products left in stock!
            </div>
          </div>
          <hr className="mb-[40px] flex mx-6 lg:mx-0 h-[1px] bg-borderColor" />

          <div className="flex flex-col gap-[42px]">
          <div className="flex flex-col gap-[26px]">
            <div className="flex  lg:mx-0 items-center gap-[19.08px]">
              <div className="text-[18.17px] font-medium">Color: </div>
              <div className="flex gap-[14.59px] ">
                <input type="radio" name="clr" value="" />
                <input type="radio" name="clr" value="" />
              </div>
            </div>

            <div className="flex gap-[19.08px] items-center">
              <div>Size:</div>
              {SIZES.map((size, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-sizeColor cursor-pointer lg::h-[32px] lg:w-[63px] h-[25px] w-[43px]"
                >
                  {size}
                </div>
              ))}
            </div>

            <div className="flex  md:mx-0 gap-[19.08px] items-center">
              <div>Quantity</div>
              <div className="flex items-center">
                <button
                  onClick={handleDecrement}
                  className="flex items-center justify-center h-[32px] w-[35px] border border-borderColor"
                >
                  -
                </button>
                <div className="flex items-center justify-center h-[32px] w-[63px] border border-borderColor">
                  {quantityCount}
                </div>
                <button
                  onClick={handleIncrement}
                  className="flex items-center justify-center h-[32px] w-[35px] border border-borderColor"
                >
                  +
                </button>
              </div>
            </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:gap-[29px] gap-6 md:justify-between">
              <button
                onClick={() => addToCart(product)}
                className="rounded-[32.42px] w-full md:w-auto bg-primary text-white text-[20.7px] leading-[31.05px] flex items-center justify-center md:px-[30px] lg:px-[56px] py-[19.5px]  font-semibold"
              >
                Add to cart
              </button>
              <button className="rounded-[32.42px] w-full md:w-auto bg-primary text-white text-[20.7px] leading-[31.05px] flex items-center justify-center md:px-[30px] lg:px-[61.5px] py-[19.5px] font-semibold">
                Buy it now
              </button>
              <button className="hidden lg:flex relative mb-24 ">
                <WishlistIcon product={product} bgColor={false} large={true} />
              </button>
            </div>
          </div>

          <div className="mt-[25px] flex mx-6 md:mx-0 mb-[15px] h-[1px] bg-borderColor"></div>

          <div className="flex  flex-col gap-[31px]">
            <div className="flex items-center gap-[19.08px] text-productAttribute1 text-[18.17px] font-medium">
              <div>Sku: </div>
              <div>01133-9-9</div>
            </div>
            <div className="flex items-center gap-[19.08px]">
              <div className="text-productAttribute1 text-[18.17px] font-medium">
                Category:{" "}
              </div>
              <div className="text-saleColor text-[13.17px]">20% off</div>
              <div className="text-saleColor text-[13.17px]">49% off</div>
              <div className="text-saleColor text-[13.17px]">
                {product?.category}
              </div>
            </div>

            <div className="flex items-center gap-[19.08px]">
              <div className="text-productAttribute1 text-[18.17px] font-medium">
                Share:{" "}
              </div>
              <div className="flex gap-[37px]">
                {SOCIAL_ICONS.map(({ component: Icon, key }) => (
                  <Icon key={key} className="cursor-pointer" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:gap-[20px] gap-[10px] items-center justify-center mt-[75px] mb-[35px]">
        <button className="md:rounded-[15px] rounded-[10px] text-descColor text-[15.68px] md:text-[20.68px] leading-[31.02px] flex items-center justify-center font-medium md:px-[34px] md:py-[14.5px] px-[10px] py-[5px] border border-borderClr4">
          Description
        </button>
        <button className="md:rounded-[15px] rounded-[10px] bg-navColor text-white text-[15.68px] md:text-[20.68px] leading-[31.02px] flex items-center justify-center font-medium md:px-[51px] md:py-[14.5px] px-[20px] py-[5px] ">
          Reviews
        </button>
      </div>

      <div className="md:mb-[64px] mb-[10px] border rounded-[20px] border-borderClr5 md:py-[42.5px] md:px-[49px] py-[15.5px] px-[29px] space-y-[17px]">
        <div>Customer reviews</div>
        <div>No reviews yet</div>
        <button className="bg-navColor text-white underline flex items-center justify-center px-[20px] py-[5px]">
          Write a review
        </button>
      </div>

      <div className=""><RelatedProducts category={product.category}/></div>
    </div>
  );
};

export default Products;
