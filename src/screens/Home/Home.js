import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
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
import LottieView from 'lottie-react-native';

const Home = ({navigation}) => {
  const {globalData, loading, setLoading} = useContext(GlobalContext);
  const {data} = useFetch(config.L);

  const renderCard = ({item}) => {
    return <HorizontalCard item={item} onDetail={() => onDetail(item)} />;
  };
  const renderNewsTitle = ({item}) => {
    return <NewsTitleCard item={item} />;
  };
  const renderVerticalCard = ({item}) => {
    return <VerticalCard item={item} onDetail={() => onDetail(item)} />;
  };
  const onDetail = item => {
    navigation.navigate('Details', {item});
  };

  useEffect(() => {
    globalData ? setLoading(true) : setLoading(false);
  }, [globalData]);

  const [customLoading, setCustomLoading] = useState(false);

  setTimeout(() => {
    setCustomLoading(true);
  }, 1000);

  return customLoading ? (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.innerContainer}>
        <CustomHeader />
        <View style={styles.horizontalHeader}>
          <Text style={styles.text1}>Latest News</Text>
          <TouchableOpacity
            style={styles.innerHorizontalHeader}
            onPress={() => navigation.navigate('SeeAll')}>
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
      {loading ? (
        <FlatList
          data={globalData}
          renderItem={renderVerticalCard}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../../assets/Lottie/animation_lm7hcilr.json')}
            autoPlay
            loop
          />
        </View>
      )}
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <LottieView
        source={require('../../assets/Lottie/animation_lm7hcilr.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Home;
