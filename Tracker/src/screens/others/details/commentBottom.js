import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { useState } from "react";
import Button from "../../../components/GlobalComponents/button";
import { styles } from "../style";
import api from "../../../services/api";

const CommentModal = ({
  closeCommentOptionButton,
  commentText,
  setCommentText,
  setComments,
  item,
}) => {
  const [commentActivityLoading, setcommentActivityLoading] = useState(false);

  const handleTextChange = (newText) => {
    // Update the state with the new text value
    setCommentText(newText);
  };

  const add_comment = () => {
    setcommentActivityLoading(true);
    api
      .post(`/create_comment/${item.id}/`, {
        comment: commentText,
      })
      .then((response) => {
        console.log(response.data);
        setComments((prevComments) => [...prevComments, response.data]);
        setCommentText("");
        setcommentActivityLoading(false);
      })
      .catch((error) => {
        // Error handling code
        console.error(error)
        setcommentActivityLoading(false);
      });
  };

  return (
    <View style={styles.bottomSheetContent}>
      <View style={styles.buttomsheetheader2}>
        <Text style={styles.EditText}>Comment</Text>
        <TouchableOpacity onPress={closeCommentOptionButton}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../../images/Icons.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.commentFeedbackContainer}>
        <TouchableOpacity style={styles.commentSearchContainer}>
          <TextInput
            style={{ ...styles.searchInput, textAlignVertical: "top" }}
            placeholder="Comment on fueling station"
            value={commentText}
            onChangeText={handleTextChange}
          />
        </TouchableOpacity>
        <Button
          title="Submit"
          onPress={add_comment} // Only call handleSubmit when the button is not disabled
          disabled={false}
          color={"#1E1E1E"} // Custom color
          textColor={"white"}
          loading={commentActivityLoading}
          width={"100%"}
          // Custom width
          height={55}
        />
      </View>
    </View>
  );
};

export default CommentModal;
