import { Link } from "react-router-dom";
import React from "react";
function Button({ children, disabled, to, type, onClick, text }) {
  const base = "gap-2 p-2";
  
  const styles = {
    rowRevers:
      base +
      " flex flex-row-reverse items-center  transition duration-200 hover:bg-lightBlack rounded-md",
    row: base + " flex  items-center  transition duration-200 hover:bg-lightBlack rounded-md",
    redButton:
      "font-700 bg-Red rounded-md px-2 text-sm text-slate-800 transition duration-200 hover:bg-red-400",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        <span>{text}</span>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button onClick={()=>onClick(text)} disabled={disabled} className={styles[type]}>
        <span>{text}</span>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      <span>{text}</span>
      {children}
    </button>
  );
}

export default Button;
