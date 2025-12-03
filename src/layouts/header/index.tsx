"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { HEADER_LINKS } from "@/contants/header"
import { cn } from "@/utils/cn"
import { Button } from "@/components"

const Header = () => {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link href="/">
                            <Image
                                src="/images/logo/logo.jpg"
                                alt="logo"
                                width={100}
                                height={100}

                                className="rounded-full w-12 h-12 md:w-16 md:h-16 object-cover"
                            />
                        </Link>
                    </div>

                    {/* --- DESKTOP NAVIGATION (Ẩn trên mobile, Hiện trên PC) --- */}
                    <div className="hidden md:flex items-center gap-8">
                        {HEADER_LINKS.map((link) => {
                            const isActive = link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-base font-bold px-2 py-1 transition-all duration-300",
                                        isActive
                                            ? "bg-text-gradient bg-clip-text text-transparent border-b-2 border-[#e41212]"
                                            : "text-[#555] hover:text-[#e41212] border-b-2 border-transparent"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}

                        <Button
                            label="Liên Hệ"
                            onClick={() => { }}
                            className="px-6 py-2 cursor-pointer rounded-full border border-slate-900 bg-transparent text-slate-900 hover:bg-[#e41212] hover:border-[#e41212] hover:text-white transition-all font-bold"
                        />
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-600 hover:text-[#e41212] transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
                    <div className="flex flex-col px-4 pt-4 pb-6 space-y-2">
                        {HEADER_LINKS.map((link) => {
                            const isActive = link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block text-lg font-bold py-3 px-2 rounded-lg",
                                        isActive
                                            ? "text-[#e41212] bg-red-50"
                                            : "text-[#555] hover:bg-slate-50 hover:text-[#e41212]"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                        <div className="pt-4">
                            <Button
                                label="Liên Hệ"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full justify-center py-3 bg-[#e41212] text-white font-bold rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header