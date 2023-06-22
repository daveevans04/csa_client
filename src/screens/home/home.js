import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from 'react-native';
import Styles from './style';
import ProfileButton from '../../components/profile_button';
import NoteTab from '../../components/note_tab';
import {getNotes, getNotesById} from '../../api/note';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setRefreshing(true);
      const {error, data} = await getNotes();
      if (error) {
        console.log('Error fetching notes:', error);
      } else {
        setNotes(data);
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchSingleNotes = async noteId => {
    try {
      const {error, data} = await getNotesById(noteId);
      if (error) {
        console.log(error);
      } else {
        const url = data.pdfUrl?.secure_url;

        navigation.navigate('PdfViewer', url);
      }
    } catch (error) {
      console.error('Failed to fetch single note:', error);
    }
  };

  const handlePress = data => {
    fetchSingleNotes(data._id);
  };

  const handleRefresh = () => {
    fetchNotes();
  };

  return (
    <SafeAreaView style={Styles.main_container}>
      <View style={Styles.content_container}>
        {/* Header */}
        <ProfileButton />
        {/* Body */}
        <ScrollView
          style={Styles.body_container}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }>
          {/* Introduction */}
          <View>
            <Text style={Styles.title}>Introduction</Text>
            <View style={Styles.detail_container}>
              <Text style={Styles.intro}>
                Computer System Architecture is the organisation of the
                components which make up a computer system and the meaning of
                the operations which guide its function. It defines what is seen
                on the machine interface, which is targeted by programming
                languages and their compilers.
              </Text>
            </View>
          </View>
          {/* Notes */}
          <View style={Styles.detail_container}>
            <Text style={Styles.title}>Notes</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={notes}
              keyExtractor={item => item._id}
              renderItem={({item}) => (
                <NoteTab data={item} onPress={() => handlePress(item)} />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
