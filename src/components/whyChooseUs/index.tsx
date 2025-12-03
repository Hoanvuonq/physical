"use client";
import Image from "next/image";
import { Sparkles, CheckCircle2, PlayCircle, X, Zap, Activity, Heart, Hand, Minus, ArrowDown, ChevronDown, ChevronUp } from "lucide-react"; // Đã thêm Chevron icons
import { useState, useRef, useEffect } from "react";

// --- DỮ LIỆU HOTSPOT/POPUP (Giữ nguyên) ---
const INTERACTION_POINTS = [
    {
        id: 1,
        title: "PHÂN TÍCH CỔ/VAI GÁY (C2-C7)",
        desc: "Hệ thống AI cảnh báo căng cơ thang và đốt sống C5-C7. Nguyên nhân thường do sai tư thế ngồi. Cần giải cơ chuyên sâu để khôi phục biên độ vận động.",
        Icon: Activity,
        position: { top: '25%', left: '15%' }
    },
    {
        id: 2,
        title: "ĐAU LƯNG GIỮA (Đốt T1-T12)",
        desc: "Đau mỏi vùng lưng giữa, có thể liên quan đến vấn đề phổi hoặc thoát vị đĩa đệm lưng trên. Cần chụp X-quang để xác định chính xác.",
        Icon: Zap,
        position: { top: '45%', right: '18%' }
    },
    {
        id: 3,
        title: "ĐAU LƯNG DƯỚI (L1-S1)",
        desc: "Rủi ro chèn ép L4-L5 hoặc S1 gây đau thần kinh tọa. Thoái hóa, thoát vị đĩa đệm là nguyên nhân phổ biến. Điều chỉnh cột sống là cần thiết.",
        Icon: ArrowDown,
        position: { bottom: '20%', left: '20%' }
    },
];

const REASONS = [
    {
        title: "Kế Hoạch Chăm Sóc Riêng Từng Người",
        desc: "Bác sĩ dành thời gian lắng nghe kỹ câu chuyện của cô, chú, anh, chị để hiểu rõ chỗ đau và mong muốn về sức khỏe. Từ đó xây dựng một chương trình điều trị chỉ dành riêng cho mình, giúp giải quyết tận gốc cơn đau một cách nhẹ nhàng nhất.",
    },
    {
        title: "Chữa Trị Tự Nhiên, Không Cần Phẫu Thuật",
        desc: "Không lo lắng về dao kéo hay thuốc tây. Chúng tôi tập trung vào khả năng tự hồi phục của cơ thể. Sử dụng liệu pháp điều chỉnh xương khớp rất nhẹ nhàng, giúp giảm đau nhanh, làm khớp hoạt động tốt hơn, và khôi phục lại sự cân bằng tự nhiên.",
    },
    {
        title: "Đội Ngũ Bác Sĩ Giàu Kinh Nghiệm",
        desc: "Phòng khám có đội ngũ bác sĩ tay nghề cao, được đào tạo bài bản và có kinh nghiệm giúp hàng ngàn người lớn tuổi, người bệnh văn phòng tìm lại cuộc sống khỏe mạnh, không còn bị cơn đau hành hạ. Sự tận tâm luôn là kim chỉ nam.",
    },
    {
        title: "Giải Pháp Sức Khỏe Toàn Diện",
        desc: "Chúng tôi không chỉ chữa đau mà còn giúp cô, chú, anh, chị khỏe toàn diện. Giải pháp bao gồm: Điều chỉnh xương khớp, Hướng dẫn các bài tập phục hồi chức năng riêng, và Tư vấn dinh dưỡng để cơ thể hồi phục từ bên trong.",
    },
];

// --- NEW COMPONENT: ReasonItem (Đã tích hợp logic Dropdown) ---
const ReasonItem = ({ item, index }: { item: typeof REASONS[0], index: number }) => {
    const MAX_LENGTH = 100; // Giới hạn ký tự hiển thị ban đầu
    const [isExpanded, setIsExpanded] = useState(false);

    const needsTruncation = item.desc.length > MAX_LENGTH;

    const displayText = needsTruncation && !isExpanded
        ? item.desc.substring(0, MAX_LENGTH) + '...'
        : item.desc;

    const Icon = isExpanded ? ChevronUp : ChevronDown;

    return (
        <div key={index}
            // Thêm pointer-events-auto để cho phép click mở rộng
            className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100 cursor-pointer"
            onClick={() => needsTruncation && setIsExpanded(!isExpanded)}
        >
            <div className="shrink-0 pt-1">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <CheckCircle2 size={20} />
                </div>
            </div>
            <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base mb-1">
                    {displayText}
                </p>
                {needsTruncation && (
                    <div className="flex items-center text-red-600 font-semibold text-xs mt-1">
                        {isExpanded ? 'Thu gọn' : 'Xem thêm chi tiết'}
                        <Icon size={16} className="ml-1" />
                    </div>
                )}
            </div>
        </div>
    );
};

