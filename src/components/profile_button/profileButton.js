import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Styles from './style';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../../assets/icons/user.png';

const ProfileButton = () => {
  const navigation = useNavigation();

  const Profile = () => {
    navigation.navigate('Profile');
  };

  return (
    <TouchableOpacity style={Styles.header_container} onPress={Profile}>
      {/* Info, Quote */}
      <View style={Styles.info_container}>
        {/* Quote */}
        <Text style={Styles.quotes}>
          Hi, Welcome to Computer System Architecture.
        </Text>
        {/* More Info */}
        <Text style={Styles.more_info}>Click here for more info...</Text>
      </View>
      {/* Avatar */}
      <View style={Styles.avatar_container}>
        <Image style={Styles.avatar} source={Avatar} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileButton;
