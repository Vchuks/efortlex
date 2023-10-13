// import Button from "../atoms/Button"
import Logo from "../atoms/Logo";
import PropTypes from "prop-types";
import DataContext from "../../context/DataContext";
import { useContext } from "react";
import Text from "../atoms/Text";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdBasket } from "react-icons/io";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import iconam from "../../assets/images/icon.png";
import Button from "../atoms/Button";
import Items from "../atoms/Items";

const DetailBox = () => {
  const { item } = useContext(DataContext);

  return (
    <div className="px-24 pt-6 pb-24 bg-[#F7FAFC]">
      <div className="flex gap-4 bg-white rounded p-4 border border-[#DEE2E7]">
        <div className="w-full bg-white">
          <Logo
            src={item.pic}
            className="w-full border rounded p-3 m-auto border-[#DEE2E7]"
            alt=""
          />
          <div className="flex justify-between mt-3">
            {item.smallpic.map((each, idx) => (
              <Logo
                key={idx}
                src={each}
                className="p-2 w-12 h-12 border border-[#DEE2E7] bg-white rounded object-contain"
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-1 text-[#00B517]">
            <BsCheck2 /> <Text className="" body="In stock" />
          </div>
          <Text className="text-xl font-semibold text-cfour" body={item.name} />
          <div className="flex gap-4 items-center py-3">
            <Logo src={item.rate} alt="" className="" />
            <span className="text-[#FF9017]">9.3</span>
            <div className="text-ctwo flex items-center gap-2">
              <p className="h-2 w-2 rounded-full bg-[#DEE2E7]"></p>
              <MdOutlineMessage />
              32 reviews<p className="h-2 w-2 rounded-full bg-[#DEE2E7]"></p>
            </div>
            <div className="text-ctwo flex items-center gap-1">
              <IoMdBasket />
              {item.order} sold
            </div>
          </div>
          <div className="flex justify-between bg-[#FFF0DF] p-4">
            <div className="w-full text-center">
              <p className="text-[#FA3434] text-lg font-semibold">
                {item.price}
              </p>
              <Text className="text-[#606060] text-[13px]" body="50-100 pcs" />
            </div>
            <div className="w-full text-center border-r border-l border-[#BDC1C8]">
              <p className="text-cfour text-lg font-semibold">
                {parseFloat(item.price) - 20}.00
              </p>
              <Text className="text-[#606060] text-[13px]" body="100-700 pcs" />
            </div>
            <div className="w-full text-center">
              <p className="text-cfour text-lg font-semibold">
                {parseFloat(item.price) - 40.0}.00
              </p>
              <Text className="text-[#606060] text-[13px]" body="700+ pcs" />
            </div>
          </div>
          <div className="flex items-center justify-between border-b py-3">
            <Text className="text-ctwo w-full" body="Price:" />
            <Text className="text-cthree w-full" body="Negotiable" />
          </div>
          <div className=" border-b py-2">
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Type:" />
              <Text className="text-cthree w-full" body="Classic phones" />
            </div>
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Material:" />
              <Text className="text-cthree w-full" body="Plastic material" />
            </div>
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Design:" />
              <Text className="text-cthree w-full" body="Modern nice" />
            </div>
          </div>
          <div className=" border-b py-2">
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Customization:" />
              <Text
                className="text-cthree w-full"
                body="Customized logo and design custom packages"
              />
            </div>
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Protection:" />
              <Text className="text-cthree w-full" body="Refund Policy" />
            </div>
            <div className="flex items-center justify-between py-1">
              <Text className="text-ctwo w-full" body="Warranty:" />
              <Text
                className="text-cthree w-full"
                body="2 years full warranty "
              />
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="border border-[#DEE2E7] rounded p-2">
            <div className="flex gap-2 border-b pb-3 border-[#DEE2E7]">
              <Text
                className="text-[#4ca7a799] px-4 py-1 text-[28px] font-semibold rounded bg-[#C6F3F1]"
                body="R"
              />
              <div className="text-cfour">
                <Text className="" body="Supplier " />
                <p>Guanjoi Trading LLC</p>
              </div>
            </div>
            <div className=" py-2">
              <div className="flex items-center justify-between gap-2 py-1">
                <Logo src={iconam} alt="" className="" />
                <Text className="text-cthree w-full" body="Germany, Berlin" />
              </div>
              <div className="flex text-cthree gap-3 items-center justify-between py-1">
                <MdOutlineVerifiedUser className="text-xl" />
                <Text className="text-cthree w-full" body="Verified Seller" />
              </div>
              <div className="flex text-cthree gap-3 items-center justify-between py-1">
                <TbWorld className="text-xl" />
                <Text
                  className="text-cthree w-full"
                  body="Worldwide shipping "
                />
              </div>
            </div>
            <Button
              className="w-full text-white my-3 py-2 bg-gradient-to-b from-conea to-coneb rounded-md"
              body="Send inquiry"
            />
            <Button
              className="w-full bg-white border mb-2 border-[#DEE2E7] py-2 text-cprimary rounded-md"
              body="Seller's profile"
            />
          </div>
          <div className="flex justify-center gap-2 py-4 items-center text-cprimary font-medium">
            <AiOutlineHeart className="text-xl" />
            <Text className="" body="Save for later" />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
      <div className="w-full mt-4 bg-white text-three rounded p-4 border border-[#DEE2E7]">
        <div className="border-b py-2 border-[#DEE2E7]">
          <a className="p-2 border-b-2 border-cprimary text-cprimary">
            Description
          </a>
          <a className="p-2">Reviews</a>
          <a className="p-2">Shipping</a>
          <a className="p-2">About seller</a>
        </div>
        <Text className="py-4 w-11/12" body={item.fulldescription} />
        <div className="w-2/4 border border-[#DEE2E7] rounded my-4">
          <div className="border-b border-[#DEE2E7] flex">
            <Text className="w-2/4 px-2 py-2 bg-[#EFF2F4] " body="Model" />
            <Text className="w-full px-2 py-2" body="#8786867" />
          </div>
          <div className="border-b border-[#DEE2E7] flex">
            <Text className="w-2/4 px-2 py-2 bg-[#EFF2F4] " body="Style" />
            <Text className="w-full px-2 py-2" body="Classic style" />
          </div>
          <div className="border-b border-[#DEE2E7] flex">
            <Text
              className="w-2/4 px-2 py-2 bg-[#EFF2F4] "
              body="Certificate"
            />
            <Text className="w-full px-2 py-2" body="ISO-898921212" />
          </div>
          <div className="border-b border-[#DEE2E7] flex">
            <Text className="w-2/4 px-2 py-2 bg-[#EFF2F4] " body="Size" />
            <Text className="w-full px-2 py-2" body="34mm x 450mm x 19mm" />
          </div>
          <div className=" flex">
            <Text className="w-2/4 px-2 py-2 bg-[#EFF2F4] " body="Memory" />
            <Text className="w-full px-2 py-2" body="36GB RAM" />
          </div>
        </div>
        <div>
          <div className="flex gap-2 py-1 items-center">
            <BsCheck2 className="text-xl" />
            <Text className="" body="Some great feature name here" />
          </div>
          <div className="flex gap-2 py-1 items-center">
            <BsCheck2 className="text-xl" />
            <Text className="" body="Lorem ipsum dolor sit amet, consectetur " />
          </div>
          <div className="flex gap-2 py-1 items-center">
            <BsCheck2 className="text-xl" />
            <Text className="" body="Duis aute irure dolor in reprehenderit" />
          </div>
          <div className="flex gap-2 py-1 items-center">
            <BsCheck2 className="text-xl" />
            <Text className="" body="Some great feature name here" />
          </div>
        </div>
      </div>
      <div className="w-1/3 pt-4">
        <div className="bg-white p-4 rounded border border-[#DEE2E7]">
          <Text className="font-semibold text-cfour" body='You may like'/>
          <div className="">
            {Items.map(each=>{
              return (<>
              <div className="flex gap-2 mt-2">
              <Logo src={each.pic} className="w-16 p-2 rounded border h-16 object-contain"/>
            <div className="text-sm">
              <Text className="text-cfour" body={each.name}/>
              <p className="text-ctwo">${each.price}</p>
            </div>
            </div>
            </>)})}
          </div>
        </div>
      </div>
      </div>
      <div className="w-full py-4">
        <div className="bg-white p-4 rounded border border-[#DEE2E7]">
          <Text className="font-semibold text-cfour" body='You may like'/>
          <div className="flex gap-2">
            {Items.map(each=>{
              return (<>
              <div className="w-full mt-2">
              <Logo src={each.pic} className="w-full p-2 rounded-md border  object-contain"/>
            <div className="py-4">
              <Text className="text-cfour" body={each.name}/>
              <p className="text-ctwo">${each.price}</p>
            </div>
            </div>
            </>)})}
          </div>
        </div>
      </div>
      <div className="p-10 rounded-md text-white bg-gradient-to-b from-conea to-coneb ">
        <Text className="text-2xl font-semibold" body='Super discount on more than 100 USD'/>
        <Text className="opacity-70" body='Have you ever finally just write dummy info'/>
      </div>
    </div>
  );
};

DetailBox.propTypes = {
  item: PropTypes.object,
};
export default DetailBox;
