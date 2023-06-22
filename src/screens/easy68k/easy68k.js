import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native';
import Styles from './style';
import NoteTab from '../../components/note_tab';
import {useNavigation} from '@react-navigation/native';
import {getDownloads, getDownloadsById} from '../../api/download';

const Easy68k = () => {
  const navigation = useNavigation();
  const [downloads, setDownloads] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchDownloads();
  }, []);

  const fetchDownloads = async () => {
    try {
      setRefreshing(true);
      const {error, data} = await getDownloads();
      if (error) {
        console.log('Error fetching downloads:', error);
      } else {
        setDownloads(data);
      }
    } catch (error) {
      console.error('Failed to fetch downloads:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchSingleDownload = async fileId => {
    try {
      const {error, data} = await getDownloadsById(fileId);
      if (error) {
        console.log(error);
      } else {
        const url = data.pdfUrl?.secure_url;

        navigation.navigate('PdfViewer', url);
      }
    } catch (error) {
      console.error('Failed to fetch single revision:', error);
    }
  };

  const handlePress = data => {
    fetchSingleDownload(data._id);
  };

  const handleRefresh = () => {
    fetchDownloads();
  };

  return (
    <SafeAreaView style={Styles.main_container}>
      <View style={Styles.content_container}>
        {/* Header */}
        <View style={Styles.header_container}>
          <Text style={Styles.title}>Easy68K</Text>
        </View>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={downloads}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <NoteTab data={item} onPress={() => handlePress(item)} />
          )}
          ListHeaderComponent={
            // Body
            <View style={Styles.detail_container}>
              <Text style={Styles.intro}>
                Welcome to the Easy68k home page. Easy68k is a 68000 Structured
                Assembly Language IDE. Easy68k allows you to edit, assemble and
                run 68000 programs on a Windows PC. No additional hardware is
                required.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Easy68k;
