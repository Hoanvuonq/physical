"use client"
import Image from 'next/image'

const About = () => {
    return (
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
                            <span className="text-xl">✨</span> CHÚNG TÔI LÀ TÂM THỊNH
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            Đối Tác Đáng Tin Cậy Cho Sức Khỏe Lâu Dài Của Bạn.
                        </h2>

                        <p className="text-slate-500 leading-relaxed">
                            Chúng tôi cam kết mang đến dịch vụ chăm sóc cơ xương khớp chuyên nghiệp trong một môi trường thân thiện và hỗ trợ. Với phương pháp tập trung vào <span className="font-bold">điều chỉnh xương khớp tự nhiên</span>,
                            chúng tôi giúp bạn không chỉ giảm đau mà còn
                            một cách bền vững.
                        </p>
                        <button className="bg-[#e41212] hover:bg-[#c41010] text-white font-bold py-3 px-8 rounded-full transition-all mt-4">
                            Tìm Hiểu Thêm Về Chúng Tôi
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
