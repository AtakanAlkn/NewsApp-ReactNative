import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../assets/theme/theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: windowWidth,
    minHeight: windowHeight / 2.4,
    resizeMode: 'contain',
  },
  chevron: {
    backgroundColor: '#F5F5F580',
    position: 'absolute',
    zIndex: 2,
    left: 15,
    top: 15,
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
    marginVertical: 16,
  },
  iconBack: {
    backgroundColor: theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: 45,
    right: 15,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});

export default styles;
