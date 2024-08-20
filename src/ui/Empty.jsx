import React from "react";

function Empty({ children }) {
  return (
    <div className="flex h-full w-full items-center justify-center shadow-none">
      {children || <p>موردی برای نمایش وجود ندارد</p>}
    </div>
  );
}

export default Empty;
