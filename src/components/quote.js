import React, { useState, useEffect } from 'react';
import { key, url } from '../api/url'; // eslint-disable-next-line import/extensions

export default function Quote() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            'content-Type': 'application/json',
            'X-Api-Key': key,
          },
        });
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      }
      setLoad(false);
    };
    fetchData();
  }, []);
  if (load) {
    return (
      <div><p className="quote">Loading ...</p></div>
    );
  }
  if (error) {
    return (
      <div><p className="quote">{error}</p></div>
    );
  }
  return (
    <div className="quote">
      <q>{data.map((ele) => ele.quote)}</q>
      <p className="none">{data.map((ele) => ele.author)}</p>
    </div>
  );
}
