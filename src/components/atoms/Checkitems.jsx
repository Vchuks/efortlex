import Text from "./Text"
import { FiChevronUp } from "react-icons/fi";
import PropTypes from 'prop-types'


const Checkitems = ({maintext,text1,text2,text3,text4, className='text-cthree'}) => {
  return (
    <div className=" box-border flex flex-col gap-2 border-t">
        <div className="flex items-center justify-between py-2">
            <Text className="text-cfour font-semibold" body={maintext}/>
            <FiChevronUp className="text-ctwo"/>
        </div>
      <Text className={className} body={text1}/>
      <Text className={className} body={text2}/>
      <Text className={className} body={text3}/>
      <Text className={className} body={text4}/>
    </div>
  )
}

Checkitems.propTypes ={
    maintext: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string,
    className: PropTypes.string
}

export default Checkitems
