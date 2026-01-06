import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import TagCard from "./TagCard";
import Metric from "../Metric";

interface Props { 
    question: Question;
}

// interface Props {
//     searchParams: Promise<{
//         [key: string]: string
//     }>;
//     question: {
//         _id: string;
//         title: string;
//         tags: { _id: string; name: string }[];
//         author?: { _id?: string; name?: string } | string;
//         createdAt: string;
//         upvotes?: number;
//         answers?: number;
//         views?: number;
//     };
// }


const QuestionCard = ({
    question: {
        _id,
        title,
        tags,
        author,
        createdAt,
        upvotes,
        answers,
        views,
    },
}: Props) => {
    const authorSafe = typeof author === 'string' || !author
        ? { _id: undefined, name: typeof author === 'string' ? author : 'Unknown', image: '/default-avatar.png', value: 0 }
        : (author as { _id?: string; name?: string; image?: string; value?: number });
    return (
        <div className="bg-white/90 text-gray-800 shadow-xl dark:bg-[#0a0c0f] dark:text-gray-200 rounded-[10px] p-9 sm:px-11">
            <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
                <div>
                    <span className="subtle-regular text-gray-800 dark:text-gray-230 line-clamp-1 flex sm:hidden">
                        {getTimeStamp(new Date(createdAt))}
                    </span>
                    <Link href={ROUTES.QUESTION(_id)} className="hover:underline">
                        <h3 className="sm:h3-semibold base-semibold text-gray-800 dark:text-gray-200
                        line-clamp-1 flex-1">
                            {title}
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="mt-3.5 flex w-full flex-warp gap-2">
                {tags.map((tag) => (
                    <TagCard key={tag._id} _id={tag._id} name={tag.
                        name} compact />
                ))}
                
            </div>
            <div className="flex-between mt-6 w-full flex-warp gap-3"> 
                <Metric
                    imgUrl={authorSafe.image ?? '/default-avatar.png'}
                    alt={authorSafe.name}
                    value={authorSafe.value}
                    title={`. asked ${getTimeStamp(createdAt)}`}
                    href={authorSafe._id ? ROUTES.PROFILE(authorSafe._id) : '#'}
                    textStyles="body-medium text-gray-300 dark:text-gray-230"
                    // isAuthoer
                />
                <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">    
                    <Metric
                        imgUrl="/icon/Like.svg"
                        alt="Like"
                        value={upvotes}
                        title="Votes"
                        textStyles="small-medium text-gray-300 dark:text-gray-230"
                    />
                    <Metric
                        imgUrl="/icon/message.svg"
                        alt="answers"
                        value={answers}
                        title=" Answer"
                        textStyles="small-medium text-gray-300 dark:text-gray-230"
                    />
                    <Metric
                        imgUrl="/icon/eye.svg"
                        alt="views"
                        value={views}
                        title=" Views"
                        textStyles="small-medium text-gray-300 dark:text-gray-230"
                    />
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;

