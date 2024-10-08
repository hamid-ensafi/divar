import React from "react";

function SubPopUp({ type, children }) {
  const base =
    "absolute z-10 animate-opacityAnime  rounded bg-darkGray shadow-Prime";
  const styles = {
    category: base + " no-scrollbar mt-5 w-10/12 p-8 ",
    search: base + " no-scrollbar p-2  h-[15rem] max-h-96 w-full overflow-y-scroll",
  };
  return <div className={styles[type]}>{children}</div>;
}

export default SubPopUp;
