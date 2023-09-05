import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './HorizontalCardStyle';
import useSrc from '../../../../hooks/useSrc';

const HorizontalCard = ({item, onDetail}) => {
  const imgSrc = useSrc(item.description);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onDetail}>
        {imgSrc && (
          <View style={{flex: 1, overflow: 'hidden', borderRadius: 8}}>
            <ImageBackground
              style={styles.image}
              source={{uri: imgSrc}}
              resizeMode="contain">
              <View style={styles.overlay}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </ImageBackground>
          </View>
        )}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HorizontalCard;
