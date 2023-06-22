import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#252c4a',
    borderRadius: 15,
    padding: 16,
    marginVertical: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  detailsContainer: {
    flex: 1,
    marginRight: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  contactInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingRight: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  detailText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginLeft: 5,
  },
});

export default Styles;
