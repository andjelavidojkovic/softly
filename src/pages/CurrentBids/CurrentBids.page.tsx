import React, { useEffect, useState } from 'react';
import api from '../../api';
import AuctionItem from '../../components/AuctionItem';
import Heading from '../../components/Heading';
import { Bids } from '../../models/Bids';
import './CurrentBids.style.scss';

const CurrentsBids = () => {
  const [currentBids, setCurrentBids] = useState<Bids[]>();
  const [suggestedBids, setSuggestedBids] = useState<Bids[]>();

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const {
          data: { myCurrentBids, suggestedAuctionAssets },
        } = await api.auth.getMyBids();
        console.log(myCurrentBids);
        console.log(suggestedAuctionAssets);
      } catch (err) {
        console.log(err);
      }
    };
    loadAssets();
  }, []);

  return (
    <div className="current-bids">
      <Heading>Current Bids</Heading>
      <div>
        {suggestedBids.map((item) => {
          return (
            <div>
              <AuctionItem url={item.pictureUrl}>bid</AuctionItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentsBids;
