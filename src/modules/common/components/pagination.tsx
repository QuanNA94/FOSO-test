import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-8 mb-12 mx-[12rem]">
      <div className="flex w-0 flex-1">
        <a
          href="#"
          className="inline-flex items-center py-4 pr-1 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <svg className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Trang trước
        </a>
      </div>
      <div className="hidden md:flex">
        {[1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages].map((item, index) => (
          item === '...' ? (
            <span key={index} className="px-4 py-4 text-sm text-gray-700">
              {item}
            </span>
          ) : (
            <a
              key={index}
              href="#"
              className={`inline-flex items-center px-4 py-4 text-sm font-medium ${
                item === currentPage
                  ? 'text-blue-600 border-t-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-t-2 hover:border-gray-300'
              }`}
            >
              {item}
            </a>
          )
        ))}
      </div>
      <div className="flex w-0 flex-1 justify-end">
        <a
          href="#"
          className="inline-flex items-center py-4 pl-1 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Trang kế tiếp
          <svg className="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Pagination;