import Text from "../atoms/Text"
import {PiListFill} from 'react-icons/pi'
import {PiGridFourFill} from 'react-icons/pi'
import {FiChevronLeft} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import {FiChevronDown} from 'react-icons/fi'
import Items from "../atoms/Items"
import ItemBox from "./ItemBox"
import DataContext from "../../context/DataContext"
import { useContext, useEffect, useState } from "react"

const DisplayBox = () => {
  const {allProduct} = useContext(DataContext)
  const [ss] = useState(Items)
  const [ss2,setSs2] = useState([])

  
  
  useEffect(()=>{
    const aa = []
    ss.map(each=>{
      for(let one of allProduct){
        for(let bb of each.brand){
          if(bb.includes(one) ){
            const found = aa.some(el=>el.id === each.id )
            if(!found){
              aa.push(each)
              return aa
            }
          }
        }
      }
    })
    setSs2(aa)
   
  },[allProduct,ss])
 
  return (
    <div className="">
      <div className="border py-3 px-5 flex items-center justify-between border-[#DEE2E7] rounded-md bg-white">
        <p className="w-2/4 text-cfour">12,911 items in<span className="font-semibold"> Mobile accessory</span></p>
        <div className="flex gap-2">
            <input type="checkbox" defaultChecked />
        <Text className="" body='Verified only'/>
        </div>
        <select className="w-36 border p-1 border-[#DEE2E7] rounded">
            <option>Featured</option>
        </select>
        <div className="flex gap-1 text-3xl">
            <PiGridFourFill />
            <PiListFill /></div>
      </div>
      
      {ss2.length > 0 ? ss2.map(each=><ItemBox key={each.id} items={each}/>): ss.map(each=><ItemBox key={each.id} items={each}/>)}
      <div className="flex justify-end gap-3 my-4">
        <p className="flex items-center gap-3 p-2 rounded bg-white border border-[#DEE2E7]">Show 10 <FiChevronDown className="text-2xl text-[#DEE2E7]"/></p>
        <table className="border rounded bg-white ">
            <tbody>

            <tr className="border">
                <td className="border px-4 py-2 text-2xl"><FiChevronLeft/></td>
                <td className="border px-4 py-2 bg-[#DEE2E7]">1</td>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2 text-2xl"><FiChevronRight/></td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default DisplayBox
