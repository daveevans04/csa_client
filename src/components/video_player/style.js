import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  midleContainer: {
    flex: 1,
    backgroundColor: '#1E90FF',
  },
  bottomContainer: {
    alignContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'justify',
    margin: 5,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    margin: 5,
    textAlign: 'justify',
  },
});

export default Styles;
