import React from 'react';

const TableOfContents: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Nội Dung Bài Viết</h2>
      <ul className="space-y-2">
        <li><a href="#section1" className="text-blue-600 hover:underline">1. Quy trình 5S là gì?</a></li>
        <li><a href="#section2" className="text-blue-600 hover:underline">2. Lợi ích quy trình 5S đem lại</a>
          <ul className="ml-4 mt-2 space-y-1">
            <li><a href="#section2-1" className="text-blue-600 hover:underline">2.1 Cải thiện rõ nét môi trường làm việc</a></li>
            <li><a href="#section2-2" className="text-blue-600 hover:underline">2.2 Tiết kiệm thời gian làm kế</a></li>
            <li><a href="#section2-3" className="text-blue-600 hover:underline">2.3 Tăng năng suất làm việc</a></li>
            <li><a href="#section2-4" className="text-blue-600 hover:underline">2.4 Tiết kiệm chi phí</a></li>
            <li><a href="#section2-5" className="text-blue-600 hover:underline">2.5 Tăng chất lượng sản phẩm</a></li>
          </ul>
        </li>
        <li><a href="#section3" className="text-blue-600 hover:underline">3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</a></li>
        <li><a href="#section4" className="text-blue-600 hover:underline">4. Quy trình 5S gồm các bước:</a>
          <ul className="ml-4 mt-2 space-y-1">
            <li><a href="#section4-1" className="text-blue-600 hover:underline">4.1 Seiri (Ngăn nắp)</a></li>
            <li><a href="#section4-2" className="text-blue-600 hover:underline">4.2 Seiton (Sắp xếp)</a></li>
            <li><a href="#section4-3" className="text-blue-600 hover:underline">4.3 Seiso (Vệ sinh)</a></li>
            <li><a href="#section4-4" className="text-blue-600 hover:underline">4.4 Seiketsu (Tiêu chuẩn hóa)</a></li>
            <li><a href="#section4-5" className="text-blue-600 hover:underline">4.5 Shitsuke (Kỷ luật)</a></li>
          </ul>
        </li>
        <li><a href="#section5" className="text-blue-600 hover:underline">5. Quy trình được thực hiện như sau:</a>
          <ul className="ml-4 mt-2 space-y-1">
            <li><a href="#section5-1" className="text-blue-600 hover:underline">5.1 Giai đoạn chuẩn bị</a></li>
            <li><a href="#section5-2" className="text-blue-600 hover:underline">5.2 Triển khai rộng rãi</a></li>
            <li><a href="#section5-3" className="text-blue-600 hover:underline">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</a></li>
            <li><a href="#section5-4" className="text-blue-600 hover:underline">5.4 Sàng lọc, sắp xếp và đánh giá</a></li>
            <li><a href="#section5-5" className="text-blue-600 hover:underline">5.5 Đánh giá</a></li>
          </ul>
        </li>
        <li><a href="#section6" className="text-blue-600 hover:underline">6. Quy trình 5S giống với Kaizen?</a></li>
        <li><a href="#section7" className="text-blue-600 hover:underline">7. Đối tượng nào nên áp dụng 5S?</a></li>
        <li><a href="#section8" className="text-blue-600 hover:underline">8. Các yếu tố tạo nên thành công cho quy trình 5S</a></li>
      </ul>
 
    </div>
  );
};

export default TableOfContents;