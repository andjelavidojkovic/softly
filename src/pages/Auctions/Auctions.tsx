import React, { useEffect, useState } from 'react';
// import AuctionItem from '../../components/AuctionItem';
import api from '../../api';
import Button from '../../components/Button';
import { Assets } from '../../models/Assets';
import Posts from '../../components/Posts';
import Pagination from '../../components/Pagination';

const Auctions = () => {
  const [assets, setAssets] = useState<Array<Assets>>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = assets.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Posts assets={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={assets.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Auctions;
