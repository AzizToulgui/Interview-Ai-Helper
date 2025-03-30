import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";

const Page = ({children} : {children : ReactNode}) => {
    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="logo" width={38} height={32}/>
                    <h2 className="text-primary-100">MocklyAI</h2>
                </Link>
                {children}
            </nav>
        </div>
    )
}
export default Page