const WhyChooseUs = () => {
    // currentPopup: { title, desc, Icon } cho thông tin chi tiết (Modal nhỏ)
    const [currentPopup, setCurrentPopup] = useState<{ title: string, desc: string, Icon: any } | null>(null);
    // showHotspots: Boolean cho biết liệu có đang tạm dừng và show 3 nút không
    const [showHotspots, setShowHotspots] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    // NEW STATE: Dùng để kiểm soát nút hướng dẫn (Hand icon)
    const [showClickInstruction, setShowClickInstruction] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const hasTriggeredRef = useRef(false); // Dùng để tự động dừng video 1 lần duy nhất

    // --- LOGIC THEO DÕI THỜI GIAN VIDEO (TỰ ĐỘNG DỪNG & HƯỚNG DẪN) ---
    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {

            // Logic 1: Tự động dừng tại giây thứ 10
            if (video.currentTime >= 10 && !hasTriggeredRef.current) {
                video.pause();
                setIsPlaying(false);
                setShowHotspots(true);
                hasTriggeredRef.current = true; // Đánh dấu đã kích hoạt
            }

            // Logic 2: Hiển thị Hướng dẫn Click từ 8s đến 12s
            if (video.currentTime >= 8 && video.currentTime < 12 && video.paused === false) {
                setShowClickInstruction(true);
            } else {
                setShowClickInstruction(false);
            }
        }
    };

    // Đồng bộ state và gắn event listener
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const onPlay = () => setIsPlaying(true);
            const onPause = () => setIsPlaying(false);

            video.addEventListener('play', onPlay);
            video.addEventListener('pause', onPause);
            video.addEventListener('timeupdate', handleTimeUpdate); // Gắn listener tự động dừng

            return () => {
                video.removeEventListener('play', onPlay);
                video.removeEventListener('pause', onPause);
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []);

    // Xử lý click trên khu vực video (Chỉ hoạt động khi không có Hotspot)
    const handleClickVideoArea = () => {
        const video = videoRef.current;
        if (video) {
            // Logic: Nếu đang phát -> Tạm dừng và hiện 3 nút (Hotspots)
            if (!video.paused && !video.ended) {
                video.pause();
                setIsPlaying(false);
                setShowHotspots(true);
                setCurrentPopup(null);
            } else if (video.paused && !video.ended) {
                // Logic: Nếu đang tạm dừng và không có Hotspots -> Phát lại
                if (!showHotspots) {
                    video.play();
                    setIsPlaying(true);
                }
            }
        }
    };

    // Xử lý khi chọn một nút chức năng (Hiện Modal chi tiết)
    const handleSelectOption = (item: typeof INTERACTION_POINTS[0]) => {
        setShowHotspots(false); // Ẩn 3 nút đi
        setCurrentPopup({ title: item.title, desc: item.desc, Icon: item.Icon }); // Hiện Modal chi tiết
    };

    // Hàm đóng Modal chi tiết (Nếu Modal chi tiết đang hiện)
    const handleCloseDetailedPopup = () => {
        setCurrentPopup(null);
        setShowHotspots(true); // Quay lại 3 nút tương tác
    };

    // Hàm đóng 3 nút tương tác và tiếp tục phát video (Nút RIÊNG BIỆT)
    const handleContinueVideo = () => {
        setShowHotspots(false);
        setCurrentPopup(null);
        if (videoRef.current) videoRef.current.play();
        hasTriggeredRef.current = false; // Reset trigger để nó có thể tự dừng lần nữa (nếu video ngắn và lặp)
    };

    return (
        <section id="why-choose-us" className="bg-white pt-20">
            <div className="container mx-auto px-6 mb-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Cột Video (Đã làm tương tác) */}
                    <div className="relative h-full min-h-[50vh] lg:min-h-[90vh] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">

                        {/* Vùng Click để Pause/Play */}
                        <div
                            onClick={handleClickVideoArea}
                            // Khi Hotspot hiện, ta muốn click vào Hotspot chứ không phải click vào video
                            className={`absolute inset-0 z-10 cursor-pointer ${showHotspots ? 'bg-transparent pointer-events-none' : 'bg-transparent'}`}
                        >
                            {/* Icon Play lớn khi đang pause (trạng thái mặc định) */}
                            {!isPlaying && !showHotspots && (
                                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 text-white transition-all hover:bg-black/50">
                                    <PlayCircle size={80} fill="currentColor" className="opacity-90 transition-transform hover:scale-105" />
                                </div>
                            )}

                            {/* --- HƯỚNG DẪN CLICK (CHỈ HIỆN TRÊN MOBILE) --- */}
                            {showClickInstruction && (
                                // ẨN TRÊN LG (DESKTOP)
                                <div className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                                    <div className="p-4 bg-white/80 backdrop-blur-sm rounded-full text-red-600 shadow-2xl animate-bounce flex items-center gap-2">
                                        <Hand size={24} className="transform -rotate-45" />
                                        <span className="font-bold text-sm uppercase hidden sm:inline">Click để xem phân tích</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <video
                            ref={videoRef}
                            className="object-cover w-full h-full"
                            muted
                            playsInline
                            loop
                            autoPlay // Tự động chạy khi tải component
                        >
                            <source src="/images/service/videos.mp4" type="video/mp4" />
                            Trình duyệt của bạn không hỗ trợ thẻ video.
                        </video>
                        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                        <div className="absolute inset-0 z-50 pointer-events-none">

                            {showHotspots && (
                                <>
                                    {INTERACTION_POINTS.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleSelectOption(item)}
                                            style={item.position}
                                            // Lớp CSS cho nút Hotspot
                                            className={`pointer-events-auto absolute p-3 rounded-xl border-2 border-white 
                                                       bg-red-600/90 text-white shadow-xl backdrop-blur-sm 
                                                       hover:bg-red-700 hover:border-red-700 transition-all text-sm font-semibold flex items-center gap-2`}
                                        >
                                            <item.Icon size={18} className="shrink-0" />
                                            {/* Chỉ hiển thị tiêu đề chính */}
                                            {item.title}
                                        </button>
                                    ))}

                                    {/* NÚT TIẾP TỤC VIDEO RIÊNG BIỆT (GÓC DƯỚI PHẢI) */}
                                    <button
                                        onClick={handleContinueVideo}
                                        className="pointer-events-auto absolute bottom-5 right-5 bg-white text-red-600 font-bold py-3 px-6 rounded-full shadow-xl hover:bg-slate-100 transition-colors flex items-center gap-2"
                                    >
                                        <PlayCircle size={20} fill="currentColor" /> Tiếp tục
                                    </button>
                                </>
                            )}

                            {/* --- MODAL CHI TIẾT (Vẫn cần nền mờ để user tập trung đọc) --- */}
                            {currentPopup && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 pointer-events-auto">
                                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl relative border-2 border-red-100 animate-in fade-in zoom-in">

                                        <button
                                            onClick={handleCloseDetailedPopup}
                                            className="absolute top-3 right-3 text-slate-400 hover:text-red-500 transition-colors p-1"
                                        >
                                            <X size={24} />
                                        </button>

                                        <div className="flex justify-center mb-4">
                                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center border border-red-100">
                                                <currentPopup.Icon className="text-red-600 w-8 h-8" />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-extrabold text-red-600 mb-2 uppercase tracking-tight">
                                            {currentPopup.title}
                                        </h3>

                                        <div className="w-16 h-1 bg-red-200 mx-auto mb-4 rounded-full"></div>

                                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                            {currentPopup.desc}
                                        </p>

                                        <button
                                            onClick={handleCloseDetailedPopup} // Quay lại màn hình 3 nút
                                            className="w-full bg-[#e41212] hover:bg-[#c01010] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2 group"
                                        >
                                            Quay lại tùy chọn
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Cột Nội dung (Sử dụng ReasonItem mới) */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide">
                                <Sparkles size={18} className="fill-red-600" />
                                <span>Về Chúng Tôi</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2]">
                                Tại Sao Chọn <br /> <span className="text-red-700">Phòng Khám Tâm Thịnh?</span>
                            </h2>
                            <p className="text-slate-500 text-lg">
                                Chúng tôi kết hợp y học hiện đại và sự đồng cảm để mang lại kết quả điều trị tốt nhất cho từng bệnh nhân.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {REASONS.map((item, index) => (
                                // Sử dụng ReasonItem component
                                <ReasonItem key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Banner dưới cùng và CTA (Giữ nguyên) */}
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[800px] overflow-hidden">
                <Image
                    src="/images/news/111.png"
                    alt="Chiropractic treatment session"
                    fill
                    className="object-cover object-top"
                />
            </div>

            <div className="bg-[#e41212] py-20 text-center text-white relative overflow-hidden">
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