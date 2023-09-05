import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './DetailsStyle';
import useSrc from '../../hooks/useSrc';
import useRemove from '../../hooks/useRemove';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Details = ({route, navigation}) => {
  const {description} = route.params.item;
  const imgSrc = useSrc(description);
  const detail = useRemove(description);

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.chevron} onPress={onBack}>
        <Icon name="chevron-left" size={24} color={'black'} />
      </TouchableOpacity>

      <Image source={{uri: imgSrc}} style={styles.image} />
      <View style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.descriptionText}>{detail}</Text>
        </ScrollView>
      </View>
      <TouchableOpacity>
        <View style={styles.iconBack}>
          <Icon name="heart-multiple-outline" size={24} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
