import { useState, useEffect, useRef } from "react"
import Dosage from "./Dosage"
import Duration from "./Duration"
import Frequency from "./Frequency"
import Note from "./Note"

function Drug ({drug}) {
    const [selectedComponent, setSelectedComponent] = useState('');
    const [overlay, setOverlay] = useState(false);

    const handleComponentSelection = (componentName) => {
        setSelectedComponent(componentName);
        setOverlay(true)
    };
    const closeTab = () => {
        setSelectedComponent('')
        setOverlay(false)
    };

    console.log(drug.dosage)
    const [val, setVal] = useState(0)
    const [unit, setUnit] = useState("mg") 

    const [freq, setFreq] = useState("Once")
    const [period, setPeriod] = useState("Daily")

    const [duration, setDuration] = useState(1)

    const [note, setNote] = useState("")

    return (
        <div className="text-[#053F63] h-screen w-full text-sm">
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
                        <div onClick={() => handleComponentSelection('Dosage')} className="flex justify-between py-1 mb-6 cursor-pointer">
                            <p>Dosage</p>
                            <p className="text-blue-500">{val + unit}</p>
                        </div>

                        <div onClick={() => handleComponentSelection('Frequency')} className="flex justify-between py-1 mb-6 cursor-pointer">
                            <p>Frequency</p>
                            <p className="text-blue-500">{freq + "/" + period}</p>
                        </div>

                        <div onClick={() => handleComponentSelection('Duration')} className="flex justify-between py-1 mb-6 cursor-pointer">
                            <p>Duration</p>
                            <p className="text-blue-500">
                                {`${duration} ${duration == 1 ? "week" : "weeks"}`}
                            </p>
                        </div>

                        <div onClick={() => handleComponentSelection('Note')} className="flex justify-between py-1 cursor-pointer">
                            <p>Note</p>
                            <p className="text-blue-500">Enter note</p>
                        </div>
                    </div>

                    <button className="bg-blue-500 rounded-xl text-white w-full h-14 flex justify-center items-center text-xl font-semibold">
                        <div className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.564" height="20.564" viewBox="0 0 20.564 20.564">
                                <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M19.1,10.329h-6.61V3.719A1.469,1.469,0,0,0,11.017,2.25H9.548A1.469,1.469,0,0,0,8.079,3.719v6.61H1.469A1.469,1.469,0,0,0,0,11.8v1.469a1.469,1.469,0,0,0,1.469,1.469h6.61v6.61a1.469,1.469,0,0,0,1.469,1.469h1.469a1.469,1.469,0,0,0,1.469-1.469v-6.61H19.1a1.469,1.469,0,0,0,1.469-1.469V11.8A1.469,1.469,0,0,0,19.1,10.329Z" transform="translate(0 -2.25)" fill="#fff"/>
                            </svg>
                        </div>
                        <span>PRESCRIBE</span>
                    </button>
                </div>
            </div>

            {selectedComponent === "Dosage" && 
                <div className="w-full h-max bottom-0 absolute z-50 rounded-t-3xl bg-white">
                    <Dosage val={val} setVal={setVal} unit={unit} setUnit={setUnit}/>

                    <div onClick={closeTab} className="absolute cursor-pointer top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute" strokeWidth="0" stroke="#1e00ff"></path> </svg>
                    </div>
                </div>
            }

            {selectedComponent === "Duration" && 
                <div className="w-full h-max bottom-0 absolute z-50 rounded-t-3xl bg-white">
                    <Duration duration={duration} setDuration={setDuration}/>

                    <div onClick={closeTab} className="absolute cursor-pointer top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute" strokeWidth="0" stroke="#1e00ff"></path> </svg>
                    </div>
                </div>
            }

            {selectedComponent === "Frequency" && 
                <div className="w-full h-max bottom-0 absolute z-50 rounded-t-3xl bg-white">
                    <Frequency freq={freq} setFreq={setFreq} period={period} setPeriod={setPeriod}/>

                    <div onClick={closeTab} className="absolute cursor-pointer top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute" strokeWidth="0" stroke="#1e00ff"></path> </svg>
                    </div>
                </div>
            }

            {selectedComponent === "Note" && 
                <div className="w-full h-max bottom-0 absolute z-50 rounded-t-3xl bg-white">
                    <Note note={note} setNote={setNote}/>

                    <div onClick={closeTab} className="absolute cursor-pointer top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute" strokeWidth="0" stroke="#1e00ff"></path> </svg>
                    </div>
                </div>
            }

            {overlay  && <div className="w-full absolute z-0 top-0 h-full opacity-50 bg-black"></div>}

        </div>
    )
}

export default Drug