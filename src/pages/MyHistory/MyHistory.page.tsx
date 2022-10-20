import React, { useEffect, useState } from 'react';
import api from '../../api';
import AuctionItem from '../../components/AuctionItem';
import Heading from '../../components/Heading';
import { Bids } from '../../models/Bids';
import '../CurrentBids/CurrentBids.style.scss';
import { FadeLoader } from 'react-spinners';

const MyHistory = () => {
  const [historyBids, setHistoryBids] = useState<Bids[]>();
  const [suggestedBids, setSuggestedBids] = useState<Bids[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadAssets = async () => {
      setLoading(true);
      try {
        const {
          data: { myHistoryAssets, suggestedAuctionAssets },
        } = await api.auth.getMyHistoryBids();
        console.log(myHistoryAssets);
        console.log(suggestedAuctionAssets);
        setHistoryBids(myHistoryAssets);
        setSuggestedBids(suggestedAuctionAssets);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (!suggestedBids || !historyBids) loadAssets();
  }, [historyBids, suggestedBids]);

  return (
    <div className="bids">
      <Heading>My History</Heading>
      {loading ? (
        <div className="bids__loading">
          {' '}
          <FadeLoader
            color="#c9b1a9"
            loading={loading}
            height={15}
            width={5}
          />{' '}
        </div>
      ) : (
        <div className="bids__list">
          {historyBids?.map((item, index) => {
            return (
              <div key={index} className="bids__list__item">
                <AuctionItem url={item.pictureUrl}>bid</AuctionItem>
              </div>
            );
          })}
        </div>
      )}
      <Heading>Suggested Auctions</Heading>
      <p>
        Based on your current bidding here are some auctions we think you are
        suited for.
      </p>
      {loading ? (
        <div className="bids__loading">
          {' '}
          <FadeLoader
            color="#c9b1a9"
            loading={loading}
            height={15}
            width={5}
          />{' '}
        </div>
      ) : (
        <div className="bids__list">
          {suggestedBids?.map((item, index) => {
            return (
              <div key={index} className="bids__list__item">
                <AuctionItem url={item.pictureUrl}>bid</AuctionItem>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyHistory;
