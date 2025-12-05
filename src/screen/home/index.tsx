"use client"
import Image from "next/image";
import Link from "next/link";
import About from "@/components/about";
import BlogSection from "@/components/blogSection";
import { ServiceSection } from "@/components/serviceSection";
import TestimonialSection from "@/components/TestimonialSections";
import WhyChooseUs from "@/components/whyChooseUs";
import { MoveRight } from "lucide-react";
import ReviewComponents from "@/components/reviewComponents";
import { Button } from "@/components";


export default function Home() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <section id="home" className="container mx-auto px-6 pt-[4vw]">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                    <div className="lg:w-1/2 w-full space-y-10">
                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.2] tracking-tight text-slate-900">
                            KHÔI PHỤC SỨC SỐNG <br />
                            <span className="text-red-700">TỪ GỐC RỄ CƠ XƯƠNG KHỚP</span> <br />
                            CHO CUỘC SỐNG KHÔNG GIỚI HẠN.
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                            <span className="font-bold text-black text-xl">Phòng Khám VLTL Tâm Thịnh</span> là nơi các chuyên gia Chấn thương chỉnh hình và Xương khớp cung cấp các giải pháp tự nhiên, không xâm lấn. Chúng tôi tập trung điều chỉnh cột sống để giải phóng cơn đau và nâng cao khả năng vận động, giúp bạn tận hưởng trọn vẹn từng khoảnh khắc.
                        </p>

                        <Button label="Đặt Lịch Hẹn Tư Vấn" variant="primary" className="py-4 px-8" />
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
                        <h2 className="text-2xl font-bold">Hành Trình Giảm Đau, Tăng Chất Lượng Sống</h2>
                        <p className="text-slate-500 text-sm">
                            Đừng để cơn đau cản trở bạn. Hơn 1000 khách hàng đã tìm lại sự thoải mái và chất lượng cuộc sống tốt hơn tại Tâm Thịnh. Chúng tôi tự hào là đối tác sức khỏe đáng tin cậy của bạn.
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
                                <p className="font-bold text-sm">1050+ Đánh Giá Tích Cực</p>
                                <p className="text-slate-500 text-xs">Từ Khách Hàng Thân Thiết</p>
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
                        <h3 className="text-xl font-bold">Ưu Đãi Đặc Quyền Cho Lần Khám Đầu Tiên</h3>
                        <p className="text-slate-500 text-sm">
                            Để tri ân sự tin tưởng của bạn, chúng tôi dành tặng một ưu đãi đặc biệt trên buổi thăm khám và tư vấn đầu tiên. Hãy bắt đầu hành trình phục hồi ngay hôm nay!
                        </p>
                        <Link href="#" className="inline-flex items-center text-red-600 font-bold hover:gap-2 transition-all">
                            Khám phá ưu đãi <MoveRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <About />
            <ServiceSection />
            <WhyChooseUs />
            <TestimonialSection />
            <ReviewComponents />
            <BlogSection />
        </main>
    );
}