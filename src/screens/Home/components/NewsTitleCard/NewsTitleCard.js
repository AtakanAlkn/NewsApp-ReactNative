import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import theme from '../../../../assets/theme/theme';
import {GlobalContext} from '../../../../Context/GlobalState';
import axios from 'react-native-axios';
import rssParser from 'react-native-rss-parser';
import newsTitle from '../../../../data/newsTitlte';

const NewsTitleCard = ({item}) => {
  const {pressedId, setPressedId, setGlobalData, loading, setLoading, titles} =
    useContext(GlobalContext);

  const fetchData = async rssUrl => {
    try {
      setLoading(false);
      const response = await axios.get(rssUrl);
      const parsedData = await rssParser.parse(response.data);
      setGlobalData(parsedData.items);
      setLoading(true);
    } catch (error) {
      setLoading(false);
    }
  };

  const onPressed = () => {
    setPressedId(item.id); // Başlığa tıklandığında tıklananın kim olduğunu kaydet
    fetchData(newsTitle[item.id - 1].URL);
  };

  useEffect(() => {
    if (pressedId === item.id) {
      setCustomColor(theme.primaryColor); // Tıklanan başlık
    } else {
      setCustomColor('white'); // Tıklanmayan başlık
    }
  }, [pressedId]);

  const [customColor, setCustomColor] = useState('white'); // Varsayılan olarak beyaz renk

  return (
    <TouchableWithoutFeedback onPress={onPressed}>
      <View
        style={{
          ...styles.container,
          backgroundColor: customColor,
        }}>
        <Text
          style={{
            ...styles.text,
            color: customColor === 'white' ? 'black' : 'white',
          }}>
          {item.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default NewsTitleCard;
