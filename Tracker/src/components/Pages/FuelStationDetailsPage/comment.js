import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


/**
 * A component that displays a user comment with author information.
 * 
 * @param {string} date - The date of the comment.
 * @param {string} comment - The content of the comment.
 * @param {string} name - The name of the comment author.
 */

const CommentItem = ({ date, comment, name }) => {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.authorInfo}>
        <Image
          source={require('../../../images/avatar.png')}
          style={styles.avatar}
        />
        <View style={styles.authorDetails}>
          <Text style={styles.authorName}>{name}</Text>
          <Text style={styles.commentDate}>{date}</Text>
        </View>
      </View>
      <Text style={styles.commentText}>{comment}</Text>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  commentContainer: {
    width: '100%',
    minHeight: 80,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: '#D1D1D147',
    marginBottom: 10,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 400,
    marginRight: 7,
  },
  authorDetails: {
    minWidth: 50,
    minHeight: 40,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  authorName: {
    fontFamily: 'SemiBold',
    fontSize: 15,
    color: '#232323',
  },
  commentDate: {
    fontFamily: 'Regular',
    fontSize: 14,
    color: '#232323',
  },
  commentText: {
    fontFamily: 'Regular',
    fontSize: 16,
    color: '#232323',
  },
});
