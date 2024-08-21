import React from "react";

function MenuItem({ handleClick, children }) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between border-b border-gray_200 py-3"
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default MenuItem;
