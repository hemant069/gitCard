import React from "react";

type ButtonProps = {
  value: string;
  onClick: () => void;
};
const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <div className="border px-5 py-2 rounded-md border-slate-300 text-white">
      <button onClick={onClick} className="w-full">
        {value}
      </button>
    </div>
  );
};

export default Button;
