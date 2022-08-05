import React, { useState } from 'react';
import api from '../../api';
import { Assets } from '../../models/Assets';
import AuctionItem from '../../components/AuctionItem';
import './Auction.style.scss';
import Button from '../../components/Button';
import FatArrow from '../../components/ImageComponents/FatArrow.icon';
import usePagination from '../../hooks/usePagination';

const Auctions = () => {
  const { data, limit, loadMore } = usePagination<Assets>({
    apiRequest: (page, limit) => api.auth.getAssetsList(page, limit),
    limit: 3,
    currentPage: 1,
  });
  console.log(data);

  return (
    <div className="auction">
      <h1 style={{ textAlign: 'center' }}>Auctions</h1>
      <div className="auction__offer">
        {data.map((item) => {
          return (
            <div className="auction__slider">
              <AuctionItem url={item.pictureUrl}>bid</AuctionItem>
            </div>
          );
        })}
      </div>
      <div className="auction__btn-load-more">
        <Button
          variant="secondary"
          styleType="link"
          icon={<FatArrow />}
          iconPosition="bottom"
          rotate="down"
          onClick={loadMore}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Auctions;
