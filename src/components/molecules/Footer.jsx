import Logo from "../atoms/Logo";
import exlogo from "../../assets/images/logo-colored.png";
import apple from "../../assets/images/Group.png";
import google from "../../assets/images/market-button.png";
import iconam from "../../assets/images/iconam.png";
import Text from "../atoms/Text";
import {BiLogoFacebook} from 'react-icons/bi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'
import {TiSocialInstagram} from 'react-icons/ti'
import {AiFillYoutube} from 'react-icons/ai'
import {FaChevronUp} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className="px-24 py-14 bg-white flex gap-6">
      <div className="w-[35%]">
        <Logo src={exlogo} alt='' className=""/>
        <Text className="py-2" body='Best information about the company gies here but now lorem ipsum is' />
        
        <div className="text-[#BDC4CD] text-2xl flex gap-2 py-2">
            <BiLogoFacebook className="bg-[#BDC4CD] text-white text-2xl p-1 rounded-full"/>
            <AiFillTwitterCircle/>
            <RiLinkedinFill className="bg-[#BDC4CD] text-white text-2xl p-1 rounded-full"/>
            <TiSocialInstagram className="bg-[#BDC4CD] text-white text-2xl p-1 rounded-full"/>
            <AiFillYoutube className="bg-[#BDC4CD] text-white text-2xl p-1 rounded-full"/>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-full">
            <Text className="text-cfour font-medium pb-3" body='About'/>
            <Text className="text-ctwo pb-1" body='About Us'/>
            <Text className="text-ctwo pb-1" body='Find Store'/>
            <Text className="text-ctwo pb-1" body='Categories'/>
            <Text className="text-ctwo pb-1" body='Blogs'/>
        </div>
        <div className="w-full">
            <Text className="text-cfour font-medium pb-3" body='Partnership'/>
            <Text className="text-ctwo pb-1" body='About Us'/>
            <Text className="text-ctwo pb-1" body='Find Store'/>
            <Text className="text-ctwo pb-1" body='Categories'/>
            <Text className="text-ctwo pb-1" body='Blogs'/>
        </div>
        <div className="w-full">
            <Text className="text-cfour font-medium pb-3" body='Information'/>
            
            <Text className="text-ctwo pb-1" body='Help Center'/>
            <Text className="text-ctwo pb-1" body='Money Refund'/>
            <Text className="text-ctwo pb-1" body='Shipping'/>
            <Text className="text-ctwo pb-1" body='Contact us'/>
        </div>
        <div className="w-full">
            <Text className="text-cfour font-medium pb-3" body='For Users'/>
            <Text className="text-ctwo pb-1" body='Login'/>
            <Text className="text-ctwo pb-1" body='Register'/>
            <Text className="text-ctwo pb-1" body='Settings'/>
            <Text className="text-ctwo pb-1" body='My Orders'/>
        </div>
        <div className="w-full">
            <Text className="text-cfour font-medium pb-3" body='Get app'/>
            <Logo src={apple} className="py-1" alt=''/>
            <Logo src={google} className="py-1" alt=''/>
        </div>
        
      </div>
    </div>
    <div className="bg-[#EFF2F4] border flex items-center justify-between border-[#DEE2E7] px-24 py-4">
        <p>&copy; 2023 Ecommerce. </p>
        <div className="flex items-center gap-2">
        <Logo src={iconam} className="" />
        <p>English</p>
        <FaChevronUp/>
        </div>
    </div>
    </>
  )
}

export default Footer
