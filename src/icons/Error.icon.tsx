import React from 'react';

const Error = ({ height, width }: { height: string; width: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      version="1.1"
    >
      <g transform="translate(0 -1028.4)">
        <path
          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
          transform="translate(0 1029.4)"
          fill="#c0392b"
        />
        <path
          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
          transform="translate(0 1028.4)"
          fill="#e74c3c"
        />
        <path
          d="m7.0503 1037.8 3.5357 3.6-3.5357 3.5 1.4142 1.4 3.5355-3.5 3.536 3.5 1.414-1.4-3.536-3.5 3.536-3.6-1.414-1.4-3.536 3.5-3.5355-3.5-1.4142 1.4z"
          fill="#c0392b"
        />
        <path
          d="m7.0503 1036.8 3.5357 3.6-3.5357 3.5 1.4142 1.4 3.5355-3.5 3.536 3.5 1.414-1.4-3.536-3.5 3.536-3.6-1.414-1.4-3.536 3.5-3.5355-3.5-1.4142 1.4z"
          fill="#ecf0f1"
        />
      </g>
    </svg>
  );
};

export default Error;
