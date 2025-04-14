import React from "react";

const ShopProducts = ({ styles }) => {
  return (
    <div
      className={`w-full grid ${
        styles === "grid" ? "grid-cols-3" : "grid-cols-1"
      } gap-3`}
    >
      {[1, 2, 3, 4, 5, 6].map((p, i) => (
        <div
          key={i}
          className={`flex transition-all duration-300 ease-in-out ${
            styles === "grid"
              ? "flex-col justify-start items-start"
              : "justify-start items-center"
          } w-full gap-4 bg-white shadow-md rounded-md p-4`}
        >
            <div className={styles === 'grid' ? 'w-full relative group h-[210px] overflow-hidden': 'md:w-full  lg:w-full  relative group  h-[210px] overflow-hidden'}>
                <img src={`/images/products/${i+1}.jpg`} alt="" />
            </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
