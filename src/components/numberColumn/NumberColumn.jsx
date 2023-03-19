import React from "react";

const NumberColumn = () => {
  const setNumberList = () => {
    const array =[];
    for (let i = 1; i < 100; i++) {
        array.push(<span key={i} className="text-right text-[16px] px-[5px]">{i}</span>);
    }
    return array;
  }
  return (
    <div className="flex relative overflow-hidden w-[50px] h-100%">
      <div className="flex flex-col pl-[8px] absolute ">{setNumberList()}</div>
    </div>
  );
};

export default NumberColumn;