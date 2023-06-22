import React, {useEffect, useRef, useState} from 'react';
import {Video} from 'expo-av';
import Styles from './style';
import {SafeAreaView, Text, View} from 'react-native';
import {useKeepAwake} from 'expo-keep-awake';

const Video_Player = ({route: {params: data}}) => {
  if (!data) return null;
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      (async () => {
        await videoRef.current.presentFullscreenPlayer();
      })();
    }
  }, [isLoaded]);

  useKeepAwake();

  const handlePlaybackStatusUpdate = status => {
    if (!isLoaded && status.isLoaded) {
      setIsLoaded(true);
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Video
        ref={videoRef}
        source={{uri: data.videoUrl.secure_url}}
        resizeMode="contain"
        shouldPlay
        useNativeControls
        isLooping
        style={Styles.video}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      {/* Middle container: Title, subtitle, etc. */}
      <View style={Styles.midleContainer}>
        <Text style={Styles.title}>{data.title}</Text>
        <View style={Styles.bottomContainer}>
          <Text style={Styles.subtitle}>{data.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Video_Player;
