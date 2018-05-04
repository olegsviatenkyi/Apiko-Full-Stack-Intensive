import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

export default class App extends React.Component {
	constructor(props) {
    super(props)
    this.state = { count: 0 }
  } 
  onPress = () => {
    this.setState({
      count: this.state.count+1
    }) 
  }
  onPress1 = () => {
    this.setState({
      count: this.state.count-1
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.buttonPlus}
         onPress={this.onPress}
        >
         <Text> Plus </Text>
        </TouchableHighlight>
        <Text />
        <TouchableHighlight
         style={styles.buttonMinus}
         onPress={this.onPress1}
        > 
         <Text> Minus </Text>
        </TouchableHighlight>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  buttonPlus: {
    alignItems: 'center',
    backgroundColor: '#32CD32',
    borderColor: 'black',
    borderStyle: 'solid', 
    borderWidth: 2,
    padding: 10
  },
  buttonMinus: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: 'blue'
  }
})
