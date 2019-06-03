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

import Search from '../MakeBoard/Search';
import SearchResults from '../MakeBoard/SearchResults';

class MakeBoard extends Component {
    
    render(){
        return(
            <View>
                <Text>
                    MakeBoard
                </Text>
                <Search />
                <SearchResults />
            </View>
        )
    }
}

export default MakeBoard;