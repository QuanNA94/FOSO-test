import BlogPostGrid from "@/modules/blog-post/BlogPostGrid";
import { Breadcrumb } from "@/modules/common/components";
import Pagination from "@/modules/common/components/pagination";
import Layout from "@/modules/common/layout/Layout";
import Image from "next/image";

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="hidden md:block w-1/4">
            <Image
              src="/frame_160.png"
              alt="Left Hero Image"
              width={282}
              height={268}
              className="mx-auto"
            />
          </div>

          <div className="text-center w-full md:w-2/4">
            <Breadcrumb
              items={[
                { label: "Trang chủ", href: "/" },
                { label: "Tài nguyên", href: "/resources" },
                { label: "Blog", href: "/blog" },
              ]}
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Blog <span className="text-[#00B69B]">FOSO</span> -
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold">
              Cập Nhật Tin Tức <span className="text-[#00B69B]">Mới Nhất</span>
            </h2>
            <p className="mt-6 text-sm text-gray-600">
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
            </p>
          </div>

          <div className="hidden md:block w-1/4">
            <Image
              src="/frame_161.png"
              alt="Right Hero Image"
              width={320}
              height={251}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="flex">
          <main className="flex-1">
            <BlogPostGrid />
            <Pagination currentPage={1} totalPages={10} />
          </main>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
