"use client";

import { sidebarLink } from "@/constants";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"
import React from "react"
import { SheetClose } from "@/components/ui/sheet";


const NavLinks = ({ isMobileNav = false }: {
    isMobileNav?:
    boolean
}) => {

    const pathname = usePathname();
    const userId = 1;

    return (
        <>
            {sidebarLink.map((item) => {
                const isActive =
                    (pathname.includes(item.route) && item.route.length >
                        1) ||
                    pathname === item.route;

                if (item.route === '/profile') {
                    if (userId) item.route = `${item.route}/${userId}}`;
                    else return null;
                }

                const LinkComponent = (
                    <Link href={item.route} key={item.label} className={cn
                        (isActive ? "bg-linear-to-r from-[#fe7107] via-[#f37f30] to-[#e69254] rounded-lg text-[#ffffff] "
                            : "text-black dark:text-white",
                        "flex items-center justify-start gap-4 bg-transparent p-4"
                        )
                    }>
                        <Image src={item.imgURL} alt={item.label}
                            width={22} height={22}
                            className={cn({ "invert-colors": !isActive })}
                        />
                        <p className={cn(
                            isActive ? "base-bold" : "base-medium",
                            !isMobileNav &&"max-lg:hidden"
                        )}>{item.label}</p>
                    </Link>
                )
                return isMobileNav ? (
                    <SheetClose asChild key={item.route}>
                        {LinkComponent}
                    </SheetClose>
                ) : (
                    <React.Fragment key={item.route}>
                        {LinkComponent}
                    </React.Fragment>
                );
            })}
        </>
    )
}
export default NavLinks;
