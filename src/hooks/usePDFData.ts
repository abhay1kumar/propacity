// src/hooks/usePDFData.ts
import { useState, useEffect } from "react";

export const usePDFData = () => {
  const [pdfs, setPDFs] = useState<
    Array<{
      name: string;
      author: string;
      link: string;
      published: string;
    }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/dee51ea017d20efdfcc8"
        );
        const data = await response.json();

        if (!response.ok) throw new Error("Failed to fetch PDFs");

        setPDFs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch PDFs");
      } finally {
        setLoading(false);
      }
    };

    fetchPDFs();
  }, []);

  return { pdfs, loading, error };
};
