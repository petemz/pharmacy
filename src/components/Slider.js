import React, { useState } from 'react';

function Slider({ range, step, val,  setVal } ) {
  const [currentValue, setValue] = useState(val);

  const handleChange = event => {
    setValue(event.target.value);
    setVal(event.target.value);
  };

  return (
    <div>
        <div className={"slider mb-1"}>
            <input type="range" min={range.min} max={range.max} step={range.step} value={currentValue} onChange={handleChange} />
        </div>
    </div>
  );
}

export default Slider;