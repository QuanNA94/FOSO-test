import { mockPosts } from "@/mock/mockData";
import Image from "next/image";
import SearchAndCategories from "./SearchAndCategories";
import BlogPostCard from "../common/components/blogPostCard";

const BlogPostGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Tất Cả Bài Viết</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          <div className="bg-blue-600 text-white p-6 rounded-[40px] flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="w-full md:w-2/3 mb-4 md:mb-0 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-bold mb-4">
                Gia nhập cộng đồng FMRP - <br />
                Kết nối, chia sẻ, <br />
                cùng phát triển!
              </h3>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold text-sm self-start mt-4">
                Tham Gia Ngay
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-[4/3] relative">
              <Image
                src="/Group.png"
                alt="Community"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                imageSrc={post.image}
                imageAlt={post.title}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                views={1000}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <SearchAndCategories />
        </div>
      </div>
    </div>
  );
};

export default BlogPostGrid;
