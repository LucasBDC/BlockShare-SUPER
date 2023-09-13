// Libs
import Image from "next/image"

// Images
import GoogleLogo from '../assets/GoogleLogo.png'
import FacebookLogo from '../assets/FacebookLogo.png'
import LinkedinLogo from '../assets/LinkedinLogo.png'

export default function Socials(){
    return(
        <div className="flex justify-center gap-8 mt-5 scale-125">
            <button>
                <Image
                    src={GoogleLogo}
                    alt="Google Logo"
                    className="hover:brightness-200"
                />
            </button>
            <button>
                <Image
                    src={FacebookLogo}
                    alt="FacebookLogo"
                    className="hover:brightness-200"
                />
            </button>
            <button>
                <Image
                    src={LinkedinLogo}
                    alt="LinkedinLogo"
                    className="hover:brightness-200"
                />
            </button>
        </div>
    )
}