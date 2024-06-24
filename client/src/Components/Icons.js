import React from "react";

function Icons() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0679/7862/5318/files/premium-Quality-1.png?v=1675661534"
          alt=""
          className="w-28 sm:w-44"
        />
        <div className="border-l border-gray-600 h-24"></div>
        <img
          src="https://cdn.shopify.com/s/files/1/0679/7862/5318/files/secure-payment.png?v=1675661534"
          alt=""
          className="w-28 sm:w-44"
        />
        <div className="border-l border-gray-600 h-24"></div>
        <img
          src="https://cdn.shopify.com/s/files/1/0679/7862/5318/files/express-shipping.png?v=1675661534"
          alt=""
          className="w-28 sm:w-44"
        />
      </div>
    </div>
  );
}

export default Icons;
