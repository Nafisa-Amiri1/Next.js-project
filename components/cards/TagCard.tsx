import ROUTES from "@/constants/routes";
import { Badge } from "../ui/badge";
import Link from "next/link";
import React from "react"
import { getDeviconClassName } from "@/lib/utils";


interface Props {
    _id: string;
    name: string;
    questions?: number;
    showCount?: boolean;
    compact?: boolean;
}

const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {

    const iconClass = getDeviconClassName(name);

    return (
        <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
            <Badge className={`bg-[#F4F6FB] dark:bg-[#1b2631] text-[#A7A587] dark:text-[#83849c]
                              rounded-md border-none px-4 py-2 uppercase flex items-center gap-x-24 ${compact ? "px-2 py-1" : "px-4 py-2"}`}
            >
            <div className="flex-center space-x-2">
                    <i className={`${iconClass} text-[16.50px]`}></i>
                    <span>{name}</span>
            </div>
        </Badge>
            {
        showCount && (
            <p className="small-medium text-gray-500 dark:text-[#cccdda]">
                {questions}
            </p>
        )
    }
        </Link >
    )
}
export default TagCard;      