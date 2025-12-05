'use client'
import { cn } from '@/utils/cn';
import React from 'react'
import { MoveRight } from 'lucide-react'; // Assuming you have the 'lucide-react' icon library installed

// 1. Define the possible button variants
type ButtonVariant = "default" | "primary" | "secondary";

interface IButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    icon?: React.ReactNode;
    variant?: ButtonVariant;
}

export const Button = ({
    label,
    onClick,
    className,
    type = "button",
    icon,
    variant = "default"
}: IButtonProps) => {

    const baseClasses = cn(
        "group flex items-center justify-center gap-2",
        "py-3 px-6 rounded-full cursor-pointer",
        "transition-all duration-300",
        "text-sm font-bold md:text-base",
        className
    );

    const variantClasses = {
        default: cn(
            "border-2 border-slate-900 text-slate-900 bg-transparent",
            "hover:bg-[#e41212] hover:text-white"
        ),

        primary: cn(
            "bg-[#e41212] hover:bg-[#c41010] text-white",
            "shadow-lg shadow-teal-100/50"
        ),

        secondary: cn(
            "bg-[#e41212] hover:bg-[#c41010] text-white",
            "shadow-md shrink-0"
        ),
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(baseClasses, variantClasses[variant])}
        >
            <span>{label}</span>
            {icon && (
                <span className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    {icon}
                </span>
            )}
        </button >
    )
}