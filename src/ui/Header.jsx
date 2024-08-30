import React from "react";
import Search from "../features/Search/Search";
import Category from "../features/categury/Category";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { getOpen } from "../slice/popupSlice";
import SelectionCity from "../features/SelectCity.jsx/SelectionCity";
function HeaderLayout() {
  
  return (
    <Header>
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
function Header({children }) {
  const { target:type } = useSelector(getOpen);
  return (
    <header 
      className={
        type==='select city'
          ? "sticky top-0 z-0 flex justify-center bg-darkGray py-4 text-lightGray shadow-Prime"
          : "sticky top-0 z-20 flex justify-center bg-darkGray py-4  text-lightGray shadow-Prime"
      }
    >
      {children}
    </header>
  );
}
export default HeaderLayout;
