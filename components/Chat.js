import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { firebase } from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }

    const firebaseConfig = {
      apiKey: "AIzaSyC6DKefxhWEH8GlPd83nsy90-63-qFaDaQ",
      authDomain: "chat-app-b6cc9.firebaseapp.com",
      projectId: "chat-app-b6cc9",
      storageBucket: "chat-app-b6cc9.appspot.com",
      messagingSenderId: "952225395356",
      appId: "1:952225395356:web:7541008a343bd4b0fd3359",
      measurementId: "G-1TRL37D515"
    };




    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.referenceChatMessages = firebase
      .firestore()
      .collection('messages');
  }

  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
    this.setState({
      messages: [
        {
          text: `{${name} has entered the chat`,
          createdAt: new Date(),
          system: true,
        },
      ],
    });



    this.referenceChatMessages = firebase
      .firestore()
      .collection('messages');

    this.unsubscribe = this.referenceChatMessages.onSnapshot(
      this.onCollectionUpdate
    );

    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy('createdAt', 'desc')
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.authUnsubscribe();
  }

  onSend(messages = []) {
    this.setState
      (previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }),
        () => {
          this.addMessage();
        }
      );
  }

  addMessage = () => {
    const message = this.state.messages[0];
    this.referenceChatMessages.add({
      _id: this.state._id,
      text: message.text,
      createdAt: message.createdAt,
      user: message.user,
    });
  };

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000',
          },
          left: {
            backgroundColor: '#fff',
          },
        }}
      />
    );
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    this.setState({
      messages,
    });
  };

  render() {
    let color = this.props.route.params.color;
    {
      Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
    }
    return (
      <View style={{ backgroundColor: color, flex: 1 }}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: this.state.uid,
            avatar: 'https://placeimg.com/140/140/any',
          }}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatTitle: {
    color: '#FFFFFF'
  }
})