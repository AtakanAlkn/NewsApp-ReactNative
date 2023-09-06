import {createContext, useState, useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import newsTitle from '../data/newsTitlte';

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const {data} = useFetch(
    'https://www.milliyet.com.tr/rss/rssnew/dunyarss.xml',
  );

  const [pressedId, setPressedId] = useState('1');
  const [globalData, setGlobalData] = useState(data);
  const [loading, setLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);

  const titles = newsTitle.map(item => item.title);

  useEffect(() => {
    setGlobalData(data);
  }, [data]);
  return (
    <GlobalContext.Provider
      value={{
        pressedId,
        setPressedId,
        globalData,
        setGlobalData,
        loading,
        setLoading,
        globalLoading,
        setGlobalLoading,
        titles,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
