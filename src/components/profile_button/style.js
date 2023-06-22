import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#d9cbb0',
    shadowOffset: {width: 4, height: 4},
    shadowColor: '#af7d51',
    shadowOpacity: 1,
    shadowRadius: 5,
    marginLeft: 20,
    marginVertical: 20,
    width: '100%',
    paddingVertical: 10,
  },
  info_container: {
    flex: 1,
    paddingHorizontal: 5,
    marginLeft: 5,
  },
  username: {
    fontSize: 20,
    paddingTop: 5,
    color: '#171717',
    fontWeight: 'bold',
  },
  quotes: {
    fontSize: 20,
    paddingVertical: 5,
    color: '#171717',
  },
  more_info: {
    fontSize: 16,
    paddingTop: 5,
    color: '#171717',
  },
  avatar_container: {
    paddingRight: 25,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 50,
    tintColor: '#002B5B',
  },
});

export default Styles;
