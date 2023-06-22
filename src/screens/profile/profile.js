import {View, Text, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import Styles from './style';
import React, {useEffect, useState} from 'react';
import ProfileCard from '../../components/profile_card';

import {getProfile} from '../../api/profile';

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      setRefreshing(true);
      const {error, data} = await getProfile();
      if (error) {
        console.log('Error fetching notes:', error);
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    fetchProfiles();
  };

  return (
    <SafeAreaView style={Styles.main_container}>
      <View style={Styles.content_container}>
        {/* Header */}
        <View style={Styles.header_container}>
          <Text style={Styles.title}>Profile</Text>
        </View>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={profile}
          renderItem={({item}) => <ProfileCard data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
