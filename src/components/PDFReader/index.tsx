
import React, { useEffect, useRef } from "react";
import { Button } from "../common/Button";
import { ChevronLeft } from "lucide-react";

interface PDFReaderProps {
  pdfUrl?: string;
  onBack: () => void;
}

export const PDFReader: React.FC<PDFReaderProps> = ({ pdfUrl, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pdfUrl || !containerRef.current) return;

    // Initialize PDF.js viewer
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [pdfUrl]);

  return (
    <div className="relative flex min-h-[70vh] w-full flex-col rounded-lg bg-gray-50">
      <div className="sticky top-0 z-10 flex gap-1.5 items-center border-b bg-white p-4 shadow-sm">
        <Button onClick={onBack} className=" cursor-pointer" variant="outline">
          <ChevronLeft className="text-gray-600 " />
        </Button>

        <span className="font-serifc capitalize text-xl font-semibold text-gray-900">
          {pdfUrl?.split("/").pop() ?? "PDF Viewer"}
        </span>
      </div>

      <div ref={containerRef} className="flex-1 overflow-auto p-4">
        {pdfUrl && (
          <embed
            src={pdfUrl}
            type="application/pdf"
            className="w-full min-h-[80vh]"
          />
        )}
      </div>
    </div>
  );
};
