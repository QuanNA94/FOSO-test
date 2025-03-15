import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border shadow-sm my-4 rounded-lg md:rounded-[40px] mx-4 md:mx-auto max-w-7xl">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/foso_logo.png" alt="FOSO Logo" width={100} height={40} />
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
            <nav className="space-x-6 flex items-center">
              <Link href="/ve-chung-toi" className="text-gray-600 hover:text-green-600">Về chúng tôi</Link>
              <Link href="/giai-phap" className="text-gray-600 hover:text-green-600">Giải pháp</Link>
              <Link href="/tai-nguyen" className="text-gray-600 hover:text-green-600">Tài nguyên</Link>
              <Link href="/lien-he" className="text-gray-600 hover:text-green-600">Liên hệ</Link>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <select className="appearance-none bg-white text-gray-700 px-2 py-1 pr-6 rounded-md border border-gray-300 text-sm">
              <option>VI</option>
              <option>EN</option>
            </select>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 text-sm">
              Trở thành khách hàng
            </button>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-2">
              <Link href="/ve-chung-toi" className="text-gray-600 hover:text-green-600">Về chúng tôi</Link>
              <Link href="/giai-phap" className="text-gray-600 hover:text-green-600">Giải pháp</Link>
              <Link href="/tai-nguyen" className="text-gray-600 hover:text-green-600">Tài nguyên</Link>
              <Link href="/lien-he" className="text-gray-600 hover:text-green-600">Liên hệ</Link>
            </nav>
            <div className="mt-4 space-y-2">
              <select className="w-full appearance-none bg-white text-gray-700 px-2 py-1 pr-6 rounded-md border border-gray-300 text-sm">
                <option>VI</option>
                <option>EN</option>
              </select>
              <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 text-sm">
                Trở thành khách hàng
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;