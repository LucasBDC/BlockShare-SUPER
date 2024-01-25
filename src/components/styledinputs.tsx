"use client"
import { useState } from "react";

export default function StyledInputs(props : any, onChange : any){ 
    
    return(
        <div className="">
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value}
                className="border-slate-700 border-2 text-slate-900 rounded-md py-2 w-[100%] h-[55px] focus:border-slate-200 px-4"
                style={{background: 'linear-gradient(0deg, rgba(88, 88, 88, 0.15) 0%, rgba(88, 88, 88, 0.15) 100%), rgba(208, 208, 208, 0.05)'}}
                onChange={props.onchange}
                name={props.name}
            />
        </div>
    )
}