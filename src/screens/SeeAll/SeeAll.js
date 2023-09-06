import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import useFetch from '../../hooks/useFetch';
import config from '../../../config';
import VerticalCard from '../Home/components/VerticalCard/VerticalCard';
import theme from '../../assets/theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

const SeeAll = ({navigation}) => {
  const {data} = useFetch(config.L);
  const onDetail = item => {
    navigation.navigate('Details', {item});
  };
  const renderCard = ({item}) => {
    return <VerticalCard item={item} onDetail={() => onDetail(item)} />;
  };

  const [customLoading, setCustomLoading] = useState(false);

  setTimeout(() => {
    setCustomLoading(true);
  }, 100);

  return customLoading ? (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F5F5F5',
            position: 'absolute',
            zIndex: 2,
            left: 15,
            top: 2,
            width: 30,
            height: 30,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color={'black'} />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 2,
            color: theme.primaryColor,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Hot Updates
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
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

export default SeeAll;
