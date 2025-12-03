"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, ChevronLeft, ChevronRight, Activity, Zap, Heart, Search } from "lucide-react"; // Import các Icon mới

// Dữ liệu mới: Quy trình điều trị và thông tin bệnh lý
const TREATMENT_STEPS = [
    {
        id: 1,
        title: "BƯỚC 1: CHẨN ĐOÁN CHÍNH XÁC & NGUYÊN NHÂN",
        role: "Mục tiêu: Đạt hiệu quả điều trị tối đa",
        content: "Bác sĩ tiến hành thăm khám lâm sàng, kết hợp phân tích <span class='font-semibold text-red-600'>Hình ảnh (X-quang, MRI)</span> để xác định chính xác vị trí tổn thương và bệnh lý nền (như Thoát vị đĩa đệm, Thoái hóa khớp). Chúng tôi tập trung tìm ra gốc rễ gây đau thay vì chỉ điều trị triệu chứng.",
        icon: Search,
        image: "/images/service/step01.jpg", // Ảnh chụp X-quang hoặc MRI
    },
    {
        id: 2,
        title: "BƯỚC 2: GIẢI CƠ & PHỤC HỒI TỰ NHIÊN",
        role: "Kỹ thuật: Tập trung vào mô mềm",
        content: "Áp dụng kỹ thuật <span class='font-semibold text-red-600'>Giải cơ chuyên sâu</span>, nắn chỉnh bằng tay (Chiropractic) kết hợp với các thiết bị hiện đại như <span class='font-semibold'>Sóng Xung Kích</span> và <span class='font-semibold'>Laser</span>. Giai đoạn này giúp giảm chèn ép thần kinh, tăng biên độ vận động và giảm đau cấp tính.",
        icon: Activity,
        image: "/images/service/step02.jpg" // Ảnh giải cơ/nắn chỉnh
    },
    {
        id: 3,
        title: "BƯỚC 3: PHỤC HỒI CHỨC NĂNG & ỔN ĐỊNH",
        role: "Mục tiêu: Ngăn ngừa tái phát",
        content: "Bệnh nhân được hướng dẫn các bài tập Phục hồi chức năng cá nhân hóa (Rehab) để <span class='font-semibold text-red-600'>tăng cường sức mạnh cơ bắp</span> và sự ổn định của cột sống. Đây là bước then chốt giúp duy trì kết quả lâu dài và ngăn ngừa đau tái phát.",
        icon: Heart,
        image: "/images/service/step03.jpg"  // Ảnh tập phục hồi
    },
    {
        id: 4,
        title: "BỆNH LÝ PHỔ BIẾN: THOÁI HÓA KHỚP GỐI",
        role: "Nguyên nhân: Mòn sụn khớp",
        content: "Thoái hóa là tình trạng sụn khớp bị bào mòn theo thời gian hoặc do chấn thương. Bệnh gây đau nhức, cứng khớp, và hạn chế đi lại. Phương pháp điều trị bao gồm máy <span class='font-semibold text-red-600'>Từ Trường Siêu Dẫn</span> và bổ sung chất nhờn (nếu cần).",
        icon: Zap,
        image: "/images/service/step04.jpg" // Ảnh minh họa khớp gối thoái hóa
    },
];

const TreatmentStepsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // 1. SỬ DỤNG useRef HỢP LỆ CHO VIDEO
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === TREATMENT_STEPS.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? TREATMENT_STEPS.length - 1 : prev - 1));
    };

    const currentStep = TREATMENT_STEPS[currentIndex];

    // Sử dụng Icon component được truyền vào trong dữ liệu
    const CurrentIcon = currentStep.icon;

    // ĐÃ FIX: Tạo một URL video duy nhất VỚI ĐƯỜNG DẪN CỦA BẠN
    const singleVideoUrl = "/images/service/videos2.mp4";

    return (
        <section id="treatment-process" className="bg-white py-20 overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* --- CỘT TRÁI: THÔNG TIN & CƠ CHẾ --- */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide mb-4">
                            <Sparkles size={18} className="fill-red-600" />
                            <span>Quy Trình Chuyên Sâu</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10">
                            Chẩn Đoán Tận Gốc <br />
                            <span className="text-red-700"> & Phục Hồi Khoa Học</span>
                        </h2>

                        {/* Thẻ hiển thị thông tin chi tiết */}
                        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl relative transition-all duration-300 border border-slate-100 shadow-md">
                            <div className="flex items-center gap-4 mb-4">
                                <CurrentIcon size={32} className="text-red-600 shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-red-700">{currentStep.title}</h4>
                                    <p className="text-slate-500 text-sm font-medium">{currentStep.role}</p>
                                </div>
                            </div>

                            {/* Nội dung giải thích */}
                            <p
                                className="text-slate-700 text-base leading-relaxed italic relative z-10 min-h-[120px]"
                                // Đặt nội dung HTML để hỗ trợ thẻ span (nhấn mạnh)
                                dangerouslySetInnerHTML={{ __html: currentStep.content }}
                            />

                            {/* Bộ điều hướng */}
                            <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-4">
                                <div className="text-sm font-semibold text-slate-600">
                                    Bước {currentIndex + 1} / {TREATMENT_STEPS.length}
                                </div>

                                <div className="flex gap-3 z-10">
                                    <button
                                        onClick={handlePrev}
                                        className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:border-[#e41212] hover:text-[#e41212] hover:bg-white transition-all active:scale-95"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-12 h-12 rounded-full bg-[#e41212] flex items-center justify-center text-white shadow-lg shadow-red-200 hover:bg-[#c41010] transition-all active:scale-95"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative h-[400px] lg:h-[600px] w-full">
                        <div key={currentIndex} className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl animate-fade-in border-4 border-slate-100">
                            <Image
                                src={currentStep.image}
                                alt={currentStep.title}
                                fill
                                className="object-cover w-full h-[400px] transition-opacity duration-500 "
                            />


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TreatmentStepsSection;