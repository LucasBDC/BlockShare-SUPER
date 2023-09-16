// Libs

// Imagens
import ArrowLeft from '@/assets/ArrowLeft.png'
import Upload from '@/assets/UploadSimple.png'
import Pesquisa from '@/assets/MagnifyingGlass.png'

// Components
import Printela from "@/components/printela"
import Header from "@/components/header"
import ThickButton from "@/components/thickbutton"
import IconButton from '@/components/iconbutton'
import StyledInputs from '@/components/styledinputs'

export default function SearchArchive(){
    return(
        <Printela className='w-[60%]'>
            <Header hidden='none' className='mb-10'/>
            <div className="flex justify-between w-[60%]">
                <ThickButton href='/' texto='Anterior' image={ArrowLeft}/>
                <div className="flex gap-2">
                    <IconButton href='/' src={Pesquisa} background='bg-zinc-50' />
                    <IconButton href='/' src={Upload} background='bg-zinc-700'/>
                </div>
            </div>
            <div className="conteudodiv w-[60%] h-[430px] rounded-3xl p-10 px-20">
                <div className="flex flex-col gap-4">
                    <StyledInputs type='number' placeholder='Provide Private Key'/>
                    <StyledInputs type='number' placeholder='Provide Hash '/>
                </div>

            </div>
        </Printela>
    )
}