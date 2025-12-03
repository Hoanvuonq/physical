"use client";
import Image from "next/image";
import { Sparkles, MoveRight } from "lucide-react";

const SERVICES = [
    {
        title: "Máy Từ Trường Siêu Dẫn ",
        desc: "Sử dụng trường điện từ cường độ cao thâm nhập sâu, máy giúp **giảm đau thần kinh, kháng viêm cấp tính** và **thúc đẩy quá trình liền xương** nhanh chóng, tối ưu hóa phục hồi chức năng và tái tạo tế bào tổn thương.",
        image: "/images/service/1.png",
    },
    {
        title: "Công Nghệ Sóng Xung Kích ",
        desc: "Công nghệ sóng âm năng lượng cao không xâm lấn, hiệu quả đột phá trong việc **phá vỡ các điểm vôi hóa** và **giải tỏa dải cơ co thắt**. Đặc biệt hiệu quả điều trị gai gót chân, viêm gân mạn tính và hội chứng đau điểm kích hoạt.",
        image: "/images/service/2.png",
    },
    {
        title: "Máy Siêu Âm Trị Liệu ",
        desc: "Tạo ra tác động nhiệt sâu và vi massage cấp độ tế bào, giúp **giãn cơ, tăng cường tuần hoàn máu cục bộ**, làm mềm mô sẹo. Giải pháp lý tưởng để giảm viêm sưng và đau cho các vùng khớp gối, vai gáy, và cột sống.",
        image: "/images/service/3.png",
    },
    {
        title: "Giải Cơ Trị Liệu Chuyên Sâu",
        desc: "Kỹ thuật giải cơ và ấn huyệt chuyên sâu được thực hiện bởi chuyên viên trị liệu. Giúp **giải tỏa căng thẳng cơ bắp sâu**, khôi phục tính linh hoạt và **tăng cường lưu thông khí huyết**, giảm đau mỏi do sai tư thế, stress.",
        image: "/images/service/4.png",
    },
    {
        title: "Phục Hồi Chức Năng Thần Kinh (Sau Đột Quỵ)",
        desc: "Phác đồ tập luyện cá nhân hóa, kết hợp thiết bị hỗ trợ chuyên biệt, giúp bệnh nhân sau đột quỵ **tái lập các cử động chức năng**, ngăn ngừa teo cơ cứng khớp và **sớm quay trở lại cuộc sống sinh hoạt thường ngày**.",
        image: "/images/service/5.png",
    },
    {
        title: "Hệ Thống Tập Vận Động Phục Hồi",
        desc: "Sử dụng các dòng máy tập **vận động chủ động và thụ động** tiên tiến để phục hồi biên độ khớp và sức mạnh cơ bắp. Đây là bước then chốt sau chấn thương, phẫu thuật hoặc để duy trì vận động tối ưu cho người lớn tuổi.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
];

export const ServiceSection = () => {
    return (
        <section id="services" className="py-20 bg-white overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide">
                            <Sparkles size={18} className="fill-red-600" />
                            <span>Công Nghệ Điều Trị Tận Gốc</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
                            DẪN ĐẦU VỀ THIẾT BỊ <br />
                            <span className="text-red-700">VẬT LÝ TRỊ LIỆU BẬC NHẤT</span>
                        </h2>
                        <p className="text-slate-500 max-w-lg">
                            Chúng tôi trang bị những công nghệ tiên tiến nhất từ Châu Âu và Mỹ để **rút ngắn thời gian phục hồi** và mang lại **hiệu quả điều trị bền vững** cho mọi vấn đề cơ xương khớp.
                        </p>
                    </div>

                    <button className="group flex items-center gap-2 bg-slate-900 hover:bg-[#e41212] text-white font-bold py-3 px-8 rounded-full transition-all shadow-md shrink-0">
                        Tìm Hiểu Chi Tiết <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth 
                    [&::-webkit-scrollbar]:h-[6px] 
                    [&::-webkit-scrollbar-track]:bg-slate-100
                    [&::-webkit-scrollbar-thumb]:bg-slate-300 
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    hover:[&::-webkit-scrollbar-thumb]:bg-[#e41212]"
                >
                    {SERVICES.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-full md:min-w-[420px] snap-start group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="pr-4">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#e41212] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed line-clamp-3 text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};