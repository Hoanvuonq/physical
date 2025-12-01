"use client";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const SERVICES = [
    {
        title: "Chăm Sóc Thủ Công",
        desc: "Chăm sóc thủ công là sự áp dụng các chuyển động tự nhiên để một khớp, hoặc...",
        image: "/images/news/1.png",
    },
    {
        title: "Chăm Sóc Y Tế",
        desc: "Một bác sĩ chấn thương xương khớp xử lý các rối loạn xương khớp bằng cách tập trung vào việc điều chỉnh xương khớp, nhằm nâng cao sức khỏe tổng thể và giảm đau tự nhiên.",
        image: "/images/news/2.png",
    },
    {
        title: "Chấn Thương Thể Thao",
        desc: "Một chấn thương thể thao liên quan đến sự hỏng hóc của một phần cơ thể do thể thao, tập luyện hoặc...",
        image: "/images/news/3.png",
    },
    {
        title: "Chăm Sóc Chấn Thương Xương Khớp",
        desc: "Tập trung vào việc chẩn đoán và điều trị các rối loạn thần kinh...",
        image: "/images/news/4.png",
    },
    {
        title: "Chăm Sóc Massage",
        desc: "Chăm sóc massage bao gồm việc trét và xoa các phần của cơ thể...",
        image: "/images/news/5.png",
    },
];

export const ServiceSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide">
                            <Sparkles size={18} className="fill-red-600" />
                            <span>Dịch Vụ</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-lg">
                            Kinh Nghiệm Trong Các Loại Chăm Sóc
                        </h2>
                    </div>

                    <button className="bg-[#e41212] hover:bg-[#c41010] text-white font-bold py-3 px-8 rounded-full transition-all shadow-md shrink-0">
                        Xem Tất Cả
                    </button>
                </div>


                <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth 
                    [&::-webkit-scrollbar]:h-[4px] 
                    [&::-webkit-scrollbar-track]:bg-slate-100
                    [&::-webkit-scrollbar-thumb]:bg-[#e41212] 
                    [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                    {SERVICES.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[380px] snap-start group cursor-pointer"
                        >
                            <div className="relative aspect-square rounded-sm overflow-hidden mb-6 bg-slate-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#e41212] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed line-clamp-2">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Đã xóa thẻ div thanh cuộn giả ở đây vì scrollbar thật đã có màu rồi */}

            </div>
        </section>
    );
};