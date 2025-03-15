import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/modules/common/layout/Layout";
import Image from "next/image";
import TableOfContents from "@/modules/blog-post/TableOfContents";
import RelatedPosts from "@/modules/blog-post/RelatedPosts";
import ShareColumn from "@/modules/common/components/ShareColumn";
import { Breadcrumb } from "@/modules/common/components";
import { mockPosts } from "@/mock/mockData";

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  author,
  date,
  readTime,
}) => {
  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Tài nguyên", href: "/resources" },
          { label: "Blog", href: "/blog" },
          { label: "Quản lý sản xuất", href: "#" },
        ]}
      />

      <div className="flex flex-wrap -mx-4 ">
        {/* Share Column */}
        <div className="ml-[8rem] mt-[4rem] flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-4 writing-vertical w-[50px] font-bold">
            Chia sẻ
          </span>
          <ShareColumn />
        </div>

        <div className="container mx-auto px-4 flex">
          {/* Main content */}
          <div className="w-full lg:w-2/3 px-4">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>

            {/* Author and post info */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-row">
                <Image
                  src="/avatar.png"
                  alt="Leaf Icon"
                  width={64}
                  height={64}
                  className="mr-2"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-green-600 font-semibold mr-2">
                    Tác giả
                  </span>
                  <span className="font-bold mr-4">{author}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-500 text-sm">
                <Image
                  src="/calendar-icon.png"
                  alt="Calendar Icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <span className="mr-4">Cập nhật vào: {date}</span>
                <Image
                  src="/clock-icon.png"
                  alt="Clock Icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <span>{readTime} phút đọc</span>
              </div>
            </div>

            <div className="mb-6">
              <Image
                src="/5s_process.png"
                alt="Blog Header"
                width={800}
                height={400}
                layout="responsive"
              />
            </div>

            {/* Content goes here */}
            <div className="mb-8">
              <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4 py-2 mb-4">
                &ldquo;Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S
                là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ
                trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu
                tố tạo nên thành công của quy trình bạn nhé.&rdquo;
              </blockquote>

              <h2 className="text-2xl font-bold mb-4" id="section1">
                1. Quy trình 5S là gì?
              </h2>
              <p className="mb-4">
                Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào
                Nhật Bản.
              </p>
              <p className="mb-4">
                Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận
                dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5
                chữ S đầu trong tiếng Nhật:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Seiri (Ngăn nắp)</li>
                <li>Seiton (Sạch sẽ)</li>
                <li>Seiso (Trật tự)</li>
                <li>Shitsuke (Kỷ luật)</li>
                <li>Seiketsu (Tiêu chuẩn hóa)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4" id="section2">
                2. Lợi ích quy trình 5S đem lại
              </h2>
              <p className="mb-4">
                Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                một bước của quy trình với mục đích cải tiến môi trường làm việc
                của doanh nghiệp.
              </p>
              <p className="mb-4">
                Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng
                sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần
                thiết.
              </p>
              <p>
                Và khi doanh nghiệp áp dụng như vậy cũng hình thành thói quen
                tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một
                văn hóa doanh nghiệp tích cực.
              </p>

              <h2 className="text-2xl font-bold mb-4" id="section3">
                3. Tại sao doanh nghiệp cần áp dụng quy trình 5S?
              </h2>
              <p className="mb-4">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét hiệu quả của quy trình đem lại. Sau đây là các lý do
                vì sao bạn nên áp dụng quy trình:
              </p>

              <h3 className="text-xl font-semibold mb-3">
                3.1 Cải thiện vệ sinh môi trường làm việc
              </h3>
              <p className="mb-4">
                Môi trường làm việc sẽ được sắp xếp gọn gàng và trở nên sạch sẽ
                hơn, gọn gàng hơn và có bố cục hơn. Điều này tạo ra một không
                gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                3.2 Giảm thiểu thời gian tìm kiếm
              </h3>
              <p className="mb-4">
                Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
                thời gian tìm kiếm các vật dụng cần thiết trong công việc. Nhờ
                vào việc sắp xếp mọi thứ theo quy tắc và có trật tự, nhân viên
                sẽ dễ dàng tìm kiếm đồ đạc, máy móc, dữ liệu khi cần thiết mà
                không tốn nhiều thời gian.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                3.3 Nâng cao tinh thần làm việc
              </h3>
              <p className="mb-4">
                Nhờ vào quy tắc 5S, không gian làm việc trở nên sạch sẽ, thoải
                mái và có trật tự. Điều này tạo ra một không gian làm việc tích
                cực và vui vẻ, nhân viên sẽ có thể tập trung vào công việc tốt
                hơn, từ đó nâng cao hiệu suất làm việc và tinh thần làm việc của
                họ.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                3.4 Tiết kiệm chi phí
              </h3>
              <p className="mb-4">
                Bằng cách sắp xếp mọi thứ gọn gàng, giảm thiểu lãng phí và sử
                dụng hiệu quả nguồn lực sẵn có, doanh nghiệp có thể giảm thiểu
                chi phí vận hành đáng kể cho doanh nghiệp của mình.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                3.5 Tăng chất lượng sản phẩm
              </h3>
              <p className="mb-4">
                5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ
                đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản
                xuất không mong muốn.
              </p>

              <Image
                src="/frame_34.png"
                alt="Quy trình 5S gồm các bước"
                width={900}
                height={632}
                layout="responsive"
                className="mb-6"
              />

              <h3 className="text-xl font-semibold mb-3">
                4.1 Seiri (Ngăn nắp)
              </h3>
              <p className="mb-4">
                Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp,
                nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để
                tạo ra một không gian làm việc gọn gàng và tiết kiệm thời gian.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                4.2 Seiton (Sắp xếp)
              </h3>
              <p className="mb-4">
                Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết
                bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm
                kiếm và sử dụng chúng một cách dễ dàng.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                4.3 Seiso (Vệ sinh)
              </h3>
              <p className="mb-4">
                Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cả nhân
                viên trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch
                sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự
                lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                4.4 Seiketsu (Tiêu chuẩn hóa)
              </h3>
              <p className="mb-4">
                Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước
                này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách
                thức sử dụng các dụng cụ, thiết bị, tài liệu.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                4.5 Shitsuke (Kỷ luật)
              </h3>
              <p className="mb-4">
                Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng
                vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S
                trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật
                và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì
                và tuân thủ theo quy trình.{" "}
              </p>
              <Image
                src="/frame_39.png"
                alt="Các bước thực hiện quy trình 5S"
                width={900}
                height={632}
                layout="responsive"
                className="mb-6"
              />

              <h3 className="text-xl font-semibold mb-3">
                5.1 Giai đoạn chuẩn bị
              </h3>
              <p className="mb-4">
                Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đúng
                ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc
                phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ
                hiệu quả hơn.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                5.2 Triển khai rộng rãi
              </h3>
              <p className="mb-4">
                Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
                trình 5S cho tất cả mọi người trong doanh nghiệp nhằm rõ kiến
                thức chung như cách áp dụng như thế nào vào doanh nghiệp của
                bạn.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
              </h3>
              <p className="mb-4">
                Đây là bước có thể khiến mọi người không hài lòng trong các bước
                của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo
                không khí hào hứng cho từng cá nhân.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                5.4 Sáng tạo, sắp xếp và đánh giá
              </h3>
              <p className="mb-4">
                Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ
                doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc
                thực hiện sáng tạo và sắp xếp trở nên khoa học hơn, hiệu quả hơn
                và dễ dàng tìm kiếm sau này.
              </p>

              <h3 className="text-xl font-semibold mb-3">5.5 Đánh giá</h3>
              <p className="mb-4">
                Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá
                trình đã tiến và xem xét cần cải tiến phương diện nào hay không
                trong quá trình thực hiện quy trình 5S.
              </p>
              <h2 className="text-2xl font-bold mb-4" id="section6">
                6. Quy trình 5S có giống với Kaizen?
              </h2>
              <p className="mb-4">
                Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
                không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng
                giữa chúng có mối quan hệ chặt chẽ với nhau.
              </p>

              <blockquote className="border-l-4 border-green-500 pl-4 mb-4">
                <p className="italic">
                  Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
                  trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi
                  tích cực, mang tính tiến tục và bền vững.
                </p>
              </blockquote>

              <blockquote className="border-l-4 border-green-500 pl-4 mb-4">
                <p className="italic">
                  Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải
                  tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ,
                  sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
                </p>
              </blockquote>

              <p className="mb-4">
                Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy
                tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm
                việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước
                đầu tiên trong quá trình cải tiến liên tục của phương pháp
                Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải
                tiến tiếp theo.
              </p>

              <h2 className="text-2xl font-bold mb-4" id="section7">
                7. Đối tượng nào nên áp dụng 5S?
              </h2>
              <p className="mb-4">
                Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                doanh nghiệp nhỏ.
              </p>
              <p className="mb-4">
                Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức
                tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng
                hiệu quả.
              </p>

              <div className="mb-6">
                <Image
                  src="/frame_42.png"
                  alt="Các yếu tố tạo nên thành công quy trình 5S"
                  width={900}
                  height={506}
                  layout="responsive"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  Các yếu tố tạo nên thành công cho quy trình 5S
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4" id="section8">
                8. Các yếu tố tạo nên thành công cho quy trình 5S
              </h2>
              <p className="mb-4">
                Để những nhân tố quyết định đến quá trình thành công của quy
                trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là
                tư phát:
              </p>

              <ul className="list-disc list-inside mb-4 pl-4">
                <li className="mb-2">
                  Lãnh đạo cởi mở và sẵn lòng áp dụng quy trình vào doanh
                  nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh
                  nghiệp có áp dụng quy tắc này hay không.
                </li>
                <li className="mb-2">
                  Chương trình, kế hoạch thực hiện quy trình. Sau khi phía lãnh
                  đạo đồng ý, doanh nghiệp cần bố trí phần dàn trên ý tưởng, kế
                  hoạch thực hiện triển khai 5S.
                </li>
                <li className="mb-2">
                  Sự tự nguyện tham gia của toàn thể nhân viên. Doanh nghiệp cần
                  huy động và khuyến khích nhân viên tự nguyện thực hiện và tự
                  dùng của tổ chức của doanh nghiệp.
                </li>
              </ul>

              <p className="mb-4">
                Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt
                tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và
                với những thông tin bổ ích như trên, FOSO mong rằng phần nào
                giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc
                trong tương lai.
              </p>

              <div className="mt-8">
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      Bạn thấy bài viết như thế nào?
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">4 phản hồi</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center">
                      <Image
                        src="/huu_ich.png"
                        alt="Hữu ích"
                        width={40}
                        height={40}
                      />
                      <span className="text-sm mt-1">Hữu ích</span>
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        src="/yeu_thich.png"
                        alt="Yêu thích"
                        width={40}
                        height={40}
                      />
                      <span className="text-sm mt-1">Yêu thích</span>
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        src="/thu_vi.png"
                        alt="Thú vị"
                        width={40}
                        height={40}
                      />
                      <span className="text-sm mt-1">Thú vị</span>
                      <span className="text-sm font-bold">0</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        src="/bat_ngo.png"
                        alt="Bất ngờ"
                        width={40}
                        height={40}
                      />
                      <span className="text-sm mt-1">Bất ngờ</span>
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        src="/nham_chan.png"
                        alt="Nhàm chán"
                        width={40}
                        height={40}
                      />
                      <span className="text-sm mt-1">Nhàm chán</span>
                      <span className="text-sm font-bold">0</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        src="/tuc_gian.png"
                        alt="Tức giận"
                        width={40}
                        height={40}
                      />
                      <span className="text-sm mt-1">Tức giận</span>
                      <span className="text-sm font-bold">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
            <div className=" top-[10rem]">
              <TableOfContents />
              <RelatedPosts />
            </div>
          </div>
        </div>

<div className="flex flex-col ml-[20rem]">
<h2 className="text-2xl font-bold mt-12 mb-6">Bài Viết Liên Quan</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
    {mockPosts.slice(0, 3).map((post) => (
      <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="relative">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={225}
            layout="responsive"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <span className="text-blue-600 text-xs">Quản lý sản xuất</span>
          <h3 className="text-lg font-semibold mt-2">
            {post.title}
          </h3>
          <div className="flex items-center mt-2 text-gray-600 text-xs">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>10 phút đọc</span>
          </div>
          <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
            Khám phá thêm →
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Implement this to return paths for your blog posts
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the blog post data based on the slug
  // This is just a placeholder, replace with your actual data fetching logic
  const post = {
    title: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
    author: "FOSO Creator",
    date: "2023-05-20",
    readTime: "5 phút",
  };

  return {
    props: post,
  };
};

export default BlogPost;
