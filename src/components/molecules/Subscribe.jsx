import Button from "../atoms/Button"
import Text from "../atoms/Text"
import {FaRegEnvelope} from 'react-icons/fa'


const Subscribe = () => {
  return (
    <div className="bg-[#EFF2F4] px-24 py-10">
      <Text className="font-semibold text-xl text-cfour text-center" body='Subscribe on our newsletter'/>
      <Text className="text-[#606060] text-center" body='Get daily news on upcoming offers from many suppliers all over the world'/>
      <div className="flex gap-2 pt-5 justify-center">
      <div className="flex gap-2 items-center w-max p-2 bg-white rounded border border-[#DEE2E7]">
        <FaRegEnvelope className="text-[#DEE2E7] text-2xl"/>
        <input type="text" className="w-80 outline-none" placeholder={`Email`}/>
      </div>
      <Button className='rounded text-white bg-cprimary px-6' body="Subscribe"/>
      </div>
    </div>
  )
}

export default Subscribe
