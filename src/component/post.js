import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContent: {
    padding: 20,
    backgroundColor: "#FFF",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  postHead: {
    borderBottomWidth: 1,
    borderColor: "#EEE",
    paddingBottom: 10,
    marginBottom: 10,
  },
  postHeadTitle: {
    color: "#333",
    fontWeight: 'bold',
  },
  postHeadAuthor: {
    color: "#999",
  },
  postText: {
    color: "#666",
  },
});

class Post extends Component {
  render() {
    return (
      <View style={styles.postContent}>
        <View style={styles.postHead}>
          <Text style={styles.postHeadTitle}>{this.props.post.title}</Text>
          <Text style={styles.postHeadAuthor}>{this.props.post.author}</Text>
        </View>
        <View>
          <Text style={styles.postText}>
          {this.props.post.post}
          </Text>
        </View>
      </View>
    );
  }
}

export default Post;
