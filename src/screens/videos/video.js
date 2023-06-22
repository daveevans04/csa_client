import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import Styles from './style';
import VideoTab from '../../components/video_tab';
import {getVideos, getVideosById} from '../../api/video';
import {useNavigation} from '@react-navigation/native';

const Video = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setRefreshing(true);
      const {error, data} = await getVideos();
      if (error) {
        console.log('Error fetching videos:', error);
      } else {
        setData(data);
      }
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchSingleVideo = async videoId => {
    try {
      const {error, data} = await getVideosById(videoId);
      if (error) {
        console.log(error);
      } else {
        navigation.navigate('VideoPlayer', data);
      }
    } catch (error) {
      console.error('Failed to fetch single video:', error);
    }
  };

  const handlePress = data => {
    fetchSingleVideo(data._id);
  };

  const handleRefresh = () => {
    fetchVideos();
  };

  return (
    <SafeAreaView style={Styles.main_container}>
      <View style={Styles.content_container}>
        {/* Header */}
        <View style={Styles.header_container}>
          <Text style={Styles.title}>Videos</Text>
        </View>
        {/* Body */}
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <VideoTab data={item} onPress={() => handlePress(item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Video;
