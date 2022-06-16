import React from "react";

const Img = () => {
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
      <img src="../images/Rectangle 14.jpg" alt="img" className="imgg" />
    </>
  );
};

export default Img;
