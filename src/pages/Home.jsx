import React from "react";
import Ads from "../features/Ads/Ads";
import Aside from "../features/BrowseCategory/aside";

function Home() {
  return (
    <section className="mt-14 flex justify-center">
      <div className="w-full 2xl:container">
        <div className="flex justify-center">
          <Aside></Aside>
          <Ads></Ads>
        </div>
      </div>
    </section>
  );
}

export default Home;
