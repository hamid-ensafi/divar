import React from "react";
import Ads from "../features/Ads/Ads";

function Home() {
  return (
    <section className="mt-14 flex justify-center">
      <div className="w-full 2xl:container">
        <div className="flex justify-center">
          <div className="w-[20%]">
            <p>دسته ها </p>
          </div>
          <Ads></Ads>
        </div>
      </div>
    </section>
  );
}

export default Home;
