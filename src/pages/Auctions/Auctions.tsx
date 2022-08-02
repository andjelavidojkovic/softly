import React, { useCallback, useState } from 'react';
import AuctionItem from '../../components/AuctionItem';
import api from '../../api';
import Button from '../../components/Button';
import axios from '../../axios';
import { Assets } from '../../models/Assets';

const Auctions = () => {
  const token = localStorage.getItem('token');

  const [asset, setAsset] = useState<Assets>();
  const [url, setUrl] = useState('');

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  const fetchAssets = useCallback(async () => {
    try {
      const res = await axios.get('/assets?$page=1&$limit=10');
      console.log(res.data.items[3].pictureUrl);
      const pic = JSON.stringify(res.data.items[3].pictureUrl);
      setUrl(pic);
      // setAsset(items[3]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleClick = useCallback(async () => {
    try {
      const res = await api.auth.getAssetsList();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <Button variant="primary" styleType="outline" onClick={fetchAssets}>
        Assets
      </Button>
      <AuctionItem url="./images/Rectangle6.jpg"> BID </AuctionItem>
      <br />
      <AuctionItem url="./images/Rectangle14.jpg"> BOOK </AuctionItem>
      <AuctionItem url={url}>BID</AuctionItem>
    </div>
  );
};

export default Auctions;
