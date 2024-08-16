import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopup, getOpen } from "../slice/popupSlice";
import SelectCityContent from "../features/SelectCity.jsx/SelectCityContent";

function ShowPage() {
  const { isOpen, target } = useSelector(getOpen);
  const dispatch = useDispatch();

  return (
    <>
      {isOpen && (
        <PageContent>
          <div
            onClick={() => dispatch(closePopup())}
            className="fixed left-0 top-0 z-0 flex h-[100vh] w-full animate-opacityAnime items-center justify-center bg-gray_100"
          >
            {target === "select city" && (
              <SelectCityContent></SelectCityContent>
            )}
          </div>
        </PageContent>
      )}
    </>
  );
}
function PageContent({ children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return <>{children}</>;
}
export default ShowPage;
