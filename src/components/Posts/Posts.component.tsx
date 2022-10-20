import React from 'react';
import { Assets } from '../../models/Assets';
import AuctionItem from '../AuctionItem';

type AssetsProps = {
  loading: boolean;
  assets: Array<Assets>;
};

const Posts: React.FC<AssetsProps> = (props) => {
  const { assets, loading } = props;

  console.log(loading);
  console.log(assets);
  //   console.log(posts.posts);
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <ol>
        {assets.map((post: any) => (
          <li key={post.company}>
            <AuctionItem url={post.pictureUrl}>bid</AuctionItem>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Posts;
