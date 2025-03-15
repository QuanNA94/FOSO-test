import Image from 'next/image';
import Link from 'next/link';

interface BlogPostPreviewProps {
  post: {
    id: string;
    title: string;
    image: string;
    excerpt: string;
  };
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post }) => {
  return (
    <div className="blog-post-preview">
      <Image src={post.image} alt={post.title} width={300} height={200} />
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link href={`/post/${post.id}`}>Read more</Link>
    </div>
  );
};

export default BlogPostPreview;