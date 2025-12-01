"use client";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

const REASONS = [
    {
        title: "Kế Hoạch Chăm Sóc Cá Nhân Hóa",
        desc: "Bác sĩ chấn thương xương khớp nhận thức thời gian để hiểu nhu cầu cụ thể của bạn để giải quyết các điểm đau đặc biệt và mục tiêu sức khỏe của bạn.",
    },
    {
        title: "Phương Pháp Tự Nhiên, Không Xâm Nhập",
        desc: "Chúng tôi sử dụng kỹ thuật mềm mại, tay nghề để giảm đau, nâng cao chức năng khớp và khôi phục sự cân bằng mà không cần phẫu thuật hoặc thuốc.",
    },
    {
        title: "Chuyên Gia Có Kinh Nghiệm",
        desc: "Đội ngũ bác sĩ chấn thương xương khớp có tay nghề cao đã giúp hàng ngàn bệnh nhân tìm thấy sự giảm đau và sống khỏe hơn, hoạt động nhiều hơn.",
    },
    {
        title: "Chăm Sóc Toàn Diện",
        desc: "Từ điều chỉnh xương khớp và tập thể dục thuốc, đến tư vấn dinh dưỡng và lời khuyên về sinh hoạt, chúng tôi cung cấp một phương pháp toàn diện.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-white pt-20">
            {/* --- CONTAINER CHO PHẦN TEXT Ở TRÊN --- */}
            <div className="container mx-auto px-6 mb-16">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide">
                            <Sparkles size={18} className="fill-red-600" />
                            <span>Giới Thiệu</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2]">
                            Lý Do <br /> Tại Sao Chọn Chúng Tôi <br /> Chăm Sóc Chấn Thương Xương Khớp
                        </h2>
                    </div>
                    <div className="lg:col-span-7 grid gap-8">
                        {REASONS.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="shrink-0 pt-1">
                                    <CheckCircle2 size={24} className="text-red-500 fill-red-50" />
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
            {/* --- ĐÃ ĐÓNG CONTAINER Ở ĐÂY --- */}


            {/* --- HÌNH ẢNH FULL MÀN HÌNH (Nằm ngoài container) --- */}
            {/* Sử dụng w-full vì section cha đã full width rồi. Thêm rounded-t-3xl nếu muốn bo góc trên */}
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[800px] overflow-hidden">
                <Image
                    src="/images/news/111.png"
                    alt="Chiropractic treatment session"
                    fill
                    // QUAN TRỌNG: Đổi object-contain thành object-cover để lấp đầy
                    className="object-cover object-top"
                />
            </div>


            {/* --- BANNER MÀU ĐỎ BÊN DƯỚI --- */}
            <div className="bg-[#e41212] py-16 text-center text-white">
                <div className="container mx-auto px-6 space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold">
                        Sẵn Sàng Bắt Đầu Chuyến Đi Của Bạn Đến <br className="hidden md:block" />
                        Sức Khỏe Tốt Hơn?
                    </h3>
                    <p className="text-blue-100 text-lg">
                        Đặt Lịch Hẹn Miễn Phí Ngay Hôm Nay!
                    </p>
                    <div className="pt-4">
                        <button className="bg-[#e41212] hover:bg-[#c41010] text-white font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(0,229,190,0.4)] hover:scale-105 border border-white/20">
                            Đặt Lịch Hẹn
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;