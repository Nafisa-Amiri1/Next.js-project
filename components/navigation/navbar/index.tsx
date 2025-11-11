import React from "react"
import Link from "next/link"
import Image from "next/image"
import Theme from "./Theme";

const Navbar = () => {
    return (
        <>
            <nav className="flex-between background-light900_dark200 border-b border-gray-500  fixed z-50 w-full p-6 gap-5 shadow-light-300 dark:shadow-none sm:px-12">
                <Link href='/' className="flex items-center gap-1">
                    
                    <Image 
                        src="/images/logoDavFlow1.png"
                        width={31}
                        height={31}
                        alt="DavFlow Logo"
                    />
                    <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                        Dev<span className="text-[#fd5401] h2-bold">Flow</span>
                    </p>
                </Link>
                <p className="text-black dark:text-white">Global Search</p>

                <div className="flex-between gap-4"><Theme /></div>  

            </nav>
        </>
    );
};

export default Navbar;  