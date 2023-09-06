import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './VerticalCardStyle';
import useSrc from '../../../../hooks/useSrc';

const VerticalCard = ({item, onDetail}) => {
  const imgSrc = useSrc(item.description);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onDetail}>
        {imgSrc && (
          <View style={{flex: 1, overflow: 'hidden', borderRadius: 8}}>
            <ImageBackground
              style={styles.image}
              source={{uri: imgSrc}}
              resizeMode="cover">
              <View style={styles.overlay}>
                <Text style={styles.text}>{item.title}</Text>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={styles.text}>{item.published.slice(0, -1)}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default VerticalCard;
