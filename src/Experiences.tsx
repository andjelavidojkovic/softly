import React from 'react';
import axios from './axios';

const Experiences = () => {
  const handleClick = (e: any, id: string, token: string) => {
    e.preventDefault();
    const ID = id;
    const TOKEN = token;

    console.log(`id: ${ID} 
    token: ${TOKEN}`);

    axios
      .delete(`/api/users/${ID}`, {
        headers: {
          Authorization: TOKEN,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        onClick={(e) => handleClick(e, localStorage.id, localStorage.token)}
      >
        DELETE
      </button>
    </div>
  );
};

export default Experiences;
