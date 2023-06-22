import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Screens
import ExploreStack from './exploreNavigator';
import Video from '../screens/videos';
import Quiz from '../screens/quizzes';
import Revision from '../screens/revisions';
import Easy68k from '../screens/easy68k';

const Tab = createBottomTabNavigator();

//  Customize Quiz button
const CustomMiddleButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{top: -30, justifyContent: 'center', alignItems: 'center'}}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#002B5B',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ExploreStack"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#1A5F7A',
          borderRadius: 20,
          height: 90,
          opacity: 0.9,
          ...Styles.Shadow,
        },
      }}>
      {/* First Screen */}
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../assets/icons/video.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1E90FF' : '#FFFFFF',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1E90FF' : '#FFFFFF',
                  fontSize: 12,
                  paddingTop: 5,
                }}>
                Video
              </Text>
            </View>
          ),
        }}
      />

      {/* Second Screen */}
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                // source={require('../assets/icons/house.png')}
                source={require('../assets/icons/quiz.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1E90FF' : '#FFFFFF',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1E90FF' : '#FFFFFF',
                  fontSize: 12,
                  paddingTop: 5,
                }}>
                Quiz
              </Text>
            </View>
          ),
        }}
      />
      {/* Third Screen */}
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/house.png')}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: '#FFFFFF',
              }}
            />
          ),
          tabBarButton: props => <CustomMiddleButton {...props} />,
        }}
      />
      {/* Fourth Screen */}
      <Tab.Screen
        name="Revision"
        component={Revision}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../assets/icons/revision.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1E90FF' : '#FFFFFF',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1E90FF' : '#FFFFFF',
                  fontSize: 12,
                  paddingTop: 5,
                }}>
                Revision
              </Text>
            </View>
          ),
        }}
      />
      {/* Fifth Screen */}
      <Tab.Screen
        name="Easy68k"
        component={Easy68k}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../assets/icons/coding.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1E90FF' : '#FFFFFF',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1E90FF' : '#FFFFFF',
                  fontSize: 12,
                  paddingTop: 5,
                }}>
                Easy68K
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Styles = StyleSheet.create({
  Shadow: {
    shadowColor: '#1A5F7A',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    elevation: 5,
  },
});

export default Tabs;
