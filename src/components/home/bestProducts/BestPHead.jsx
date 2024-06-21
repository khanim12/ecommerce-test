import React from "react";
import Same from "../../Same";

function BestPHead() {
  return (
    <div>
      <Same name={"This Month"} />
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold"> Best Selling Products</h2>
        <button className="bg-red-500 text-white py-3 px-8 rounded ">
          View All
        </button>
      </div>
    </div>
  );
}

export default BestPHead;
