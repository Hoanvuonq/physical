"use client";
import { useState } from "react";
import Image from "next/image";
import { Sparkles, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// 2. Tạo danh sách đánh giá mẫu với hình ảnh riêng biệt
const TESTIMONIALS = [
    {
        id: 1,
        name: "Nguyễn Thu Hà",
        role: "Nhân viên văn phòng",
        content: "Tôi bị đau mỏi vai gáy mãn tính do ngồi máy tính hơn 8 tiếng mỗi ngày. Sau liệu trình 5 buổi điều trị bằng sóng xung kích tại Tâm Thịnh, cơn đau đã giảm đến 90%. Bác sĩ rất tận tâm tư vấn cả dáng ngồi cho tôi.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Ảnh nhân viên văn phòng
    },
    {
        id: 2,
        name: "Trần Văn Hùng",
        role: "Vận động viên Tennis",
        content: "Chấn thương dây chằng đầu gối khiến tôi nghĩ mình phải bỏ giải đấu năm nay. Rất may mắn được giới thiệu đến đây, các bài tập phục hồi chức năng và máy laser cường độ cao đã giúp tôi quay lại sân đấu chỉ sau 3 tuần.",
        image: "https://images.unsplash.com/photo-1552674605-46f5c8856082?q=80&w=800&auto=format&fit=crop", // Ảnh vận động viên
    },
    {
        id: 3,
        name: "Cô Lê Thị Cúc",
        role: "Cán bộ hưu trí (65 tuổi)",
        content: "Cô bị thoát vị đĩa đệm lưng, đi lại rất khó khăn. Nhờ bác sĩ điều chỉnh xương khớp và chạy máy kéo giãn mà giờ cô đi lại nhẹ nhàng, không còn đau buốt xuống chân nữa. Phòng khám sạch sẽ, các cháu điều dưỡng rất ngoan.",
        image: "https://images.unsplash.com/photo-1551185254-3a52dd177f1f?q=80&w=800&auto=format&fit=crop", // Ảnh người lớn tuổi
    },
    {
        id: 4,
        name: "Phạm Minh Tuấn",
        role: "Kỹ sư xây dựng",
        content: "Dịch vụ rất chuyên nghiệp, không phải chờ đợi lâu. Tôi thích nhất là phương pháp nắn chỉnh cột sống ở đây, cảm giác người nhẹ nhõm hẳn ngay sau buổi đầu tiên. Sẽ giới thiệu cho đồng nghiệp.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", // Ảnh kỹ sư/doanh nhân
    },
];

const TestimonialSection = () => {
    // 3. State quản lý đánh giá hiện tại (bắt đầu từ 0)
    const [currentIndex, setCurrentIndex] = useState(0);

    // Hàm chuyển tiếp
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    };

    // Hàm quay lại
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    };

    // Lấy thông tin review hiện tại
    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <section id="testimonials" className="bg-white py-20 overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide mb-4">
                            <Sparkles size={18} className="fill-red-600" />
                            <span>Đánh Giá Thực Tế</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10">
                            Khách Hàng Nói Gì Về <br />
                            <span className="text-red-700">Phòng Khám Tâm Thịnh?</span>
                        </h2>

                        {/* Card chứa nội dung review */}
                        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl relative transition-all duration-300">
                            {/* Icon dấu ngoặc kép trang trí */}
                            <Quote size={48} className="text-red-100 absolute top-6 left-6 -z-0" />

                            {/* Thêm key để tạo hiệu ứng fade nhẹ khi đổi text nếu cần, ở đây giữ nguyên logic cũ */}
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 italic relative z-10 min-h-[120px]">
                                "{currentTestimonial.content}"
                            </p>

                            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                                <div>
                                    <h4 className="text-slate-900 font-bold text-xl">{currentTestimonial.name}</h4>
                                    <p className="text-slate-500 text-sm font-medium">{currentTestimonial.role}</p>
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

                    {/* Phần hình ảnh bên phải - Thay đổi theo currentTestimonial */}
                    <div className="lg:w-1/2 relative h-[400px] lg:h-[600px] w-full">
                        {/* Thêm key={currentIndex} để buộc React render lại ảnh mới -> tạo hiệu ứng chuyển mượt nếu có CSS animation */}
                        <div key={currentIndex} className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
                            <Image
                                src={currentTestimonial.image} // Dùng ảnh động từ data
                                alt={currentTestimonial.name}
                                fill
                                className="object-cover transition-opacity duration-500"
                            />

                            {/* Thẻ floating thống kê nhỏ */}
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-[200px] hidden md:block">
                                <p className="text-4xl font-bold text-[#e41212] mb-1">98%</p>
                                <p className="text-slate-600 text-sm font-medium">Bệnh nhân hài lòng sau liệu trình đầu tiên</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;