import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    Twitter // Dùng tạm icon Twitter cho X
} from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6 lg:col-span-1">
                        <h3 className="text-xl font-semibold text-white">Liên Hệ</h3>

                        <div className="space-y-4 text-slate-300">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="mt-1 shrink-0" />
                                <span>1018 Lạc Long Quân, phường 8, quận Tân Bình, Thành Phố Hồ Chí Minh, Việt Nam</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="shrink-0" />
                                <span>0869 967 733</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="shrink-0" />
                                <span>ykhoatamthinh@gmail.com</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-2">
                            {[Twitter, Instagram, Linkedin, Facebook].map((Icon, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center text-slate-300 hover:bg-white hover:text-[#0B1221] hover:border-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-semibold text-white mb-6">Liên Kết Nhanh</h3>
                        <ul className="space-y-4 text-slate-300">
                            <li>
                                <Link href="#" className="hover:text-[#e41212] transition-colors">Trợ Giúp Và Hỗ Trợ</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#e41212] transition-colors">Điều Kiện Và Điều Khoản</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#e41212] transition-colors">Liên Hệ Chúng Tôi</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#e41212] transition-colors">Nghề Nghiệp</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-6">Bản Tin</h3>
                        <div className="max-w-md">
                            <div className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder="Địa Chỉ Email"
                                    className="w-full px-6 py-4 rounded-full bg-transparent border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-[#00E5BE] transition-colors"
                                />
                                <button className="w-full px-6 py-4 rounded-full bg-[#e41212] hover:bg-[#c41010] text-white font-bold text-lg transition-all shadow-[0_0_15px_rgba(0,229,190,0.3)]">
                                    Đăng Ký
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-6 order-2 md:order-1">
                        <Link href="#" className="hover:text-white transition-colors">Chính Sách Bảo Mật</Link>
                        <Link href="#" className="hover:text-white transition-colors">Điều Kiện Và Điều Khoản</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cài Đặt Cookie</Link>
                    </div>
                    <div className="order-1 md:order-2">
                        <p>2025 Y Khoa Tam Thinh. Tất Cả Quyền Được Bảo Lưu.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};
