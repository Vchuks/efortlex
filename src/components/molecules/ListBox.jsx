import Checkitems from "../atoms/Checkitems"
import Text from "../atoms/Text"
import DisplayBox from "./DisplayBox"
import FilterBox from "./FilterBox"

const ListBox = () => {
  return (
    <>
      <div className="px-24 py-6 bg-[#F7FAFC] flex gap-6">
        <div className="p w-1/6">
            <Checkitems maintext='Category' text1='Mobile accessory' text2='Electronics' text3='Smartphones' text4='Modern tech'/>
            <Text body='See all' className='text-cprimary pt-2'/>
            <FilterBox/>
        </div>
        <div className="w-full">
            <DisplayBox/>
        </div>
      </div>
    </>
  )
}

export default ListBox
