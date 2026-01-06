import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    imgUrl: string;
    alt?: string;
    value?: string | number;
    title?: string;
    href?: string;
    textStyles?: string;
    imgStyles?: string;
    isAuthor?: boolean;
}

const Metric = ({
    imgUrl,
    alt = "metric image",
    value,
    title,
    href,
    textStyles,
    imgStyles,
    isAuthor,
}: Props) => {
    const metricContent = (
        <>
            <Image src={imgUrl} width={16} height={16} alt=
                {alt} className={`rounded-full object-contain ${imgStyles}`} />

            <p className={`${textStyles} flex items-center gap-1`}>
                {value}
                <span
                    className={`small-regular line-clamp-1 ${isAuthor && "max-sm:hidden"}`}
                >
                    {title}
                </span>
            </p>
        </>
        
    );
    return href ? (
        <Link href={href} className="flex-center gap" >{metricContent}</Link>
    ) : (
        <div className="flex-center gap" >{metricContent}</div>
    ); 
};



// const Metric: React.FC<Props> = ({
//     imgUrl,
//     alt = "metric image",
//     value,
//     title,
//     href,
//     textStyles = "",
//     imgStyles = "",
//     isAuthor = false,
// }) => {
//     const metricContent = (
//         <div className={`flex items-center gap-2 ${textStyles}`}>
//             <Image src={imgUrl} alt={alt} width={16} height={16} className={imgStyles} />
//             {value && <span>{value}</span>}
//             {title && <span>{title}</span>}
//         </div>
//     );

//     return href ? (
//         <Link href={href}>{metricContent}</Link>
//     ) : (
//         <div>{metricContent}</div>
//     );
// };

export default Metric;
