import React from 'react';
import api from '../../api';
import { Assets } from '../../models/Assets';
import AuctionItem from '../../components/AuctionItem';
import './Auction.style.scss';
import Button from '../../components/Button';
import FatArrow from '../../components/ImageComponents/FatArrow.icon';
import usePagination from '../../hooks/usePagination';
import Heading from '../../components/Heading';

const dayjs = require('dayjs');

const Auctions = () => {
  const LiveStartDate = dayjs().toISOString();

  const { data: liveData, loadMore: liveLoadMore } = usePagination<Assets>({
    apiRequest: (page, limit, startDate) =>
      api.auth.getLiveAssetsList(page, limit, startDate),
    limit: 3,
    currentPage: 1,
    startDate: LiveStartDate,
  });
  console.log(liveData);

  const UpcomingStartDate = dayjs().add(1, 'day').toISOString();

  const { data: upcomingData, loadMore: upcomingLoadMore } =
    usePagination<Assets>({
      apiRequest: (page, limit, startDate) =>
        api.auth.getUpcomingAssetsList(page, limit, startDate),
      limit: 3,
      currentPage: 1,
      startDate: UpcomingStartDate,
    });
  console.log(upcomingData);

  return (
    <div className="auction">
      <div className="auction__title-live-assets">
        <Heading>Live Auctions</Heading>
        <p>to upcoming</p>
      </div>
      <div className="auction__offer">
        {liveData.map((item) => {
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
          onClick={liveLoadMore}
        >
          Load More
        </Button>
      </div>
      <div className="auction__title-live-assets">
        <Heading>Upcoming Auctions</Heading>
        <p>to live</p>
      </div>
      <div className="auction__offer">
        {upcomingData.map((item) => {
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
          onClick={upcomingLoadMore}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Auctions;
