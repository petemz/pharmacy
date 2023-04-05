import React from "react";

function Frequency ({ freq, setFreq, period, setPeriod }) {
    const times = ["Daily", "2 days", "3 days", "Weekly", "2 weeks", "Monthly"]

    //const [freq, setFreq] = useState("1 time");
    const freqs = ["Once", "2 times", "3 times",]

    const timesInput = times.map(time => {
        return (
            <label key={time} htmlFor={time}>
                {/* connected two ternary statements to display 1 as the default */}
                <input  type="radio" value={time}  
                        checked={time === "Daily" ?    period === "Daily" ? true : false 
                                               :    time === period}
                        onChange={() => setPeriod(time)}/>
                <span>{time}</span>
            </label>
        )
    })

    const freqInput = freqs.map(freqx => {
        return (
            <label key={freqx} htmlFor={freqx}>
                {/* connected two ternary statements to display 1 as the default */}
                <input  type="radio" value={freqx}  
                        checked={freqx === "Once" ? freq === "Once" ? true : false 
                                                    : freqx === freq}
                        onChange={() => setFreq(freqx)}/>
                <span>{freqx}</span>
            </label>
        )
    })

    return(
        <div className=" p-7 pb-16 text-gray-500">
            <div className="mb-8">
                <p className="text-3xl text-[#053F63]">{freq}</p>
                <span className="text-lg ">{period}</span>
            </div>

            <div className="mb-8">
                <h3 className="text-base text-[#053F63] font-medium mb-4">Number</h3>

                <div className="grid grid-cols-3 gap-y-8 text-sm">
                    {freqInput}
                </div>
            </div>

            <div >
                <h3 className="text-base text-[#053F63] font-medium mb-4">Often</h3>

                <div className="grid grid-cols-3 gap-y-8 text-sm">
                    {timesInput}
                </div>
            </div>
        </div>
    )
}

export default Frequency