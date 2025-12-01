"use client";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

// Dữ liệu mẫu (Data giả lập)
const BLOGS = [
    {
        id: 1,
        tag: "Chăm Sóc Y Tế",
        title: "Nhấn Mạnh Khía Cạnh Khoa Học Của Chăm Sóc Y Tế",
        image: "/images/news/1.png",
    },
    {
        id: 2,
        tag: "Chăm Sóc Chấn Thương Xương Khớp",
        title: "Hiểu Rõ Lợi Ích Của Chăm Sóc Chấn Thương Xương Khớp",
        image: "/images/news/2.png",
    },
    {
        id: 3,
        tag: "Chăm Sóc Thủ Công",
        title: "5 Bài Tập Đơn Giản Để Giảm Đau Lưng",
        image: "/images/news/4.png",
    },
];

const BlogSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide mb-2">
                            <Sparkles size={18} className="fill-red-600" />
                            <span>Bài Viết</span>
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900">
                            Tin Tức & Bài Viết
                        </h2>
                    </div>

                    <Link href="/blog">
                        <button className="bg-[#e41212] hover:bg-[#c41010] text-white font-bold py-3 px-8 rounded-full transition-all shadow-md">
                            Xem tất cả
                        </button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {BLOGS.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    {post.tag}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#e41212] transition-colors">
                                    {post.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogSection;