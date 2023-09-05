import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import theme from '../../../../assets/theme/theme';
import {GlobalContext} from '../../../../Context/GlobalState';

const NewsTitleCard = ({item}) => {
  const {pressedId, setPressedId} = useContext(GlobalContext);
  const [currentId, setCurrentId] = useState();
  const [a, setA] = useState();
  const onPressed = () => {
    setCurrentId(item.id);
    setPressedId(item.id);
  };

  useEffect(() => {}, [currentId]);

  return (
    <TouchableWithoutFeedback onPress={onPressed}>
      <View
        style={{
          ...styles.container,
          backgroundColor: currentId === a ? theme.primaryColor : 'white',
        }}>
        <Text style={styles.text}>{item.title}</Text>
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
