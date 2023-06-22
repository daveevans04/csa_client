import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  videoCard: {
    marginVertical: 5,
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  timeContainer: {
    backgroundColor: '#171717',
    height: 25,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  time: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  midleContainer: {
    flex: 1,
    backgroundColor: '#1E90FF',
    opacity: 0.7,
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
  dateTime: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    margin: 5,
    textAlign: 'justify',
  },
});

export default Styles;
