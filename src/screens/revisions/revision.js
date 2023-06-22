import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import Styles from './style';
import NoteTab from '../../components/note_tab';
import {useNavigation} from '@react-navigation/native';
import {getRevision, getRevisionsById} from '../../api/revision';

const Revision = () => {
  const navigation = useNavigation();
  const [revisions, setRevisions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchRevisions();
  }, []);

  const fetchRevisions = async () => {
    try {
      setRefreshing(true);
      const {error, data} = await getRevision();
      if (error) {
        console.log('Error fetching revisions:', error);
      } else {
        setRevisions(data);
      }
    } catch (error) {
      console.error('Failed to fetch revisions:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchSingleRevision = async revisionId => {
    try {
      const {error, data} = await getRevisionsById(revisionId);
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
    fetchSingleRevision(data._id);
  };

  const handleRefresh = () => {
    fetchRevisions();
  };

  return (
    <SafeAreaView style={Styles.main_container}>
      <View style={Styles.content_container}>
        {/* Header */}
        <View style={Styles.header_container}>
          <Text style={Styles.title}>Revision</Text>
        </View>
        {/* Revision */}
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={revisions}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <NoteTab data={item} onPress={() => handlePress(item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Revision;
