import React from "react"
import NavLinks from "./navbar/NavLinks";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link"
import Image from "next/image";



const LeftSidebar = () => {
    return (
        <section className="custom-scrollbar bg-[#F9F8F6] dark:bg-[#0a151d] border-b-black
        sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-gray-300
        dark:shadow-none max-sm:hidden lg:w-[266px]">
            <div className="flex flex-1 flex-col gap-6">
                <NavLinks />
            </div>

            <div className="flex flex-col gap-3">
                <Button className='border-none small-medium bg-[#1e2631] mb-3 min-h-[41px] w-full rounded-lg px-4 py-3
                                shadow-none' asChild>
                    <Link href={ROUTES.SIGN_IN}>
                        <Image
                            src="/icon/circle-user.svg"
                            alt="Account"
                            width={20}
                            height={20}
                            className='invert-colors lg:hidden'
                        />
                        <span className="primary-text-gradient text-[#fe7107] max-lg:hidden">Log In</span>
                    </Link>
                </Button>

                <Button className='samll-medium light-border-2 bg-[#15161e] text-datk400_light-900 min-h-[41px]
                                w-full rounded-lg border px-4 py-3 shadow-none' asChild>
                    <Link href={ROUTES.SIGN_UP}>
                        <Image
                            src="/icon/user-star.svg"
                            alt="Account"
                            width={20}
                            height={20}
                            className='invert-colors lg:hidden'
                        />
                        <span className="primary-text-gradient max-lg:hidden">Sign up</span>
                    </Link>
                </Button>
            </div>
        </section>  
    )
};

export default LeftSidebar;