"use client";
import { ToastProvider } from "@/hooks/useToastProvider";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/layouts/header";
import { Footer } from "@/layouts/footer";

interface ITemplateProps {
    children: ReactNode;
}

const Template = ({ children }: ITemplateProps) => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <ToastProvider />
            <Header />
            <main className="flex-1 w-full pt-20">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Template;