import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#57C5B6',
    height: '100%',
    flex: 1,
  },
  content_container: {
    backgroundColor: '#57C5B6',
    width: '100%',
    height: '85%',
  },
  header_container: {
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#FFFFFF',
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  detail_container: {
    marginVertical: 15,
    marginHorizontal: 5,
    flex: 5,
    alignSelf: 'center',
  },
  intro: {
    paddingHorizontal: 20,
    textAlign: 'justify',
    fontSize: 18,
    fontWeight: '500',
    color: '#171717',
  },
});

export default Styles;
