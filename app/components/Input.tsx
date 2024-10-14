"use client";
import React from "react";

type InputProps = {
  change: () => void;
  placeholder: string;
};
const Input = ({ change, placeholder }: InputProps) => {
  return (
    <div className="border px-2 py-2 w-[30rem] border-slate-300 rounded-lg">
      <input
        onChange={change}
        className="outline-none w-full bg-[#001d3d] text-white "
        placeholder={placeholder}
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default Input;
