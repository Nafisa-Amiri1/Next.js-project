"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

import { Input } from "../ui/input";

interface Props {
    route: string;
    imgSrc: string;
    placeholder: string;
    otherClasses?: string;
}


const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
    const pathname = usePathname();
    const router = useRouter();
    const SearchParams = useSearchParams();
    const query = SearchParams.get("query") || "";

    const [searchQuery, setSearchQuery] = useState(query);

useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
        
        if (searchQuery) {
            const newUrl = formUrlQuery({
                Params: SearchParams.toString(),
                Key: "query",
                Value: searchQuery,
            });
            router.push(newUrl, { scroll: false });
        } else {
            if (pathname === route) {
                const newUrl = formUrlQuery({
                    Params: SearchParams.toString(),
                    Key: "query",
                    Value: "",
                });
                router.push(newUrl, { scroll: false });
            } else {
                const newUrl = removeKeysFromUrlQuery({
                    Params: SearchParams.toString(),
                    KeysToRemove: ["query"],
                });
                router.push(newUrl, { scroll: false });
            }
        }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
}, [searchQuery, router, route, SearchParams, pathname]);

    return (
        <div className={`bg-[#f3f5f5] dark:bg-[#0a0c0f] flex min-h-14
           grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
            
            <Image
                src={imgSrc}
                alt="search icon"
                width={24}
                height={24}
                className="cursor-pointer"
            />

            <Input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="paragraph-regular on-focus placeholder text-gray-600 dark:text-gray-200 border-none shadow-none outline-none"
            />
        </div>
    );
};
export default LocalSearch; 