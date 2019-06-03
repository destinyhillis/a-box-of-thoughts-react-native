import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import BoardContainer from '../components/BoardContainer/BoardContainer';
import UserContainer from '../components/UserContainer/UserContainer';

export default class HomeScreen extends React.Component {
    constructor(){
    super();
    this.state = {
      loggedIn: false,
      currentUser: null
    }}
    static navigationOptions = {
      header: null,
    };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.logoContainer}>
          <ImageBackground style={styles.logoContainer} source={{ uri: 'https://source.unsplash.com/random?{texture}' }}>
            <Text style={styles.logoText}>
              A BOX OF THOUGHTS
            </Text>
            </ImageBackground>
          </View>
          <View style={styles.getStartedContainer}>
            {/* <BoardContainer /> */}
            <UserContainer />
          </View>

        </ScrollView>

        
          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <Text style={styles.codeHighlightText}>navigation/MainTabNavigator.js</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 23,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    padding: 15,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  logoText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 5,
    textTransform: 'uppercase',
    padding: 15
  },
  logoContainer: {
    backgroundColor: '#999999',
    flex: 1,
    position: 'relative',
  },
  helloText: {
    fontSize: 26,
    color: '#666666',
    textAlign: 'center',
    letterSpacing: 5,
    textTransform: 'uppercase',
    padding: 15
  },
  hr: {
    borderBottomColor: '#999999',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '120%',
  },
});
