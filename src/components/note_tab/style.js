import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_container: {
    borderRadius: 15,
    elevation: 5,
    backgroundColor: '#19A7CE',
    shadowOffset: {width: 4, height: 4},
    shadowColor: '#3498db',
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 50,
    marginVertical: 20,
    width: '96%',
    overflow: 'hidden',
  },
  tile_image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  body_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title_container: {
    flex: 6,
  },
  title: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 20,
    color: '#FFFFFF',
  },
  icon_container: {
    flex: 1,
  },
});

export default Styles;
