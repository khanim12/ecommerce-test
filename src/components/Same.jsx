import React from "react";

function Same({ name }) {
  return (
    <div>
      <div className="flex items-center gap-4 mt-24 mb-6">
        <div className="bg-[#db4444] w-4 h-10 rounded	"></div>
        <h4 className="text-[#db4444]  font-bold	">{name}</h4>
      </div>
    </div>
  );
}

export default Same;
