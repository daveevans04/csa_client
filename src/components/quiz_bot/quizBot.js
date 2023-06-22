import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuizBot = ({route: {params: data}}) => {
  if (!data) return null;
  const {width, height} = Dimensions.get('window');

  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));

  const validateAnswer = selectedOption => {
    let correct_option = allQuestions.questions[currentQuestionIndex]?.answer;
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.questions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}>
        {/* Question Counter */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}>
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{color: '#FFFFFF', fontSize: 18, opacity: 0.6}}>
            / {allQuestions.questions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 30,
          }}>
          {allQuestions.questions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };

  const renderOptions = () => {
    return (
      <View>
        {allQuestions.questions[currentQuestionIndex]?.options.map(
          (option, index) => (
            <TouchableOpacity
              onPress={() => validateAnswer(option.option)}
              disabled={isOptionsDisabled}
              key={index}
              style={{
                borderWidth: 3,
                borderColor:
                  option.option == correctOption
                    ? '#00C851'
                    : option.option == currentOptionSelected
                    ? '#ff4444'
                    : '#1E90FF' + '40',
                backgroundColor:
                  option.option == correctOption
                    ? '#00C851' + '20'
                    : option.option == currentOptionSelected
                    ? '#ff4444' + '20'
                    : '#1E90FF' + '20',
                height: 60,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginVertical: 10,
              }}>
              <Text style={{fontSize: 20, color: '#FFFFFF'}}>
                {option.option}
              </Text>

              {/* Show Check Or Cross Icon based on correct answer*/}
              {option.option == correctOption ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: '#00C851',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="check"
                    style={{
                      color: '#FFFFFF',
                      fontSize: 20,
                    }}
                  />
                </View>
              ) : option.option == currentOptionSelected ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: '#ff4444',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="close"
                    style={{
                      color: '#FFFFFF',
                      fontSize: 20,
                    }}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          ),
        )}
      </View>
    );
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            marginBottom: 80,
            width: '100%',
            backgroundColor: '#3498db',
            padding: 20,
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 20, color: '#FFFFFF', textAlign: 'center'}}>
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.questions.length],
    outputRange: ['0%', '100%'],
  });

  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 20,
          borderRadius: 20,
          backgroundColor: '#00000020',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: '#3498db',
            },
            {
              width: progressAnim,
            },
          ]}></Animated.View>
      </View>
    );
  };

  const renderScoreModal = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={showScoreModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#57C5B6',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: '90%',
              borderRadius: 20,
              padding: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              {score > allQuestions.questions.length / 2
                ? 'Congratulations!'
                : 'Oops!'}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color:
                    score > allQuestions.questions.length / 2
                      ? '#00C851'
                      : '#ff4444',
                }}>
                {score}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#171717',
                }}>
                / {allQuestions.questions.length}
              </Text>
            </View>

            {/* Retry Quiz button */}
            <TouchableOpacity
              onPress={restartQuiz}
              style={{
                backgroundColor: '#3498db',
                padding: 20,
                width: '100%',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontSize: 20,
                }}>
                Retry Quiz
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        maxHeight: height,
      }}>
      <ScrollView
        style={{
          flex: 1,
          paddingVertical: 60,
          paddingHorizontal: 16,
          backgroundColor: '#57C5B6',
          position: 'relative',
        }}>
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        {renderScoreModal()}
      </ScrollView>
    </View>
  );
};

export default QuizBot;
