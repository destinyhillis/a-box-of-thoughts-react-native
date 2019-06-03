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

import ImageList from '../BoardDetail/ImageList';
import EditBoard from '../BoardDetail/EditBoard';

class BoardDetail extends Component {
    
    render(){
        return(
            <View>
                <Text>
                    BoardDetail
                </Text>
                <ImageList />
                <EditBoard />
            </View>
        )
    }
}

export default BoardDetail;