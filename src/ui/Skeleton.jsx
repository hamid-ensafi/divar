import React from "react";
function SkeletonApp({ Length = 3 }) {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <Skeleton key={i}></Skeleton>
      ))}
    </>
  );
}
function Skeleton() {
  return (
    <div className="flex w-[32%] animate-pulse items-center rounded border border-gray_200">
      <div className="flex h-full w-full justify-evenly p-4">
        <div className="flex flex-col justify-between">
          <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>

          <div>
            <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>

            <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
        <div className="self-end">
          <span className="text-slate-50">
            <div className="mb-4 h-2.5 w-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </span>
        </div>
        <div>
          <figure className="h-[136px] w-[136px]">
            <svg
              className="h-full w-full text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SkeletonApp;
