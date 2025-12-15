"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";


const filters = [
    { name: "React", value: "react" },
    { name: "JavaScript", value: "javascript" },
//     { name: "Newest", value: "newest" },
//     { name: "Populer", value: "populer" },
//     { name: "Unanswered", value: "unanswered" },
//     { name: "Recommended", value: "recommended" },

];


const HomeFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const filterParam = searchParams.get("filter");
    const [active, setActive] = useState(filterParam || "");

    const handleTypeClick = (filter: string) => {
        let newUrl = "";

        if (filter === active) {
            setActive("");

            newUrl = removeKeysFromUrlQuery({
                Params: searchParams.toString(),
                KeysToRemove: ["filter"],
            });
        } else {
            setActive(filter);

            newUrl = formUrlQuery({
                Params: searchParams.toString(),
                Key: "filter",
                Value: filter,
            });
        }

        router.push(newUrl, { scroll: false });
    };


    return (
        <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
            {filters.map((filter) => (
                <Button
                    key={filter.name}
                    className={cn(
                        "body-medium rounded-lg px-6 py-3 capitalize shadow-none cursor-pointer",
                        active === filter.value
                            ? "bg-[#e0e0ea] text-[#fc6e00] hover:bg-[#ebeaf3] dark:bg-[#242834] dark:text-[#fc6e00] dark:hover:bg-[#21242d]"
                            : "bg-[#f2f4fe] text-[#808cc3] hover:bg-[#f6f4e0] dark:bg-[#151521] dark:text-[#808cc3] dark:hover:bg-[#21242d]"
                    )}
                    onClick={() => handleTypeClick(filter.value)}
                >
                    {filter.name}
                </Button>
            ))}
        </div>
    );
};

export default HomeFilter; 