import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="w-full mx-auto mb-8">
      <ol className="flex items-center justify-center space-x-2 text-sm text-gray-500">
        {items?.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 ? (
              <>
                <Link href={item.href} className="hover:text-gray-700">
                  {item.label}
                </Link>
                <span className="mx-2 text-gray-300">{`>`}</span>
              </>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};