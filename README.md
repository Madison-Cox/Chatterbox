# Chatterbox

Chatterbox is a native mobile app built using React Native that allows a user to create a username, enter a chatroom, and send messages, images, and their location.

# Tech 
Technologies used:
* React Native
* Expo
* Google Firestore Database

# User Stories
* As a new user, I want to be able to easily navigate app without any direction.
* As a user, I want to be able to send and recieve messages.
* As a user, I want to be able to share my location.
* As a user, I want to be able to use app while offline so I can reread messages at any time.

# Features
* Start screen allows the user to type a username and select which background they would prefer out of 4 presets.
* Chat screen that shows sent and recieved messages, an input field, and a submit button.
* Chat screen has additional actions allowing users to send images and location.
* All messages are stored allowing them to be viewed online and offline.

# Dependencies
```bash
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/native": "^6.0.13",
    "@react-navigation/stack": "^6.3.4",
    "expo": "~47.0.3",
    "expo-status-bar": "~1.4.2",
    "firebase": "^8.10.1",
    "react": "18.1.0",
    "react-native": "0.70.5",
    "react-native-gesture-handler": "~2.8.0",
    "react-native-gifted-chat": "^1.0.4",
    "react-native-reanimated": "~2.12.0",
    "react-native-safe-area-context": "4.4.1",
    "react-native-screens": "~3.18.0",
    "react-navigation": "^4.4.4",
    "@react-native-async-storage/async-storage": "~1.17.3",
    "@react-native-community/netinfo": "9.3.5",
    "react-native-maps": "1.3.2",
    "expo-permissions": "~14.0.0",
    "expo-image-picker": "~14.0.2",
    "expo-location": "~15.0.1"
```
# How to Install
* Clone the repository: ``` git clone https://github.com/Madison-Cox/Chatterbox.git```
* Install Expo CLI as a global npm package: ``` npm install -g expo-cli```
* Install all dependencies: ``` npm install ```
* go to https://expo.dev/ Create an account and log in via terminal with ``` expo login ```
* Follow expo CLI's instructions depending on your preferred simulator (ex. Android Studio)
* Start the Project: ``` npm start ```
* If Expo cannot detect the running project, try running it with ``` npx expo start --tunnel ```

# Database config
* Go to https://firebase.google.com/ and sign in a google account.
* Go to Firebase console and click on "Create Project".
* Once on your project's dashboard, click on "Develop" on the left side of screen, Then "Cloud firestore", then "Create Database". Select "Test Mode" then select "Done".
* Create a new collection named "messages".
* Under "Project Settings", scroll down and click the "Firestore for Web" button ``` </> ```
* choose a name for the chat app, then click "Register" and copy configuration code and paste it in the chat.js file inside components folder of cloned repository.
```bash
apiKey: "*********************",
      authDomain: "*************",
      projectId: "***************",
      storageBucket: "*******************",
      messagingSenderId: "***********",
      appId: "******************",
      measurementId: "************"
```
