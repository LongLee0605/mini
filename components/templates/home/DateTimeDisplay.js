import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={``}>
      <div className="w-full rounded-full border p-10 text-center">
        <p className="">{value}</p>
      </div>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
