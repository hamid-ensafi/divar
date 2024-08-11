import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Search from "../features/Search/Search";
import Button from "./Button";
import Category from "../features/categury/Category";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
function Header() {
  return (
    <header className="flex justify-center py-4 text-lightGray shadow-Prime ">
      <div className="w-full 2xl:container">
        <div className="flex justify-center">
          <nav className="relative flex w-11/12">
            <div className="flex w-2/3 items-center gap-2">
              <Logo></Logo>
          
              <div>
                <Button type="row" text="تهران ">
                  <CiLocationOn />
                </Button>
              </div>

              <div className="flex w-8/12 items-center justify-evenly">
                <Category></Category>
                <Search></Search>
              </div>
            </div>
            <MenuButton></MenuButton>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
