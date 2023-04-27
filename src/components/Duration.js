import Slider from "./Slider"

function Duration ({ duration, setDuration, closeTab }) {
    const range = {min:1, max: 12, step:1,}
    //const [currentValue, setCurrentValue] = useState(duration)

    return (
        <div className="p-7 pb-14 text-gray-500">
            <div className="mb-8">
                <p className="text-3xl text-[#053F63]">{duration}</p>
                <span className="text-lg ">
                    {duration === 1 ? "week" : "weeks"}
                </span>
            </div>
            <div>
                <h3 className="text-base text-[#053F63] font-medium mb-2">Duration</h3>
                <Slider val={duration}  setVal={setDuration} range={range}/>
                <div className="flex justify-between">
                    <span>{range.min + "day"}</span>
                    <span>{range.max + "weeks"}</span>
                </div>
            </div>

            <button 
                className="mb-16 bg-blue-500 rounded-xl text-white mt-8 px-8 h-14 flex m-auto justify-center items-center text-xl font-semibold"
                onClick={closeTab}    
            >
                <span>DONE</span>
            </button>
        </div>
    )
}

export default Duration