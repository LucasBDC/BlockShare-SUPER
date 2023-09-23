export default function MenuBtn(props : any){
    return(
        <div className="">
            <button className={"text-md border rounded-tl-xl rounded-br-xl py-2 px-10 hover:text-black hover:bg-white duration-300 ease-in-out " + props.className}>{props.nome}</button>
        </div>
    )
}