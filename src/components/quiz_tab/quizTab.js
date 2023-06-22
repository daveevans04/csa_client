import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Styles from './style';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const QuizTab = ({data: {title}, onPress}) => {
  return (
    <TouchableOpacity style={Styles.main_container} onPress={onPress}>
      <View style={Styles.header_container}>
        {/* Image */}
        {/* <Image style={Styles.tile_image} source={{uri: quiz.thumbnail}} /> */}
        {/* Body */}
        <View style={Styles.body_container}>
          <View style={Styles.title_container}>
            {/* Title */}
            <Text style={Styles.title}>{title}</Text>
          </View>
          <View style={Styles.icon_container}>
            {/* Icon */}
            <AntDesign name="rightcircleo" size={24} color="#252C4A" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuizTab;
