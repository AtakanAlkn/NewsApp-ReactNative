import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  innerContainer: {
    paddingHorizontal: 16,
  },
  horizontalHeader: {
    marginTop: 24,
    marginBottom: 16,
    flexDirection: 'row',
  },
  innerHorizontalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {color: 'black', fontSize: 16, fontWeight: 'bold', flex: 1},
  text2: {color: '#0080FF', fontSize: 16, marginRight: 16},
});
