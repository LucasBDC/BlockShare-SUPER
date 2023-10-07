export default function Printela(props: any){
    return(
        <main className="h-screen w-screen flex flex-col gap-4 items-center justify-center" style={{background: 'linear-gradient(293deg, rgba(233, 172, 255, 0.30) 0%, rgba(205, 188, 255, 0.00) 50%, rgba(228, 153, 255, 0.30) 100%);'}}>{props.children}</main>
    )
}


