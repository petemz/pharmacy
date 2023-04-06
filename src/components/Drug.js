import { useState } from "react"
import Dosage from "./Dosage"
import Duration from "./Duration"
import Frequency from "./Frequency"
import Note from "./Note"

function Drug ({drug}) {
    const [selectedComponent, setSelectedComponent] = useState('');
    const [overlay, setOverlay] = useState(false);
    const [alert, setAlert] = useState(false)

    const handleTabSelection = (componentName) => {
        setSelectedComponent(componentName);
        setOverlay(true)
    };
    const closeTab = () => {
        setSelectedComponent('')
        setOverlay(false)
    };
    const handlePrescribe = () => {
        setAlert(true)
        setOverlay(true)
    }

    const [val, setVal] = useState(0)
    const [unit, setUnit] = useState("mg") 
    const [freq, setFreq] = useState("Once")
    const [period, setPeriod] = useState("Daily")
    const [duration, setDuration] = useState(1)
    const [note, setNote] = useState("")

    return (
        <div className="text-[#053F63] max-sm:w-[410px] w-[610px] shadow-lg   pb-7 text-sm ">
            <div>
                <div style={{ backgroundColor: drug.color }} className={` h-64 flex justify-center items-center`}>
                    {drug.img.lg}
                </div>

                <div className="px-7">
                    <div className="pt-6 mb-8">
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">{drug.name}</h2>
                            <p className="text-base">{val + unit}</p>
                        </div>
                        <p className="text-gray-300 font-medium">{drug.description}</p>
                    </div>

                    <div className="mb-10 font-medium">
                        <div onClick={() => handleTabSelection('Dosage')} className="flex justify-between py-1 mb-6 cursor-pointer">
                            <p>Dosage</p>
                            <p className="text-blue-500">{val + unit}</p>
                        </div>

                        <div onClick={() => handleTabSelection('Frequency')} className="flex justify-between py-1 mb-6 cursor-pointer">
                            <p>Frequency</p>
                            <p className="text-blue-500">{freq + "/" + period}</p>
                        </div>

                        <div onClick={() => handleTabSelection('Duration')} className="flex justify-between py-1 mb-6 cursor-pointer">
                            <p>Duration</p>
                            <p className="text-blue-500">
                                {`${duration} ${duration === 1 ? "week" : "weeks"}`}
                            </p>
                        </div>

                        <div onClick={() => handleTabSelection('Note')} className="flex justify-between py-1 cursor-pointer">
                            <p>Note</p>
                            <p className="text-blue-500">Enter note</p>
                        </div>
                    </div>

                    <button 
                        className="bg-blue-500 rounded-xl text-white w-full h-14 flex justify-center items-center text-xl font-semibold"
                        onClick={handlePrescribe}
                    >
                        <div className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.564" height="20.564" viewBox="0 0 20.564 20.564">
                                <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M19.1,10.329h-6.61V3.719A1.469,1.469,0,0,0,11.017,2.25H9.548A1.469,1.469,0,0,0,8.079,3.719v6.61H1.469A1.469,1.469,0,0,0,0,11.8v1.469a1.469,1.469,0,0,0,1.469,1.469h6.61v6.61a1.469,1.469,0,0,0,1.469,1.469h1.469a1.469,1.469,0,0,0,1.469-1.469v-6.61H19.1a1.469,1.469,0,0,0,1.469-1.469V11.8A1.469,1.469,0,0,0,19.1,10.329Z" transform="translate(0 -2.25)" fill="#fff"/>
                            </svg>
                        </div>
                        <span>PRESCRIBE</span>
                    </button>
                </div>

                {overlay &&
                    <div className="max-sm:w-[410px] w-[610px] absolute z-8 top-0 h-full opacity-50 bg-black"></div>
                }
            </div>

            {alert &&
                <div className="absolute text-lg font-bold bg-white rounded-xl px-2 h-28 w-96 top-0 bottom-0 right-0 left-0 m-auto flex justify-center items-center">
                    <span>{drug.name} prescribed successfully!</span>
                </div>
            }

            <div className="fixed">
                {selectedComponent === "Dosage" && 
                    //classes "max-sm:w-[410px] w-[610px]" because of overflow on the right side. Note- it only overflows on absolute"
                    <div className="max-sm:w-[410px] w-[610px] h-max bottom-0 absolute z-50 rounded-t-3xl bg-white">
                        <Dosage val={val} setVal={setVal} unit={unit} setUnit={setUnit} closeTab={closeTab}/>
                    </div>
                }

                {selectedComponent === "Duration" && 
                    <div className="max-sm:w-[410px] w-[610px] h-max bottom-0 absolute z-50 rounded-t-3xl bg-white">
                        <Duration duration={duration} setDuration={setDuration} closeTab={closeTab}/>
                    </div>
                }

                {selectedComponent === "Frequency" && 
                    <div className="max-sm:w-[410px] w-[610px] h-max bottom-0 absolute z-50 rounded-t-3xl bg-white">
                        <Frequency freq={freq} setFreq={setFreq} period={period} setPeriod={setPeriod} closeTab={closeTab}/>
                    </div>
                }

                {selectedComponent === "Note" && 
                    <div className="max-sm:w-[410px] w-[610px] h-max bottom-0 absolute z-50 rounded-t-3xl bg-white">
                        <Note note={note} setNote={setNote} closeTab={closeTab}/>
                    </div>
                } 
            </div>
        </div>
    )
}

export default Drug