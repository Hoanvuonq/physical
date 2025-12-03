"use client"
import Template from "./tempalte";
import { PropsWithChildren } from "react";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" data-theme="white">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <title>Phòng Khám Tâm Thịnh</title>
        <meta
          name="description"
          content="Phòng Khám Tâm Thịnh: Chăm sóc sức khỏe tâm thần, tư vấn tâm lý chuyên sâu và điều trị các vấn đề lo âu, trầm cảm, rối loạn giấc ngủ. Đội ngũ bác sĩ, chuyên gia tâm lý tận tâm, uy tín tại 1018 Lạc Long Quân, Phường 8, Tân Bình, TP.HCM. Đặt lịch hẹn ngay!"
        />
      </head>
      <body className="relative bg-main-background">
        <main className="relative w-full">
          <Template {...{ children }} >
            {children}
          </Template>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;