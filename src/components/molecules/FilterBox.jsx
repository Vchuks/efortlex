import Button from "../atoms/Button";
import Checkitems from "../atoms/Checkitems";
import Brand from "../atoms/Brand";
import Condition from "../atoms/Condition";
import Feature from "../atoms/Feature";
import Rating from '../atoms/Rating';
import Filter from "../atoms/Filter";
import Text from "../atoms/Text";
import DataContext from '../../context/DataContext'
import { useContext } from 'react'

const FilterBox = () => {
  const {handleBrandChange,handleConditionChange,handleFeatureChange,handleRatingChange} = useContext(DataContext)

  return (
    <>
      <div className="pt-4">
        <Checkitems maintext="Brands" className="hidden" />
        {Brand.map((each, idx) => (
          <Filter key={idx} title={each} listvalue={each}  onChange={handleBrandChange} />
        ))}
        <Text body="See all" className="text-cprimary pt-2" />
      </div>
      <div className="pt-4">
        <Checkitems maintext="Features" className="hidden" />
        {Feature.map((each, idx) => (
          <Filter key={idx} title={each} listvalue={each} onChange={handleFeatureChange} />
        ))}
        <Text body="See all" className="text-cprimary pt-2" />
      </div>
      <div className="pt-4">
        <Checkitems maintext="Price range" className="hidden" />
        <div className="relative my-4 w-full h-1 rounded-s-full rounded-e-full bg-gradient-to-r from-[#AFD0FF] from-25% via-cprimary via-30% to-[#AFD0FF] to-100%">
          <p className="absolute left-1/4 top-[-5px] z-10 bg-white w-4 h-4 rounded-full border border-[#AFD0FF]"></p>
          <p className="absolute top-[-5px] right-1/4 z-10 bg-white w-4 h-4 rounded-full border border-[#AFD0FF]"></p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2 box-border">
            <div className="w-full">
              <Text className="text-cfour pb-1" body="Min" />
              <Text
                className="border border-[#BDC4CD] py-1 px-2 rounded bg-white text-[#BDC4CD]"
                body="0"
              />
            </div>
            <div className="w-full">
              <Text className="text-cfour pb-1" body="Max" />
              <Text
                className="border border-[#BDC4CD] py-1 px-2 rounded bg-white text-[#BDC4CD]"
                body="999999"
              />
            </div>
          </div>
          <Button className="border border-[#BDC4CD] py-1 rounded w-full text-cprimary bg-white" body="Apply"/>
        </div>
      </div>
      <div className='py-5'>
        <Checkitems maintext='Condition' className="hidden"/>
        {Condition.map((each, idx) => {
            
          return <Filter key={idx} type="radio" title={each.title} listname='condition' listvalue={each.title} onChange={handleConditionChange} />
          
})}
      </div>
      <div className='py-5'>
        <Checkitems maintext='Ratings' className="hidden"/>
        {Rating.map((each, idx) => {
            
          return <Filter key={idx} src={each.pic} imgclassName='py-1' listname={each.name} listvalue={each.name} onChange={handleRatingChange} />
          
})}
      </div>
    </>
  );
};

export default FilterBox;
