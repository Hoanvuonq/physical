"use client";
import ReviewCard from "../reviewCard";
import { Sparkles, MoveRight } from "lucide-react";
import { REVIEWS_DATA } from "@/contants/review";
import { Button } from "../button";

const ReviewComponents = () => {
    const mapsUrl = "https://maps.app.goo.gl/i3aCMszkvtEPtbuS8";
    const totalReviewCount = 30;

    return (
        <section id="reviews" className="py-20 bg-slate-50 overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="text-center space-y-4 mb-12">
                    <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide">
                        <Sparkles size={18} className="fill-red-600" />
                        <span>Khách Hàng Nói Gì Về Chúng Tôi</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Những Đánh Giá Chân Thực
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Sự hài lòng và niềm tin của khách hàng là động lực lớn nhất để Phòng Khám Tâm Thịnh không ngừng nâng cao chất lượng dịch vụ.
                    </p>
                </div>

                <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth 
                    [&::-webkit-scrollbar]:h-[6px] 
                    [&::-webkit-scrollbar-track]:bg-slate-100
                    [&::-webkit-scrollbar-thumb]:bg-slate-300 
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    hover:[&::-webkit-scrollbar-thumb]:bg-[#e41212]"
                >
                    {REVIEWS_DATA.map((review, index) => (
                        <div
                            key={index}
                            className="min-w-full max-w-full md:min-w-[400px] md:max-w-[400px] snap-start shrink-0"
                        >
                            <ReviewCard review={review} />
                        </div>
                    ))}
                    <div className="min-w-full max-w-full md:min-w-[400px] md:max-w-[400px] snap-start shrink-0">
                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-red-300 rounded-xl hover:border-red-500 transition-colors cursor-pointer h-full min-h-[300px]"
                        >
                            <h3 className="text-2xl font-bold text-red-700 mb-2">Hơn {totalReviewCount} + Đánh Giá Tích Cực</h3>
                            <p className="text-slate-600 mb-6">
                                Khám phá toàn bộ phản hồi của khách hàng trên Google Maps.
                            </p>
                            <Button label="Xem thêm trên Maps" variant="secondary" icon={<MoveRight />} />
                        </a>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default ReviewComponents;
