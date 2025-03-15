import React from 'react';
import Image from 'next/image';

interface BlogPostCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  date: string;
  views: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ imageSrc, imageAlt, title, excerpt, date, views }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full h-full flex flex-col">
      <div className="relative w-full pt-[75%]"> {/* 4:3 aspect ratio */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-xl md:text-2xl text-blue-600 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow line-clamp-3">{excerpt}</p>
        <div className="flex justify-between text-xs md:text-sm text-gray-500">
          <span>{date}</span>
          <span>{views} lượt xem</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;