import { useState } from "react"
import Slider from "./Slider"


function Dosage ({ unit, setUnit, val, setVal }) {
    const range = {min:100, max: 900, step:100}
    const currentValue = useState(val)
    //const [dispUnit, setUnit] = useState("mg")
    const dispUnit = unit

    const units = ["kg", "g", "mg", "mcg", "L", "ml", "cc", "mol", "Mmol",]

    const unitInput = units.map(unit => {
        return (
            <label key={unit} htmlFor={unit}>
                {/* connected two ternary statements to display mg as the default */}
                <input  type="radio" value={unit}  
                        checked={unit === "mg" ?    dispUnit === "mg" ? true : false 
                                               :    unit === dispUnit}
                        onChange={() => setUnit(unit)}/>
                <span>{unit}</span>
            </label>
        )
    })
    

    return (
        <div className=" p-7 pb-14 text-gray-500">
            <div className="mb-8">
                <p className="text-3xl text-[#053F63]">{val}</p>
                <span className="text-lg ">{dispUnit}</span>
            </div>

            <div className="mb-8">
                <h3 className="text-base text-[#053F63] font-medium mb-2">Dosage</h3>
                <Slider currentValue={currentValue} val={val} setVal={setVal} range={range}/>
                <div className="flex justify-between">
                    <span>{range.min + dispUnit}</span>
                    <span>{range.max + dispUnit}</span>
                </div>
            </div>

            <div>
                <h3 className="text-base text-[#053F63] font-medium mb-3">Unit</h3>

                <div className="grid grid-cols-4 gap-y-8 text-sm ">
                    {unitInput}
                </div>           
            </div>
        </div>
    )
} 

export default Dosage