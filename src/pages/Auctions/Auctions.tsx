import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Assets } from '../../models/Assets';
// import Posts from '../../components/Posts';
import usePagination from '../../components/Hooks/usePagination';
import AuctionItem from '../../components/AuctionItem';
import './Auction.style.scss';

const Auctions = () => {
  const [assets, setAssets] = useState<Array<Assets>>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  console.log(postsPerPage, assets, currentPage);

  const { slicedData, pagination, prevPage, nextPage, changePage } =
    usePagination(postsPerPage, assets, currentPage);

  const slice = assets.slice(0, postsPerPage);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        setLoading(true);
        const {
          data: { items, currentPage },
        } = await api.auth.getAssetsList();
        setAssets(items);
        setCurrentPage(currentPage);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (!assets.length) loadAssets();
  }, [assets.length]);

  const LoadMore = () => {
    setPostsPerPage(postsPerPage + postsPerPage);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Auctions</h1>
      {/* <Posts assets={assets} loading={loading} /> */}
      <div className="auction">
        <div className="auction__slider">
          {slicedData.map((item) => (
            <AuctionItem url={item.pictureUrl}>bid</AuctionItem>
          ))}
        </div>
      </div>
      <ul>
        {pagination.map((page) => {
          if (!page.move) {
            return (
              <a href="/#" onClick={(e) => changePage(page.id, e)}>
                {page.id}
              </a>
            );
          }
        })}
      </ul>
      <nav>
        <a href="/#" onClick={prevPage}>
          Previous
        </a>
        <a href="/#" onClick={nextPage}>
          Next
        </a>
      </nav>
      {/* <div className="auction">
        {slice.map((item, index) => {
          return (
            <div className="auction__slider">
              <AuctionItem url={item.pictureUrl}>bid</AuctionItem>
            </div>
          );
        })}
      </div>
      <button onClick={() => LoadMore()}>Load More</button> */}
    </div>
  );
};

export default Auctions;
