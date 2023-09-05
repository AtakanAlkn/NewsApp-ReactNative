import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import theme from '../../../../assets/theme/theme';
import Icon from 'react-native-vector-icons/Feather';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <Icon
        name="search"
        size={20}
        color={'#818181CC'}
        style={styles.searchIcon}
      />
      <View style={styles.bellContainer}>
        <Icon name="bell" size={20} color={'white'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 20,
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 2,
    right: 80,
  },
  bellContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primaryColor,
  },
});
export default CustomHeader;
