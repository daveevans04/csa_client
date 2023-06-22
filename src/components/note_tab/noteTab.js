import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NoteTab = ({data: {thumbnailUrl, title}, onPress}) => {
  return (
    <TouchableOpacity style={Styles.main_container} onPress={onPress}>
      <View style={Styles.header_container}>
        {/* Image */}
        <Image
          style={Styles.tile_image}
          source={{uri: thumbnailUrl.secure_url}}
        />
        {/* Body */}
        <View style={Styles.body_container}>
          <View style={Styles.title_container}>
            {/* Title */}
            <Text style={Styles.title}>{title}</Text>
          </View>
          <View style={Styles.icon_container}>
            {/* Icon */}
            <AntDesign name="rightcircleo" size={24} color="#002B5B" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoteTab;
