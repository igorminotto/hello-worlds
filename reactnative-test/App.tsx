import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Greeting from './components/Greeting';

export default class App extends Component {
  private styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 30,
      height: 30
    }
  });
  private name = "Igor";

  render() {
    return (
      <View style={this.styles.container}>
        <Image source={require('./assets/icon.png')} style={this.styles.image}/>
        <Greeting name={this.name} color='#fff'/>
      </View>
    );
  }
}
