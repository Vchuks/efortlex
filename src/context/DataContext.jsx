import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const DataContext = createContext();

export function DataProvider({ children }) {
  const navigate = useNavigate();

  const [brandChange, setBrandChange] = useState([])
const [featureChange, setFeatureChange] = useState([])
const [conditionChange, setConditionChange] = useState([])
const [ratingChange, setRatingChange] = useState([])

const handleBrandChange =(event)=>{
  let update = [...brandChange]
  if(event.target.checked){
    update = [...brandChange, event.target.value]
  }else{
    update.splice(brandChange.indexOf(event.target.value),1)
  }  
  setBrandChange(update)
}
const handleFeatureChange =(event)=>{
  let update = [...featureChange]
  if(event.target.checked){
    update = [...featureChange, event.target.value]
  }else{
    update.splice(featureChange.indexOf(event.target.value),1)
  }  
  setFeatureChange(update)
}
const handleConditionChange =(event)=>{
  let update = [conditionChange]
  if(event.target.checked){
    update = [event.target.value]
  } 
  setConditionChange(update)
}
const handleRatingChange =(event)=>{
  let update = [...ratingChange]
  if(event.target.checked){
    update = [...ratingChange, event.target.value]
  }else{
    update.splice(ratingChange.indexOf(event.target.value),1)
  }  
  setRatingChange(update)
}
const allProduct = [...brandChange, ...featureChange, ...ratingChange, ...conditionChange]

  const [item, setItem] = useState({});
  const updateDetail = (id, eachItem) => {
    if (id) {
      setItem(eachItem);
      navigate(`/details_page/${id}`);
    }
  };
  useEffect(() => {
    item;
  }, [item]);
  return (
    <DataContext.Provider value={{ item, updateDetail,handleRatingChange,handleBrandChange,handleConditionChange,handleFeatureChange,allProduct }}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.any,
};

export default DataContext;
