export default function StyledButtons(props : any){
    return(
        <div className="">
            <input type="submit" value={props.texto} 
            className="w-[100%] bg-purple-800 text-slate-300 p-3 text-lg 
            rounded-lg cursor-pointer hover:bg-purple-700 active:bg-purple-950 shadow"
            />
        </div>
    )
}