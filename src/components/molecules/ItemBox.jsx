import {FiHeart} from 'react-icons/fi'
import Logo from '../atoms/Logo'
import Text from '../atoms/Text'
import PropTypes from 'prop-types'
// import DetailBox from './DetailBox'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'

const ItemBox = ({items}) => {
    const {updateDetail} = useContext(DataContext)
  return (
    <>
    <div className='flex py-1 px-4 items-center bg-white rounded border border-[#DEE2E7] my-2'>
      <div className='w-2/5'>
        <Logo src={items.pic} className='m-auto' alt='' />
      </div>
      <div className='w-full'>
        <div className='flex justify-between'>
        <Text className='text-cfour font-medium' body={items.name} />
        <FiHeart className='border border-[#DEE2E7] rounded p-2 text-[40px] text-cprimary'/>
        </div>
        <div className='flex items-center gap-3'>
        <Text className='text-xl text-cfour font-semibold' body={`$ ${items.price} `} />
        {items.offset > 0 ? <span className='text-ctwo line-through'>${items.offset}</span> : null}
        </div>
        <div className='flex gap-4 items-center pb-3'>
            <Logo src={items.rate} alt='' className=''/>
            <div className='text-ctwo flex items-center gap-3'><p className='h-2 w-2 rounded-full bg-[#DEE2E7]'></p>{items.order} orders<p className='h-2 w-2 rounded-full bg-[#DEE2E7]'></p></div>
            <Text className='text-[#00B517]' body={items.free && 'Free Shipping'} />
        </div>
        <Text className='text-cthree' body={items.description}/>
        <button onClick={() => updateDetail(items.id,items)} className='text-cprimary font-medium'>View details</button>
      </div>
    </div>
    
    </>
  )
}

ItemBox.propTypes ={
    items: PropTypes.object
}
export default ItemBox
