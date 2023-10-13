import Logo from "../atoms/Logo";
import exlogo from "../../assets/images/logo-colored.png";
import flag from "../../assets/images/icon.png";
import Button from "../atoms/Button";
import { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Text from "../atoms/Text";

const Header = () => {
  const [search, setSearch] = useState("");
  // const handleSearch =()=>{}
  return (
    <>
      <div className="bg-white flex flex-col lg:flex-row px-24 py-6 box-border gap-2 justify-between items-center">
        <Logo src={exlogo} className="" />
        <div className="flex flex-col lg:flex-row ">
          <input
            type="text"
            className="w-full box-border outline-none  px-4 rounded-s-lg border-2 border-cprimary lg:border-r-0"
            placeholder="Search"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <select className="hidden w-[145px] outline-none box-border p-3 text-cfour lg:block border-2 border-cprimary border-l">
            <option className="" value="all_category">
              All Category
            </option>
            <option value="hot_offer">Hot offers</option>
            <option value="gift_box">Gift boxes</option>
            <option value="project">Projects</option>
            <option value="menu">Menu item</option>
            <option value="help">Help</option>
          </select>
          <Button
            body="Search"
            className="hidden box-border text-white w-[200px]  rounded-e-lg lg:block bg-gradient-to-b from-conea to-coneb"
          />
        </div>
        <div className="flex gap-4">
          <div className="text-ctwo w-fit flex flex-col gap-1  items-center">
            <FaUserLarge className="" />
            <Text body="Profile" className="text-xs" />
          </div>
          <div className="text-ctwo w-fit flex flex-col gap-1  items-center">
            <MdMessage className="" />
            <Text body="Message" className="text-xs" />
          </div>
          <div className="text-ctwo w-fit flex flex-col gap-1 items-center">
            <AiFillHeart className="" />
            <Text body="Orders" className="text-xs" />
          </div>
          <div className="text-ctwo w-max flex flex-col gap-1 items-center">
            <IoMdCart className="" />
            <Text body="My Cart" className="text-xs" />
          </div>
        </div>
      </div>
      <div className="font-medium flex justify-between bg-white text-cfour border px-24 py-4 border-[#E0E0E0] border-s-0 border-e-0 ">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <GiHamburgerMenu />
            <Text className="" body="All Category" />
          </div>
          <Text className="" body="Hot offers" />
          <Text className="" body="Gift boxes" />
          <Text className="" body="Projects" />
          <Text className="" body="Menu item" />
          <div className="flex items-center gap-2">
            <Text className="" body="Help" />
            <FiChevronDown className="text-ctwo" />
          </div>
        </div>
        <div className=" flex gap-6">
        <div className="flex items-center gap-1">
          <Text className="" body="English, USD" />
          <FiChevronDown className="text-ctwo" />
        </div>
        <div className="flex items-center gap-1">
          <Text className="" body="Ship to" />
          <Logo src={flag} alt='' className=""/>
          <FiChevronDown className="text-ctwo" />
        </div>
        </div>
      </div>
      <div className="bg-[#F7FAFC] px-24 pt-4 flex gap-2">
        <div className="flex items-center gap-1 text-ctwo">
          <Text className="" body="Home" />
          <FiChevronRight className="" />
        </div>
        <div className="flex items-center gap-1 text-ctwo">
          <Text className="" body="Clothings" />
          <FiChevronRight className="" />
        </div>
        <div className="flex items-center gap-1 text-ctwo">
          <Text className="" body="Men's wear" />
          <FiChevronRight className="" />
        </div>
        <div className="flex items-center gap-1 text-ctwo">
          <Text className="" body="Summer clothing" />
          <FiChevronRight className="" />
        </div>
      </div>
    </>
  );
};

export default Header;
