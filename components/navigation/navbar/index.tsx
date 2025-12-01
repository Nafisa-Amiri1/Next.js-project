import React from "react"
import Link from "next/link"
import Image from "next/image"
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
    return (
        <>
            <nav className="flex-between bg-[#fffeff] dark:bg-[#0d151d]  fixed z-50 w-full p-6 gap-5 shadow-light-300 dark:shadow-none sm:px-12">
                <Link href='/' className="flex items-center gap-1">

                    <Image
                        src="/images/logoDavFlow1.png"
                        width={31}
                        height={31}
                        alt="DavFlow Logo"
                    />
                    <p className="font-bold text-lg font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                        Dev<span className="text-[#fd5401] font-bold">Flow</span>
                    </p>
                </Link>
                
                <p className="text-black dark:text-white">Global Search</p>

                <div className="flex-between gap-4">
                    <Theme />
                    <MobileNavigation />
                </div>

            </nav>
        </>
    );
};

export default Navbar;  