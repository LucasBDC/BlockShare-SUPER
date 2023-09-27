"use client"
import { useState } from "react";

export default function StyledInputs(props : any, onChange : any){ 
    
    return(
        <div className="">
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value}
                className="bg-transparent border-slate-400 border-x-2 border-y-2 rounded-lg py-2 w-[100%] h-[55px] focus:border-slate-200 px-4"
                onChange={props.onchange}
            />
        </div>
    )
}