"use client";
import Image from "next/image";
import { Star, Video, MoreVertical, Share2, MoveRight } from "lucide-react";
import { useState } from "react";

interface MediaItem {
    src: string;
    label: string | null;
}

interface ReviewProps {
    review: {
        avatar: string;
        reviewer: string;
        details: string;
        rating: number;
        time: string;
        text: string;
        media: MediaItem[];
    };
}

const ReviewCard = ({ review }: ReviewProps) => {
    const renderStars = (count: number) => {
        return Array(5).fill(0).map((_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 md:w-5 md:h-5 ${i < count ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
            />
        ));
    };

    // Đặt độ dài tối đa là 150 ký tự (có thể điều chỉnh)
    const MAX_LENGTH = 150;

    const [isExpanded, setIsExpanded] = useState(false);

    const needsTruncation = review.text.length > MAX_LENGTH;

    const displayText = needsTruncation && !isExpanded
        ? review.text.substring(0, MAX_LENGTH) + '...'
        : review.text;

    return (
        // Xóa w-[400px] khỏi đây. Kích thước được kiểm soát bởi component cha để đảm bảo responsive.
        <div className="bg-white p-6 md:p-6 rounded-xl shadow-lg border border-slate-100 min-h-[300px] flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                        <Image
                            src={review.avatar}
                            alt={review.reviewer}
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                    </div>
                    <div>
                        <p className="font-bold text-slate-900">{review.reviewer}</p>
                        <p className="text-xs text-slate-500">{review.details}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center cursor-pointer text-slate-600 hover:text-red-600 font-medium transition-colors text-sm">
                        <Share2 className="w-4 h-4" />
                    </button>
                    <MoreVertical className="w-5 h-5 text-slate-400 cursor-pointer hover:text-red-600 transition-colors" />
                </div>
            </div>

            <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                    </div>
                    <p className="text-sm text-slate-600">{review.time}</p>
                </div>
                <p className="text-slate-800 leading-relaxed text-sm">
                    {displayText}
                </p>

                {needsTruncation && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-red-600 font-medium text-sm cursor-pointer hover:underline mt-1 inline-block"
                    >
                        {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                    </button>
                )}
            </div>

            {review.media.length > 0 && (
                <div className="flex space-x-3 mt-4 overflow-x-auto pb-2">
                    {review.media.map((item, index) => (
                        <div key={index} className="relative w-28 h-28 rounded-lg overflow-hidden shrink-0 bg-slate-200 shadow-md">
                            <Image
                                src={item.src}
                                alt={`Review media ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="128px"
                            />
                            {item.label && (
                                <div className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-1 py-0.5 rounded flex items-center">
                                    <Video className="w-3 h-3 mr-1" /> {item.label}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default ReviewCard;