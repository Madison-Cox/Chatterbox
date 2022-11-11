import React from 'react';
import { View, Text, StyleSheet, Title } from 'react-native';

export default class Chat extends React.Component {

  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
  }


  render() {
    let color = this.props.route.params.color;
    return (
      <View style={{ backgroundColor: color, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chatterbox</Text>
      </View>
    )
  }
}