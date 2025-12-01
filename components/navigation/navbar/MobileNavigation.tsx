import React from "react"
import Image from "next/image";
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    // SheetDescription,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@headlessui/react";
import ROUTES from "@/constants/routes";
import NavLinks from "./NavLinks";


// import Image from "next/image"

const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src="/icon/menu.png"
                    width={36}
                    height={36}
                    alt="menu"
                className="sm:hidden"
                />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="bg-[#fefefe] dark:bg-[#0d151d] border-none"
            >
                <SheetHeader>
                    <SheetTitle className="hidden">Navigation</SheetTitle>
                    <Link href="/" className="flex items-center gap-1">
                        <Image
                            src="/images/logoDavFlow1.png"
                            width={38}
                            height={38}
                            alt="logoDevFlow"
                        />
                        <p className="font-bold text-lg font-space-grotesk text-gray-100 dark:text-[#fffff] ">
                            Dev<span className="text-[#fd5401] font-bold">Flow</span>
                        </p>
                    </Link>
                    <div className="no-scrollbar flex  h-[calc(100vh-80px)]
                             flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-6 pt-16">
                                <NavLinks isMobileNav/>
                            </section>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_IN}>
                                <Button className='border-none small-medium bg-[#1e2631] mb-3 min-h-[41px] w-full rounded-lg px-4 py-3
                                shadow-none '>
                                    <span className="primary-text-gradient text-[#fe7107]">Log In</span>
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_UP}>
                                <Button className='samll-medium light-border-2 bg-[#15161e] text-datk400_light-900 min-h-[41px]
                                w-full rounded-lg border px-4 py-3 shadow-none '>
                                    <span className="primary-text-gradient">Sign up</span>
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};
export default MobileNavigation;