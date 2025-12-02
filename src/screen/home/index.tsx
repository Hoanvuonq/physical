import BlogSection from "@/components/blogSection";
import { ServiceSection } from "@/components/serviceSection";
import TestimonialSection from "@/components/testimonialSection";
import WhyChooseUs from "@/components/whyChooseUs";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <section id="home" className="container mx-auto px-6 pt-[4vw]">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                    <div className="lg:w-1/2 w-full space-y-10">
                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.2] tracking-tight text-slate-900">
                            PHÒNG KHÁM TÂM THỊNH <br />
                            <span className="text-red-700">CHĂM SÓC CƠ XƯƠNG KHỚP TỐT NHẤT</span>  <br />
                            CHO BẠN SỨC KHỎE TỐT NHẤT.
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                            Một bác sĩ chấn thương xương khớp xử lý các rối loạn xương khớp bằng cách tập trung vào việc điều chỉnh xương khớp, nhằm nâng cao sức khỏe tổng thể và giảm đau tự nhiên.
                            adjustments, aiming to enhance overall health and relieve pain naturally.
                        </p>

                        <button className="bg-[#e41212] hover:bg-[#c41010] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-teal-100">
                            Đặt Lịch Hẹn
                        </button>
                    </div>
                    <div className="lg:w-1/2 w-full relative">
                        <div className="relative rounded-[1vw] overflow-hidden bg-slate-100 aspect-[4/5] lg:aspect-square">
                            <Image
                                src="/images/news/new01.png"
                                alt="Doctor therapy"
                                width={500}
                                height={500}
                                className="object-contain w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 xl:text-left text-center md:grid-cols-3 xl:gap-1 gap-6 items-center border-y border-slate-100 py-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Khách Hàng Hài Lòng</h3>
                        <p className="text-slate-500 text-sm">
                            Bạn có cảm thấy mệt mỏi khi phải đối mặt với các vấn đề về mụn trứng cá, vấn đề về mụn trứng cá? Chào mừng bạn đến với Thera.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                                        <Image src={`/images/logo/avatar.png`} alt="user" width={40} height={40} />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-sm">1050+ Đánh Giá</p>
                                <p className="text-slate-500 text-xs">Từ Khách Hàng</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-52 h-64 rounded-2xl overflow-hidden bg-slate-200">
                            <Image
                                src="/images/news/new02.png"
                                alt="Happy patient"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="space-y-4 pl-0 md:pl-8">
                        <h3 className="text-xl font-bold">Ưu Đãi Đặc Biệt Trên Lịch Hẹn Đầu Tiên</h3>
                        <p className="text-slate-500 text-sm">
                            Làm cám ơn cho việc lựa chọn chúng tôi, chúng tôi đang cung cấp một ưu đãi đặc biệt trên lịch hẹn đầu tiên của bạn!
                        </p>
                        <Link href="#" className="inline-flex items-center text-red-600 font-bold hover:gap-2 transition-all">
                            Nhận ưu đãi <MoveRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-slate-50 py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] shadow-xl">
                                <Image
                                    src="/images/news/new03.png"
                                    alt="Doctor Talking"
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide">
                                <span className="text-xl">✨</span> Giới Thiệu
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                                Đối Tác Của Bạn Trong Sức Khỏe Và Sức Khỏe.
                            </h2>

                            <p className="text-slate-500 leading-relaxed">
                                Chúng tôi cam kết cung cấp chăm sóc chấn thương xương khớp tại một môi trường chào đón và hỗ trợ. Phương pháp của chúng tôi tập trung vào việc điều chỉnh xương khớp, nhằm nâng cao sức khỏe tổng thể và giảm đau tự nhiên.
                            </p>

                            <button className="bg-[#e41212] hover:bg-[#c41010] text-white font-bold py-3 px-8 rounded-full transition-all mt-4">
                                Tìm Hiểu Thêm
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <ServiceSection />
            <WhyChooseUs />
            <TestimonialSection />
            <BlogSection />
        </main>
    );
}