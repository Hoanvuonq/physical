import React from "react";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from "lucide-react";
import Link from "next/link";

const SOCIAL_LINKS = [
    {
        Icon: Twitter,
        href: "#",
    },
    {
        Icon: Instagram,
        href: "#about",
    },
    {
        Icon: Linkedin,
        href: "#services",
    },
    {
        Icon: Facebook,
        href: "https://www.facebook.com/profile.php?id=61574963804292",
    },
];

export const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-white pt-20 pb-10 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

                    <div className="space-y-8">
                        <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-700 shadow-lg relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5164.579537441051!2d106.64825541168395!3d10.78335388932145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f000e5f6b79%3A0xb7ffb9ef72f36db3!2zUGjDsm5nIGtow6FtIFZMVEwgVMOibSBUaOG7i25oIHwgVuG6rXQgbMO9IHRy4buLIGxp4buHdSB8IFBo4bulYyBo4buTaSBjaOG7qWMgbsSDbmc!5e1!3m2!1svi!2sus!4v1764644391110!5m2!1svi!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 w-full h-full"
                                title="Bản đồ Phòng khám Tâm Thịnh"
                            ></iframe>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white">Liên Hệ</h3>
                        <div className="space-y-4 text-slate-300">
                            <Link
                                href="https://maps.app.goo.gl/i3aCMszkvtEPtbuS8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 group hover:text-white transition-colors"
                            >
                                <MapPin
                                    size={20}
                                    className="mt-1 shrink-0 text-[#e41212] group-hover:scale-110 transition-transform"
                                />
                                <span className="text-sm">
                                    1018 Lạc Long Quân, Phường 8, Tân Bình, TP.HCM
                                </span>
                            </Link>

                            <Link
                                href="tel:0869967733"
                                className="flex items-center gap-3 group hover:text-white transition-colors"
                            >
                                <Phone
                                    size={20}
                                    className="shrink-0 text-[#e41212] group-hover:scale-110 transition-transform"
                                />
                                <span className="text-sm">
                                    0869 967 733
                                </span>
                            </Link>

                            <Link
                                href="mailto:ykhoatamthinh@gmail.com"
                                className="flex items-center gap-3 group hover:text-white transition-colors"
                            >
                                <Mail
                                    size={20}
                                    className="shrink-0 text-[#e41212] group-hover:scale-110 transition-transform"
                                />
                                <span className="text-sm">
                                    ykhoatamthinh@gmail.com
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            {SOCIAL_LINKS.map((item, index) => {
                                const IconComponent = item.Icon;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center text-slate-300 hover:bg-[#e41212] hover:text-white hover:border-[#e41212] transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <IconComponent size={18} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">
                            Liên Kết Nhanh
                        </h3>
                        <ul className="space-y-4 text-slate-300">
                            {[
                                "Về Chúng Tôi",
                                "Dịch Vụ",
                                "Đội Ngũ Bác Sĩ",
                                "Tin Tức Y Khoa",
                                "Đặt Lịch Hẹn",
                            ].map((text, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="hover:text-[#e41212] transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[2px] bg-[#e41212] transition-all duration-300"></span>
                                        {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --- CỘT 4: BẢN TIN --- */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Bản Tin</h3>
                        <div className="w-full">
                            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                                Nhận thông tin sức khỏe hữu ích và ưu đãi mới nhất từ chúng tôi.
                            </p>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder="Email của bạn"
                                    className="w-full px-5 py-3 rounded-full bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-[#e41212] focus:ring-1 focus:ring-[#e41212] transition-all"
                                />
                                <button className="w-full px-5 py-3 rounded-full bg-[#e41212] hover:bg-[#c41010] text-white font-bold transition-all shadow-md hover:shadow-lg hover:shadow-red-900/20 active:scale-95">
                                    Đăng Ký Ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-6 order-2 md:order-1">
                        <a href="#" className="hover:text-white transition-colors">
                            Chính Sách Bảo Mật
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Điều Khoản Sử Dụng
                        </a>
                    </div>
                    <div className="order-1 md:order-2 text-center md:text-right">
                        <p>© 2025 Y Khoa Tam Thinh. All Rights Reserved.</p>
                    </div>
                </div>
            </div >
        </footer >
    );
};