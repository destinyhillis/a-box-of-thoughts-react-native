import React, { Component } from 'react';

import {
    FormLabel, 
    TextInput, 
    FormValidationMessage,
    Button,
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

class Register extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('hit register')
        // this.props.handleRegister(this.state);
    };
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // };
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.h2}>REGISTER</Text>
                <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={'Username'}
                style={styles.input}
                />
                <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
                />
                
                <Button
                title={'Register'}
                style={styles.input}
                color='#666666'
                onPress={this.handleSubmit}
                />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: '#999999',
        marginBottom: 30,
        fontSize: 20
    },
    h2: {
        fontSize: 30,
        color: '#999999',
        letterSpacing: 7,
        textAlign: 'center',
        padding: 15
    },
})

export default Register;