import React from 'react';

const Image = ({ url }) => {
  return (
    <>
      <style>
        {`
                .imgg{
                    border-bottom: 10px solid #00261c;
                    height: 140px;
                    width: 340px
                }`}
      </style>
      <img src={url} alt="img" className="imgg" />
    </>
  );
};

export default Image;
