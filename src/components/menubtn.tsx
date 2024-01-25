export default function MenuBtn(props : any){
    return(
        <div className="">
            <button className={"text-md border-black border rounded-tl-xl rounded-br-xl py-2 px-10 hover:text-white hover:bg-black duration-300 ease-in-out " + props.className} onClick={props.onclick}>{props.nome}</button>
        </div>
    )
}