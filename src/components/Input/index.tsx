import React from "react";

interface Props{
  name: string;
  label: string;
  value: string;
  error?: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input ( {name, error = "", type = "text", value, label = "", onChange}: Props) {
  return (
    <div>
    <label className="flex flex-col text-zinc-500 pl-6 mt-6 gap-3">
     {label}
          <input className="w-[340px] outline-none p-2 rounded-md border-2 border-zinc-200"
           type={type} name={name} value={value} onChange={onChange} />
    </label>  
    {error && <span className="text-red-500 pl-14">{error}</span>}  
     </div> 
  );
}