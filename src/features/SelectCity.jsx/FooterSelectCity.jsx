import React from "react";

function FooterSelectCity() {
  return (
    <footer className="flex h-1/6 items-center justify-between border-t border-gray_200 p-2">
      <button className="w-[48%] rounded border border-gray_100 py-2">
        انصراف
      </button>
      <button className="w-[48%] rounded bg-red-500 py-2">تایید</button>
    </footer>
  );
}

export default FooterSelectCity;
