import React from "react";

interface ComingSoonType {
  label: string;
}

const ComingSoon = (props: ComingSoonType) => {
  return (
    <div className="p-5 h-full w-full flex justify-center text-slate-700 items-center text-4xl font-bold flex-col">
      <p className="text-7xl">{props.label}</p>
      <p>Coming Soon...</p>
    </div>
  );
};

export default ComingSoon;
