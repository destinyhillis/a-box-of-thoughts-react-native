import React, { Component } from 'react';

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

import Login from '../UserContainer/Login/Login'
import Register from '../UserContainer/Register/Register'

class UserContainer extends Component {
    
    render(){
        return(
            <View>
                <Login />
                <Register />
            </View>
        )
    }
}

export default UserContainer;