import React, { useState, useMemo } from "react";
import { SearchBar } from "./components/SearchBar";
import { PDFList } from "./components/PDFList";
import { PDFReader } from "./components/PDFReader";
import { usePDFData } from "./hooks/usePDFData";

export interface APIResponse {
  name: string;
  author: string;
  link: string;
  published: string;
}

const filterPDFs = (pdfs: APIResponse[], searchTerm: string) => {
  const search = searchTerm.toLowerCase();
  const response = pdfs.filter((pdf) =>
    pdf.name.toLowerCase().includes(search)
  );
  return response;
};

export const App: React.FC = () => {
  const [selectedPDFId, setSelectedPDFId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { pdfs } = usePDFData();

  const filteredPDFs = useMemo(
    () => filterPDFs(pdfs, searchTerm),
    [pdfs, searchTerm]
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 mx-w-[1520px] mx-auto">
      <>
        {!selectedPDFId ? (
          <div className="container mx-auto py-8">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <PDFList items={filteredPDFs} onSelect={setSelectedPDFId} />
          </div>
        ) : (
          <PDFReader
            onBack={() => setSelectedPDFId(null)}
            pdfUrl={pdfs.find((pdf) => pdf.link === selectedPDFId)?.link}
          />
        )}
      </>
    </div>
  );
};
