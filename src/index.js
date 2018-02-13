import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';
import Post from 'component/post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  head: {
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  headText: {
    margin: 20,
    color: "#333333",
    fontWeight: 'bold',
    fontSize: 18,
  },
  postContent: {
    flex: 1,
  },
});

class App extends Component {
  state = {
    posts : [
      {id: 1, title: 'Aprendendo React Native', author: 'Fábio Barbosa', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: 2, title: 'Aprendendo React Native', author: 'Fábio Barbosa', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: 3, title: 'Aprendendo React Native', author: 'Fábio Barbosa', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: 4, title: 'Aprendendo React Native', author: 'Fábio Barbosa', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: 5, title: 'Aprendendo React Native', author: 'Fábio Barbosa', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    ]
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>GoNative App</Text>
        </View>
        <View>
          <ScrollView>
            {
              this.state.posts.map(post => (
                <Post key={post.id} post={post}></Post>
              ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default App;
