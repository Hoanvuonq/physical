import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    Twitter
} from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">

                {/* Grid chia làm 4 cột trên Desktop (lg:grid-cols-4) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    <div className="space-y-8">
                        <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-700 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1666698628355!2d106.64969231471853!3d10.798506292306634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529486c67b96b%3A0x6b772421975e5437!2zMTAxOCBM4HuhYyBMb25nIFF1w6JuLCBQaMaw4budbmcgOCwgVMOibiBCw6xuaCwgVGjDoW5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="filter grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white">Liên Hệ</h3>

                        <div className="space-y-4 text-slate-300">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="mt-1 shrink-0 text-[#e41212]" />
                                <span className="text-sm">1018 Lạc Long Quân, phường 8, quận Tân Bình, TP.HCM</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="shrink-0 text-[#e41212]" />
                                <span className="text-sm">0869 967 733</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="shrink-0 text-[#e41212]" />
                                <span className="text-sm">ykhoatamthinh@gmail.com</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pt-2">
                            {[Twitter, Instagram, Linkedin, Facebook].map((Icon, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center text-slate-300 hover:bg-[#e41212] hover:text-white hover:border-[#e41212] transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* --- CỘT 3: LIÊN KẾT NHANH --- */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Liên Kết Nhanh</h3>
                        <ul className="space-y-4 text-slate-300">
                            <li><Link href="#" className="hover:text-[#e41212] transition-colors">Về Chúng Tôi</Link></li>
                            <li><Link href="#" className="hover:text-[#e41212] transition-colors">Dịch Vụ</Link></li>
                            <li><Link href="#" className="hover:text-[#e41212] transition-colors">Đội Ngũ Bác Sĩ</Link></li>
                            <li><Link href="#" className="hover:text-[#e41212] transition-colors">Tin Tức Y Khoa</Link></li>
                            <li><Link href="#" className="hover:text-[#e41212] transition-colors">Đặt Lịch Hẹn</Link></li>
                        </ul>
                    </div>

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
                                    className="w-full px-5 py-3 rounded-full bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-[#e41212] transition-colors"
                                />
                                <button className="w-full px-5 py-3 rounded-full bg-[#e41212] hover:bg-[#c41010] text-white font-bold transition-all shadow-md hover:shadow-lg">
                                    Đăng Ký Ngay
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                {/* --- FOOTER BOTTOM --- */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-6 order-2 md:order-1">
                        <Link href="#" className="hover:text-white transition-colors">Chính Sách Bảo Mật</Link>
                        <Link href="#" className="hover:text-white transition-colors">Điều Khoản Sử Dụng</Link>
                    </div>
                    <div className="order-1 md:order-2 text-center md:text-right">
                        <p>© 2025 Y Khoa Tam Thinh. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};