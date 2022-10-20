import React from 'react';

type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (a: number) => void;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const { postsPerPage, totalPosts, paginate } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
