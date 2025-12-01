"use client";
import Image from "next/image";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* --- LEFT CONTENT --- */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide mb-4">
                            <Sparkles size={18} className="fill-red-600" />
                            <span>Đánh Giá</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10">
                            Những Gì Mọi Người Nói Về Chăm Sóc Chấn Thương Xương Khớp..!
                        </h2>

                        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl relative">
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                                "Chào mừng bạn đến với Thera. Chúng tôi cam kết cung cấp chăm sóc chấn thương xương khớp tại một môi trường chào đón và hỗ trợ. Phương pháp của chúng tôi tập trung vào việc điều chỉnh xương khớp, nhằm nâng cao sức khỏe tổng thể và giảm đau tự nhiên."
                            </p>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-slate-900 font-bold text-lg">Trần Văn A</h4>
                                    <p className="text-slate-500 text-sm">Bệnh Nhân</p>
                                </div>

                                {/* Navigation Buttons */}
                                <div className="flex gap-3">
                                    <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:border-[#e41212] hover:text-[#e41212] transition-all">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-[#e41212] flex items-center justify-center text-slate-900 shadow-lg hover:bg-[#c41010] transition-all">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT IMAGE --- */}
                    <div className="lg:w-1/2 relative h-[400px] lg:h-[600px]">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden">
                            {/* Thay ảnh bệnh nhân cười giơ ngón cái vào đây */}
                            <Image
                                src="/images/news/6.png"
                                alt="Happy Patient"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;