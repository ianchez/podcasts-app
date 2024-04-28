import { useState } from 'react';
const ITEMS_PER_PAGE = Number(process.env.NEXT_PUBLIC_EPISODES_PER_PAGE) || 20;

const usePagination = (itemsCount: number) => {
  const totalPages = Math.ceil(itemsCount / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages) return;

    setCurrentPage(nextPage);
  };

  const pageMinCount = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const pageMaxCount = Math.min(currentPage * ITEMS_PER_PAGE, itemsCount);
  const itemsCountLabel = `${pageMinCount} - ${pageMaxCount} / ${itemsCount}`;
  const paginationLabel = `Page ${currentPage} / ${totalPages}`;

  return {
    currentPage,
    itemsCountLabel,
    itemsPerPage: ITEMS_PER_PAGE,
    paginationLabel,
    totalPages,
    handlePageChange,
  };
};

export default usePagination;
