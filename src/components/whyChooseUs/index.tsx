"use client";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

const REASONS = [
    {
        title: "Kế Hoạch Chăm Sóc Cá Nhân Hóa",
        desc: "Bác sĩ chấn thương xương khớp dành thời gian để hiểu nhu cầu cụ thể của bạn để giải quyết các điểm đau đặc biệt và mục tiêu sức khỏe.",
    },
    {
        title: "Phương Pháp Tự Nhiên, Không Xâm Lấn",
        desc: "Sử dụng kỹ thuật nắn chỉnh nhẹ nhàng để giảm đau, nâng cao chức năng khớp và khôi phục sự cân bằng mà không cần phẫu thuật.",
    },
    {
        title: "Chuyên Gia Giàu Kinh Nghiệm",
        desc: "Đội ngũ bác sĩ tay nghề cao đã giúp hàng ngàn bệnh nhân tìm thấy sự giảm đau và quay lại cuộc sống năng động.",
    },
    {
        title: "Chăm Sóc Toàn Diện",
        desc: "Từ điều chỉnh xương khớp, tập phục hồi chức năng đến tư vấn dinh dưỡng, chúng tôi cung cấp giải pháp sức khỏe trọn vẹn.",
    },
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="bg-white pt-20">
            {/* --- CONTAINER CHÍNH --- */}
            <div className="container mx-auto px-6 mb-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="relative h-full min-h-[500px] lg:h-[900px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                        <video
                            className="object-cover w-full h-full"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/images/service/videos.mp4" type="video/mp4" />
                            Trình duyệt của bạn không hỗ trợ thẻ video.
                        </video>

                        {/* Lớp phủ nhẹ để video không quá chói so với nền trắng */}
                        <div className="absolute inset-0 bg-black/10" />


                    </div>

                    <div className="spa,ce-y-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide">
                                <Sparkles size={18} className="fill-red-600" />
                                <span>Về Chúng Tôi</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2]">
                                Tại Sao Chọn <br /> <span className="text-red-700">Phòng Khám Tâm Thịnh?</span>
                            </h2>
                            <p className="text-slate-500 text-lg">
                                Chúng tôi kết hợp y học hiện đại và sự thấu cảm để mang lại kết quả điều trị tốt nhất cho từng bệnh nhân.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {REASONS.map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 cursor-pointer rounded-xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
                                    <div className="shrink-0 pt-1">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                            <CheckCircle2 size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* --- HÌNH ẢNH FULL MÀN HÌNH (GIỮ NGUYÊN) --- */}
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[800px] overflow-hidden">
                <Image
                    src="/images/news/111.png"
                    alt="Chiropractic treatment session"
                    fill
                    className="object-cover object-top"
                />
            </div>

            {/* --- BANNER CTA --- */}
            <div className="bg-[#e41212] py-20 text-center text-white relative overflow-hidden">
                {/* Họa tiết nền mờ */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px]" />
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 space-y-8 relative z-10">
                    <h3 className="text-3xl lg:text-5xl font-bold leading-tight">
                        Sẵn Sàng Bắt Đầu Hành Trình <br className="hidden md:block" />
                        Phục Hồi Sức Khỏe?
                    </h3>
                    <p className="text-red-100 text-lg max-w-2xl mx-auto">
                        Đừng để cơn đau cản trở cuộc sống của bạn. Hãy để Tâm Thịnh đồng hành cùng bạn trên con đường tìm lại sự dẻo dai.
                    </p>
                    <div className="pt-4">
                        <button className="bg-white text-[#e41212] font-bold py-4 px-12 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-slate-50">
                            Đặt Lịch Khám Ngay
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;