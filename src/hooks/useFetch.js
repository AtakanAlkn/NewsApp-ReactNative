import {useState, useEffect} from 'react';
import axios from 'react-native-axios';
import rssParser from 'react-native-rss-parser';

const useFetch = rssUrl => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(rssUrl);
      const parsedData = await rssParser.parse(response.data);
      setData(parsedData.items);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, error};
};

export default useFetch;
