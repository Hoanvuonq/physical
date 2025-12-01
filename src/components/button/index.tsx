'use client'
import { cn } from '@/utils/cn';
import React from 'react'

interface IButtonProps {
    label: string;
    onClick?: () => void; // Nên để optional (?)
    className?: string;
    type?: "button" | "submit" | "reset"; // Thêm prop type để dùng trong form nếu cần
}

export const Button = ({ label, onClick, className, type = "button" }: IButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(
                // 1. Layout & Spacing cơ bản (Mobile First)
                "flex items-center justify-center gap-2",
                "px-6 py-2 rounded-full",

                // 2. Style màu sắc & Viền (Mặc định)
                "border-2 border-slate-900 text-slate-900 bg-transparent",
                "transition-all duration-300", // Hiệu ứng mượt
                "hover:bg-slate-900 hover:text-white", // Hover đổi màu

                // 3. Typography (Responsive)
                "text-sm font-bold", // Mobile: chữ 14px
                "md:text-base",      // Desktop (md trở lên): chữ 16px

                // 4. Custom Class (Ghi đè nếu cần)
                className
            )}
        >
            {/* Bỏ span bao ngoài hoặc giữ lại nhưng không set cứng size nữa */}
            <span>{label}</span>
        </button >
    )
}