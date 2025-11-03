"use client"
import { useState } from "react"

export default function DateNavigator() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const formatEnglishDate = (date:Date) => {
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const handlePrev = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    const handleNext = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(newDate);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex items-center gap-4 bg-[#082b93] px-6 py-4 rounded-2xl shadow-md">
                {/* دکمه روز قبل */}
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 border-2 border-[#104396] rounded-lg hover:bg-blue-600 transition bg-[#1860ad]"
                >
                    Prev Day
                </button>

                {/* نمایش تاریخ */}
                <div className="text-center min-w-[200px]">
                    <div className="text-sm text-gray-550">
                        {formatEnglishDate(currentDate)}
                    </div>
                </div>

                {/* دکمه روز بعد */}
                <button
                    onClick={handleNext}
                    className="px-4 py-2 border-2 border-[#104396] rounded-lg hover:bg-blue-500 transition bg-[#1860ad]"
                >
                   Next Day
                </button>
            </div>
        </div>
    );
}