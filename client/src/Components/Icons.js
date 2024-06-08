import React from "react";

function Icons() {
  return (
    <div className="flex justify-center mb-24">
      <div className="flex  flex-col md:flex-row  items-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0679/7862/5318/files/premium-Quality-1.png?v=1675661534"
          width="200"
          alt=""
        />
        <div className="border-l border-gray-600 hidden md:block h-24"></div>
        <img
          src="https://cdn.shopify.com/s/files/1/0679/7862/5318/files/secure-payment.png?v=1675661534"
          width="200"
          alt=""
        />
        <div className="border-l border-gray-600 hidden md:block  h-24"></div>
        <img
          src="https://cdn.shopify.com/s/files/1/0679/7862/5318/files/express-shipping.png?v=1675661534"
          width="200"
          alt=""
        />
      </div>
    </div>
  );
}

export default Icons;
