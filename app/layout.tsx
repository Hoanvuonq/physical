import type { Metadata } from "next";
import Template from "./tempalte";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Phòng Khám Tâm Thịnh | Chăm sóc sức khỏe tâm thần uy tín tại Tân Bình",
  description:
    "Phòng Khám Tâm Thịnh chuyên tư vấn tâm lý, điều trị lo âu, trầm cảm, rối loạn giấc ngủ với đội ngũ bác sĩ, chuyên gia tâm lý uy tín tại 1018 Lạc Long Quân, Phường 8, Tân Bình, TP.HCM.",
  metadataBase: new URL("https://www.phongkhamtamthinh.com"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Phòng Khám Tâm Thịnh | Phòng khám tâm lý & tâm thần tại Tân Bình",
    description:
      "Tư vấn tâm lý, điều trị lo âu, trầm cảm, stress, rối loạn giấc ngủ. Đặt lịch khám tại Phòng Khám Tâm Thịnh - 1018 Lạc Long Quân, P.8, Tân Bình, TP.HCM.",
    url: "/",
    siteName: "Phòng Khám Tâm Thịnh",
    locale: "vi_VN",
    type: "website",
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
  },
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="vi" data-theme="white">
      <body className="relative bg-main-background">
        <main className="relative w-full">
          <Template {...{ children }}>
            {children}
          </Template>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;