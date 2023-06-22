import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Styles from './style';
import {format} from 'date-fns';

const VideoTab = ({
  data: {thumbnailUrl, title, description, duration, uploadedAt},
  onPress,
}) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const formattedDateTime = format(new Date(uploadedAt), 'yyyy-MM-dd HH:mm:ss');

  return (
    <Pressable onPress={onPress} style={Styles.videoCard}>
      {/* Tumbnail */}
      <View>
        <Image
          style={Styles.thumbnail}
          source={{uri: thumbnailUrl.secure_url}}
        />
        <View style={Styles.timeContainer}>
          <Text style={Styles.time}>
            {minutes}:{seconds < 10 ? '0' : ''}
            {seconds}
          </Text>
        </View>
      </View>
      {/* Middle container: Title, subtitle, etc. */}
      <View style={Styles.midleContainer}>
        <Text style={Styles.title}>{title}</Text>
        <View style={Styles.bottomContainer}>
          {/* <Text style={Styles.subtitle}>{description}</Text> */}
          {/* <Text style={Styles.dateTime}>{formattedDateTime}</Text> */}
        </View>
      </View>
    </Pressable>
  );
};

export default VideoTab;
