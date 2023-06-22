import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTab from './bottomTab';
import VideoPlayer from '../components/video_player';
import PdfViewer from '../components/pdf_viewer';
import QuizBot from '../components/quiz_bot';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Return"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PdfViewer"
          component={PdfViewer}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#57C5B6',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#57C5B6',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="QuizBot"
          component={QuizBot}
          options={{
            // headerShown: false,
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#57C5B6',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: '#FFFFFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
