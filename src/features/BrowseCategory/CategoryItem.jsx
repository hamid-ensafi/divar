import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ item }) {
  const { id, name, emojy } = item;
    return <li className="py-2 "><Link className="text-lightGray text-sm" to={`/category=${id}`}> { name} </Link></li>;
}

export default CategoryItem;
