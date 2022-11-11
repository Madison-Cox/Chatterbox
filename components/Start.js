import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const backgroundColor = {
  black: '#000',
  blue: '#4256ff',
  red: '#ff777c',
  green: '#90da98',
};

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', color: '' };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require('../assets/chat2.jpg')} style={styles.image} >
          <View>

            <Text style={styles.title}>ChatterBox</Text>
            <View style={styles.login}>
              <TextInput
                style={styles.input}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder='Your Username'
              />
            </View>

          </View>
          <View style={styles.colorTitle}>
            <Text style={styles.colorText}>Choose Background Color:</Text></View>
          <View style={styles.colorChange}>
            <TouchableOpacity
              style={[
                styles.color,
                { backgroundColor: backgroundColor.black },
              ]}
              onPress={() =>
                this.setState({ color: backgroundColor.black })
              }
            ><Text style={styles.text}>Black</Text></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.color,
                { backgroundColor: backgroundColor.blue },
              ]}
              onPress={() =>
                this.setState({ color: backgroundColor.blue })
              }
            ><Text style={styles.text}>Blue</Text></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.color,
                { backgroundColor: backgroundColor.red },
              ]}
              onPress={() =>
                this.setState({ color: backgroundColor.red })
              }
            ><Text style={styles.text}>Red</Text></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.color,
                { backgroundColor: backgroundColor.green },
              ]}
              onPress={() =>
                this.setState({ color: backgroundColor.green })
              }
            ><Text style={styles.text}>Green</Text></TouchableOpacity>
          </View>

        </ImageBackground>
        <TouchableOpacity
          style={styles.button}
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate('Chat', {
            name: this.state.name,
            color: this.state.color,
          })}
        ><Text style={styles.buttonText}>Go To Chat</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: 'white',
    height: '45%',
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  input: {
    marginTop: 60,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    fontSize: 15,
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 50,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  colorText: {
    color: 'black'
  },
  colorChange: {
    padding: 1,
    height: '0%',
    width: '45%',
    alignSelf: 'center',
  },
  color: {
    borderRadius: 25,
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  colorTitle: {
    backgroundColor: 'white',
    alignSelf: 'center',
    height: '3%',
    width: '50%',
    borderRadius: 10,
    paddingTop: 2,
  },
  colorText: {
    color: 'black',
    textAlign: 'center',
  }
})