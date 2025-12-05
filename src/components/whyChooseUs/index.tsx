"use client";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  PlayCircle,
  X,
  Hand,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "../button";
import { INTERACTION_POINTS, REASONS } from "@/contants/whyChoose";

const ReasonItem = ({
  item,
  index,
}: {
  item: (typeof REASONS)[number];
  index: number;
}) => {
  const MAX_LENGTH = 100;
  const [isExpanded, setIsExpanded] = useState(false);

  const needsTruncation = item.desc.length > MAX_LENGTH;

  const displayText =
    needsTruncation && !isExpanded
      ? item.desc.substring(0, MAX_LENGTH) + "..."
      : item.desc;

  const Icon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div
      key={index}
      className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100 cursor-pointer"
      onClick={() => needsTruncation && setIsExpanded(!isExpanded)}
    >
      <div className="shrink-0 pt-1">
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
          <CheckCircle2 size={20} />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h2>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base mb-1">
          {displayText}
        </p>
        {needsTruncation && (
          <div className="flex items-center text-red-600 font-semibold text-xs mt-1">
            {isExpanded ? "Thu gọn" : "Xem thêm chi tiết"}
            <Icon size={16} className="ml-1" />
          </div>
        )}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [currentPopup, setCurrentPopup] = useState<{
    title: string;
    desc: string;
    Icon: any;
  } | null>(null);
  const [showHotspots, setShowHotspots] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showClickInstruction, setShowClickInstruction] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasTriggeredRef = useRef(false);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.currentTime >= 10 && !hasTriggeredRef.current) {
      video.pause();
      setIsPlaying(false);
      setShowHotspots(true);
      hasTriggeredRef.current = true;
    }

    if (
      video.currentTime >= 8 &&
      video.currentTime < 12 &&
      video.paused === false
    ) {
      setShowClickInstruction(true);
    } else {
      setShowClickInstruction(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleClickVideoArea = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused && !video.ended) {
      video.pause();
      setIsPlaying(false);
      setShowHotspots(true);
      setCurrentPopup(null);
    } else if (video.paused && !video.ended) {
      if (!showHotspots) {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  const handleSelectOption = (item: (typeof INTERACTION_POINTS)[number]) => {
    setShowHotspots(false);
    setCurrentPopup({ title: item.title, desc: item.desc, Icon: item.Icon });
  };

  const handleCloseDetailedPopup = () => {
    setCurrentPopup(null);
    setShowHotspots(true);
  };

  const handleContinueVideo = () => {
    setShowHotspots(false);
    setCurrentPopup(null);
    if (videoRef.current) videoRef.current.play();
    hasTriggeredRef.current = false;
  };

  return (
    <section id="why-choose-us" className="bg-white pt-20">
      <div className="container mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Cột video */}
          <div className="relative h-full min-h-[50vh] lg:min-h-[90vh] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
            <div
              onClick={handleClickVideoArea}
              className={`absolute inset-0 z-10 cursor-pointer ${
                showHotspots ? "bg-transparent pointer-events-none" : "bg-transparent"
              }`}
            >
              {!isPlaying && !showHotspots && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 text-white transition-all hover:bg-black/50">
                  <PlayCircle
                    size={80}
                    fill="currentColor"
                    className="opacity-90 transition-transform hover:scale-105"
                  />
                </div>
              )}

              {showClickInstruction && (
                <div className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-full text-red-600 shadow-2xl animate-bounce flex items-center gap-2">
                    <Hand size={24} className="transform -rotate-45" />
                    <span className="font-bold text-sm uppercase hidden sm:inline">
                      Click để xem phân tích
                    </span>
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
              autoPlay
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
                      className="pointer-events-auto absolute p-3 rounded-xl border-2 border-white bg-red-600/90 text-white shadow-xl backdrop-blur-sm hover:bg-red-700 hover:border-red-700 transition-all text-sm font-semibold flex items-center gap-2"
                    >
                      <item.Icon size={18} className="shrink-0">
                        <></>
                      </item.Icon>
                      {item.title}
                    </button>
                  ))}

                  <button
                    onClick={handleContinueVideo}
                    className="pointer-events-auto absolute bottom-5 right-5 bg-white text-red-600 font-bold py-3 px-6 rounded-full shadow-xl hover:bg-slate-100 transition-colors flex items-center gap-2"
                  >
                    <PlayCircle size={20} fill="currentColor" /> Tiếp tục
                  </button>
                </>
              )}

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

                    <h2 className="text-xl font-extrabold text-red-600 mb-2 uppercase tracking-tight">
                      {currentPopup.title}
                    </h2>

                    <div className="w-16 h-1 bg-red-200 mx-auto mb-4 rounded-full" />

                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {currentPopup.desc}
                    </p>

                    <button
                      onClick={handleCloseDetailedPopup}
                      className="w-full bg-[#e41212] hover:bg-[#c01010] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2 group"
                    >
                      Quay lại tùy chọn
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Cột nội dung */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide">
                <Sparkles size={18} className="fill-red-600" />
                <span>Về Chúng Tôi</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2]">
                Tại Sao Chọn <br />{" "}
                <span className="text-red-700">Phòng Khám Tâm Thịnh?</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Chúng tôi kết hợp y học hiện đại và sự đồng cảm để mang lại kết quả điều trị tốt nhất cho từng bệnh nhân.
              </p>
            </div>

            <div className="grid gap-6">
              {REASONS.map((item, index) => (
                <ReasonItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Banner dưới + CTA */}
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
          <div className="pt-4 w-full flex justify-center items-center m-auto">
            <Button
              label=" Đăng Ký Khám Ngay"
              variant="primary"
              className="py-3 px-8 !bg-white  !text-[#e41212]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;