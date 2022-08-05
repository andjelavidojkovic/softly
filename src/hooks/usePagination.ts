import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { PaginatedData } from '../models/Assets';

type PaginationProps<T = Record<string, any>> = {
  limit?: number;
  currentPage?: number;
  apend?: boolean;
  apiRequest: (
    page: number,
    limit: number,
  ) => Promise<AxiosResponse<PaginatedData<T>>>;
};

export default function usePagination<T = Record<string, any>>(
  args: PaginationProps<T>,
) {
  const {
    limit: pLimit = 10,
    currentPage: pCurrentPage = 1,
    apend: pApend = true,
    apiRequest,
  } = args;

  const [currentPage, setCurrentPage] = useState<number>(pCurrentPage);
  const [limit, setLimit] = useState<number>(pLimit);
  const [totalPages, setTotalPages] = useState<number>();
  const [data, setData] = useState<Array<T>>([]);
  const [apend, setApend] = useState<boolean>(pApend);

  const loadItems = useCallback(async () => {
    try {
      const {
        data: { items, totalPages },
      } = await apiRequest(currentPage, limit);
      if (apend) {
        setData((old) => [...old, ...items]);
      } else {
        setData(items);
      }

      setTotalPages(totalPages);
      console.log(totalPages);
    } catch (err) {
      console.log(err);
    }
  }, [apiRequest, currentPage, limit]);

  const nextPage = useCallback(() => {
    setCurrentPage((oldPage) => Math.min(oldPage + 1, totalPages));
  }, [totalPages]);

  const loadMore = useCallback(() => {
    console.log(currentPage, limit);
    nextPage();
    console.log(currentPage, limit);
  }, [currentPage, limit, nextPage]);

  useEffect(() => {
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, limit]);

  return {
    data,
    setData,
    currentPage,
    limit,
    loadMore,
    setLimit,
  };
}
