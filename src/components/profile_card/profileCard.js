import {View, Text, Image} from 'react-native';
import React from 'react';
import Styles from './style';

const ProfileCard = ({data}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.detailsContainer}>
        {/* Name */}
        <Text style={Styles.name}>{data.name}</Text>
        {/* Contact */}
        <View style={Styles.contactInfoContainer}>
          {/* Icon */}
          <View style={Styles.iconContainer}>
            <Image
              source={require('../../assets/icons/phone.png')}
              style={Styles.icon}
            />
          </View>
          {/* Phone Text */}
          <Text style={Styles.detailText}>{data.contactNumber}</Text>
        </View>
        {/* Email */}
        <View style={Styles.contactInfoContainer}>
          {/* Icon */}
          <View style={Styles.iconContainer}>
            <Image
              source={require('../../assets/icons/mail.png')}
              style={Styles.icon}
            />
          </View>
          {/* Email Text */}
          <Text style={Styles.detailText}>{data.email}</Text>
        </View>
      </View>
      {/* Image */}
      <Image
        source={{uri: data.profilePicture.secure_url}}
        style={Styles.image}
      />
    </View>
  );
};

export default ProfileCard;
