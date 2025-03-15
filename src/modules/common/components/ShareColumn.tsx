import React from "react";
import Image from "next/image";

const ShareColumn: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/zalo.png"
        alt="Share on Zalo"
        width={48}
        height={48}
        className=" hover:opacity-80 cursor-pointer"
      />
      <Image
        src="/facebook-icon.png"
        alt="Share on Facebook"
        width={48}
        height={48}
        className=" hover:opacity-80 cursor-pointer"
      />
      <Image
        src="/x_frame.png"
        alt="Share on Twitter"
        width={48}
        height={48}
        className=" hover:opacity-80 cursor-pointer"
      />
      <Image
        src="/linkedin-icon.png"
        alt="Share on LinkedIn"
        width={48}
        height={48}
        className=" hover:opacity-80 cursor-pointer"
      />
      <Image
        src="/robo.png"
        alt="Copy Link"
        width={48}
        height={48}
        className=" hover:opacity-80 cursor-pointer"
      />
    </div>
  );
};

export default ShareColumn;
