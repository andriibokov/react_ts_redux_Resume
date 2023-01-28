import React, { createRef, useEffect, useState } from "react";

const NumberColumn = () => {
  const numberBox = createRef();
  const [height, setHeight] = useState(null)

  useEffect(() => {
    setHeight(numberBox.current.getBoundingClientRect().height)
  }, [numberBox]);

  const getAnimalsContent = () => {
    if (Math.round(height / 28) <= 0 ) return;
    console.log(Math.round(height / 28));
    let numberArray = [];
    for (let i = 1; i <= 31; i++) {
      numberArray.push(<span  key={i} className="leading-[100%] text-[18px] p-[5px] text-right">{i}</span>);
    }
    return numberArray;
  };

  return (
    <div ref={numberBox} className="flex flex-col">
      {getAnimalsContent()}
    </div>
  );
};

export default NumberColumn;