// src/components/PDFList/index.tsx
import React from "react";

interface PDFItemProps {
  name: string;
  author: string;
  link: string;
  published: string;
  onSelect: () => void;
}

export const PDFItem: React.FC<PDFItemProps> = ({
  name,
  author,

  onSelect,
}) => {
  return (
    <div
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      onClick={onSelect}
    >
      <div className="flex gap-4 p-4">
        <div className="flex flex-col justify-between py-2">
          <h3 className="font-serif text-sm font-normal text-gray-900 truncate">
            <span className=" font-semibold"> Title:</span> {name}
          </h3>
          <p className="text-sm text-gray-600">
            <span className=" font-semibold"> Author:</span>
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

interface PDFListProps {
  items: Array<{
    name: string;
    author: string;
    link: string;
    published: string;
  }>;
  onSelect: (id: string) => void;
  isLoading?: boolean;
}

export const PDFList: React.FC<PDFListProps> = ({
  items,
  onSelect,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-[200px] flex justify-center items-center w-full"
          >
            Loading...
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <PDFItem
          key={item.link}
          {...item}
          onSelect={() => onSelect(item.link)}
        />
      ))}
    </div>
  );
};
