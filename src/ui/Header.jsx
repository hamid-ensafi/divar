import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Search from "../features/Search/Search";
import Button from "./Button";
import Category from "../features/categury/Category";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { getOpen, openPopup } from "../slice/popupSlice";
import SelectionCity from "../features/SelectCity.jsx/SelectionCity";
function HeaderLayout() {
  const { target } = useSelector(getOpen);
  return (
    <Header type={target === "select city"}>
      <div className="w-full 2xl:container">
        <div className="flex justify-center">
          <nav className="relative flex w-11/12">
            <div className="flex w-2/3 items-center gap-2">
              <Logo></Logo>
              <SelectionCity></SelectionCity>
              <div className="flex w-8/12 items-center justify-evenly">
                <Category></Category>
                <Search></Search>
              </div>
            </div>
            <MenuButton></MenuButton>
          </nav>
        </div>
      </div>
    </Header>
  );
}
function Header({ type, children }) {
  return (
    <header
      className={
        type
          ? "flex justify-center py-4 text-lightGray shadow-Prime z-0"
          : "flex justify-center py-4 text-lightGray shadow-Prime z-10"
      }
    >
      {children}
    </header>
  );
}
export default HeaderLayout;
