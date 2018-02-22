import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  postContent:
  {
    padding: 20,
    backgroundColor: "#FFF",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  postHead:
  {
    borderBottomWidth: 1,
    borderColor: "#EEE",
    paddingBottom: 10,
    marginBottom: 10,
  },
  postHeadTitle:
  {
    color: "#333",
    fontWeight: 'bold',
  },
  postHeadAuthor:
  {
    color: "#999",
  },
  postText:
  {
    color: "#666",
  },
});

const Post = ({ title, author, post }) => (
  <View style={styles.postContent}>
    <View style={styles.postHead}>
      <Text style={styles.postHeadTitle}>{title}</Text>
      <Text style={styles.postHeadAuthor}>{author}</Text>
    </View>
    <View>
      <Text style={styles.postText}>{post}</Text>
    </View>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};

export default Post;
