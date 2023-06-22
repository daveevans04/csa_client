import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import Styles from './style';
import QuizTab from '../../components/quiz_tab';
import {useNavigation} from '@react-navigation/native';
import {getQuiz, getQuizById} from '../../api/quiz';

const Quiz = () => {
  const navigation = useNavigation();
  const [quiz, setQuiz] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      setRefreshing(false);
      const {error, data} = await getQuiz();
      if (error) {
        console.log('Error fetching quiz:', error);
      } else {
        setQuiz(data);
      }
    } catch (error) {
      console.error('Failed to fetch quiz:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchSingleQuiz = async quizId => {
    try {
      const {error, data} = await getQuizById(quizId);
      if (error) {
        console.log(error);
      } else {
        navigation.navigate('QuizBot', data);
      }
    } catch (error) {
      console.error('Failed to fetch single quiz:', error);
    }
  };

  const handlePress = data => {
    fetchSingleQuiz(data._id);
  };

  const handleRefresh = () => {
    fetchQuiz();
  };

  return (
    <SafeAreaView style={Styles.main_container}>
      <View style={Styles.content_container}>
        {/* Header */}
        <View style={Styles.header_container}>
          <Text style={Styles.title}>Quiz</Text>
        </View>
        {/* Body */}
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={quiz}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <QuizTab data={item} onPress={() => handlePress(item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
