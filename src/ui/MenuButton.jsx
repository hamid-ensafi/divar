import React from "react";
import Button from "./Button";
import { CiUser } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { SlSupport } from "react-icons/sl";
import { TiWorldOutline } from "react-icons/ti";

function MenuButton() {
  return (
    <div className="flex w-1/3 justify-evenly">
      <Button type="rowRevers" text="دیوار من">
        <CiUser />
      </Button>
      <Button type="rowRevers" text="چت">
        <FiMessageSquare />
      </Button>
      <Button type="rowRevers" text="پشتیبانی">
        <SlSupport />
      </Button>
      <Button type="rowRevers" text="Fa">
        <TiWorldOutline />
      </Button>
      <Button type="redButton" text="ثبت اگهی"></Button>
      <button className=""></button>
    </div>
  );
}

export default MenuButton;
