import { useState } from 'react';
import { Assets } from '../../models/Assets';

interface PaginationLink {
  id: number;
  current: boolean;
  move: boolean;
}

interface PaginationHook {
  slicedData: Assets[];
  pagination: PaginationLink[];
  prevPage: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  nextPage: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  changePage: (
    page: number,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
}

const usePagination = (
  postsPerPage: number,
  assets: Assets[],
  startFrom: number,
): PaginationHook => {
  const perPage = postsPerPage ? postsPerPage : 10;
  const pages = Math.ceil(assets.length / perPage);
  const pagination: PaginationLink[] = [];
  const [currentPage, setCurrentPage] = useState(
    startFrom && startFrom <= pages ? startFrom : 1,
  );
  const [slicedData, setSlicedData] = useState(
    [...assets].slice((currentPage - 1) * perPage, currentPage * perPage),
  );

  let moveLeft = false;
  let moveRight = false;
  for (let i = 1; i <= pages; i++) {
    if (i === currentPage) {
      pagination.push({ id: i, current: true, move: false });
    } else {
      if (
        i < 2 ||
        i > pages - 1 ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        pagination.push({ id: i, current: false, move: false });
      } else if (i > 1 && i < currentPage && !moveLeft) {
        pagination.push({ id: i, current: false, move: true });
        moveLeft = true;
      } else if (i < pages && i > currentPage && !moveRight) {
        pagination.push({ id: i, current: false, move: true });
        moveRight = true;
      }
    }
  }

  const changePage = (
    page: number,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (page !== currentPage) {
      //   setCurrentPage(page);
      console.log(page);
      console.log(currentPage);
      setSlicedData(
        [...assets].slice(
          (currentPage - 1) * perPage,
          currentPage * perPage + perPage,
        ),
      );
      setCurrentPage(page);
    }
  };

  const goToPrevPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentPage((prevVal) => (prevVal - 1 === 0 ? prevVal : prevVal - 1));
    if (currentPage !== 1) {
      setSlicedData(
        [...assets].slice(
          (currentPage - 2) * perPage,
          (currentPage - 1) * perPage,
        ),
      );
    }
  };

  const goToNextPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentPage((prevVal) => (prevVal === pages ? prevVal : prevVal + 1));
    if (currentPage !== pages) {
      setSlicedData(
        [...assets].slice(currentPage * perPage, (currentPage + 1) * perPage),
      );
    }
  };

  return {
    slicedData,
    pagination,
    prevPage: goToPrevPage,
    nextPage: goToNextPage,
    changePage,
  };
};

export default usePagination;
