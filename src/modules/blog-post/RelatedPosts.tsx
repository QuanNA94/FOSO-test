import React from 'react';
import Image from 'next/image';

const RelatedPosts: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* First Banner */}
      <div className="relative bg-blue-600 rounded-lg overflow-hidden">
        <Image
          src="/banner_right_1.png"
          alt="First Banner"
          width={300}
          height={200}
          layout="responsive"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end py-[4rem] px-4">
          <button className="w-full text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-white hover:bg-opacity-20 transition duration-300 flex items-center justify-center border border-white">
            Trải Nghiệm Ngay
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Second Banner */}
      <div
        className="relative rounded-lg overflow-hidden"
        style={{ aspectRatio: "3/4" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-700"></div>
        <Image
          src="/group_banner.png"
          alt="Community Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex-grow"></div>
          <div>
            <h3 className="font-bold text-xl text-white mb-4">
              Gia nhập cộng đồng FMRP Việt –
              <br />
              Kết nối, chia sẻ, cùng phát triển!
            </h3>
            <button className="w-full text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:bg-opacity-20 transition duration-300 flex items-center justify-center border border-white">
              Tham Gia Ngay
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;