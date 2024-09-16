import React from "react";
import { LuMessageCircle } from "react-icons/lu";
import { numberFormat } from "../../utils/helper";
import { useDateFormater } from "../../hooks/useDate";
import { useNavigate } from "react-router-dom";

function AdsItem({ article }) {
  const { id, cities, created_at, title, price, image } = article;
  const { cityname } = cities;
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`article/${id}`)}
      className="flex max-h-[168px] w-[100%] cursor-pointer items-center rounded border border-gray_200 md:w-[49%] lg:w-[32%]"
    >
      <div className="relative flex h-full w-full justify-between p-4">
        <div className="flex flex-col justify-between">
          <h2 className="text-white">{title}</h2>
          <div>
            <p className="text-sm text-lightGray">
              {numberFormat(price)} تومان
            </p>
            <p className="text-sm text-lightGray">
              {useDateFormater(created_at)}

              {cityname}
            </p>
          </div>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] transform self-end">
          <span className="text-slate-50">
            <LuMessageCircle />
          </span>
        </div>
        <div>
          <figure className="h-[136px] w-[136px]">
            <img
              className="block h-full w-full rounded object-cover object-center"
              src={image}
              alt=""
            />
          </figure>
        </div>
      </div>
    </article>
  );
}

export default AdsItem;
