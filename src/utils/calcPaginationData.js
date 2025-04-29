export const calcPaginationData = ({ page, perPage, totalItems }) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const hasPrePage = page > 1;
  const hasNextPage = page < totalPages;

  return {
    totalPages,
    hasPrePage,
    hasNextPage,
  };
};
