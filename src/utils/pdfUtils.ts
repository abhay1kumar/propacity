export const createPDFFilter = () => {
  const memoizedResults = new Map<string, PDF[]>();

  return function filterPDFs(pdfs: PDF[], searchTerm: string): PDF[] {
    if (!searchTerm.trim()) return pdfs;

    const normalizedSearch = searchTerm.toLowerCase();
    const cacheKey = `${normalizedSearch}-${pdfs.length}`;

    if (memoizedResults.has(cacheKey)) {
      return memoizedResults.get(cacheKey)!;
    }

    const filtered = pdfs.filter(
      (pdf) =>
        pdf.title.toLowerCase().includes(normalizedSearch) ||
        pdf.author.toLowerCase().includes(normalizedSearch)
    );

    memoizedResults.set(cacheKey, filtered);
    return filtered;
  };
};
