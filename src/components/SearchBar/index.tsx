
import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search PDF documents..."
        className="w-full lg:w-1/2 pl-10 pr-4 py-4 border-gray-200 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
    </div>
  );
};
