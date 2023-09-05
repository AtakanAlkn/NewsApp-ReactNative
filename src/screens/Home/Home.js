import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import config from '../../../config';
import {GlobalContext} from '../../Context/GlobalState';
import styles from './HomeStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import useFetch from '../../hooks/useFetch';
import CustomHeader from './components/CustomHeader/CustomHeader';
import HorizontalCard from './components/HorizontalCard/HorizontalCard';
import NewsTitle from '../../data/newsTitlte';
import NewsTitleCard from './components/NewsTitleCard/NewsTitleCard';
import VerticalCard from './components/VerticalCard/VerticalCard';

const Home = ({navigation}) => {
  const [a, setA] = useState(
    'https://www.milliyet.com.tr/rss/rssnew/dunyarss.xml',
  );
  const [b, setB] = useState(data);
  const {pressedId} = useContext(GlobalContext);
  const {URL} = NewsTitle[pressedId - 1];
  const {data} = useFetch(config.L);
  const {data: data2} = useFetch(a);

  useEffect(() => {
    setA(URL);
  }, [pressedId]);

  useEffect(() => {
    console.log(data2);
  }, [data2]);

  const renderCard = ({item}) => {
    return <HorizontalCard item={item} onDetail={() => onDetail(item)} />;
  };
  const renderNewsTitle = ({item}) => {
    return <NewsTitleCard item={item} />;
  };
  const renderVerticalCard = ({item}) => {
    return <VerticalCard item={item} />;
  };
  const onDetail = item => {
    navigation.navigate('Details', {item});
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.innerContainer}>
        <CustomHeader />
        <View style={styles.horizontalHeader}>
          <Text style={styles.text1}>Latest News</Text>
          <TouchableOpacity style={styles.innerHorizontalHeader}>
            <Text style={styles.text2}>See all</Text>
            <Icon name="arrowright" size={16} color="#0080FF" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderCard}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={NewsTitle}
          renderItem={renderNewsTitle}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={b}
        renderItem={renderVerticalCard}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
