import { ArrowDown, Zap } from "lucide-react";
import { Activity } from "react";

export const INTERACTION_POINTS = [
    {
        id: 1,
        title: "PHÂN TÍCH CỔ/VAI GÁY (C2-C7)",
        desc: "Hệ thống AI cảnh báo căng cơ thang và đốt sống C5-C7. Nguyên nhân thường do sai tư thế ngồi. Cần giải cơ chuyên sâu để khôi phục biên độ vận động.",
        Icon: Activity,
        position: { top: '25%', left: '15%' }
    },
    {
        id: 2,
        title: "ĐAU LƯNG GIỮA (Đốt T1-T12)",
        desc: "Đau mỏi vùng lưng giữa, có thể liên quan đến vấn đề phổi hoặc thoát vị đĩa đệm lưng trên. Cần chụp X-quang để xác định chính xác.",
        Icon: Zap,
        position: { top: '45%', right: '18%' }
    },
    {
        id: 3,
        title: "ĐAU LƯNG DƯỚI (L1-S1)",
        desc: "Rủi ro chèn ép L4-L5 hoặc S1 gây đau thần kinh tọa. Thoái hóa, thoát vị đĩa đệm là nguyên nhân phổ biến. Điều chỉnh cột sống là cần thiết.",
        Icon: ArrowDown,
        position: { bottom: '20%', left: '20%' }
    },
];

export const REASONS = [
    {
        title: "Kế Hoạch Chăm Sóc Riêng Từng Người",
        desc: "Bác sĩ dành thời gian lắng nghe kỹ câu chuyện của cô, chú, anh, chị để hiểu rõ chỗ đau và mong muốn về sức khỏe. Từ đó xây dựng một chương trình điều trị chỉ dành riêng cho mình, giúp giải quyết tận gốc cơn đau một cách nhẹ nhàng nhất.",
    },
    {
        title: "Chữa Trị Tự Nhiên, Không Cần Phẫu Thuật",
        desc: "Không lo lắng về dao kéo hay thuốc tây. Chúng tôi tập trung vào khả năng tự hồi phục của cơ thể. Sử dụng liệu pháp điều chỉnh xương khớp rất nhẹ nhàng, giúp giảm đau nhanh, làm khớp hoạt động tốt hơn, và khôi phục lại sự cân bằng tự nhiên.",
    },
    {
        title: "Đội Ngũ Bác Sĩ Giàu Kinh Nghiệm",
        desc: "Phòng khám có đội ngũ bác sĩ tay nghề cao, được đào tạo bài bản và có kinh nghiệm giúp hàng ngàn người lớn tuổi, người bệnh văn phòng tìm lại cuộc sống khỏe mạnh, không còn bị cơn đau hành hạ. Sự tận tâm luôn là kim chỉ nam.",
    },
    {
        title: "Giải Pháp Sức Khỏe Toàn Diện",
        desc: "Chúng tôi không chỉ chữa đau mà còn giúp cô, chú, anh, chị khỏe toàn diện. Giải pháp bao gồm: Điều chỉnh xương khớp, Hướng dẫn các bài tập phục hồi chức năng riêng, và Tư vấn dinh dưỡng để cơ thể hồi phục từ bên trong.",
    },
];