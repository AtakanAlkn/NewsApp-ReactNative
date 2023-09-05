import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {GlobalContext} from '../../../../Context/GlobalState';
import useFetch from '../../../../hooks/useFetch';

const VerticalCard = ({item}) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default VerticalCard;
