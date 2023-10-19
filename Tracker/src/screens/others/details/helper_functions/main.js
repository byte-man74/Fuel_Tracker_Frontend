import api from "../../../../services/api";

export const closeAllBottomSheet = ( setBottomSheetsVisible ) => {
    setBottomSheetsVisible({
      option: false,
      price: false,
      comment: false,
      traffic: false,
    });
}


export const fetchComments = (setComments, setCommentLoading, navigation, item) => {
    api
      .get(`/get_comments/${item.id}/`)
      .then((response) => {
        setComments(response.data);
        setCommentLoading(false);
      })
      .catch((error) => {
        if (!error.response) {
          // No Internet Connection Error
          navigation.navigate("NoNetwork");
          return;
        }

        if (error.response.status === 500 || error.response.status === 502) {
          // Server Error
          navigation.navigate("ServerScreen");
          return;
        }
        setCommentLoading(false);
      });
}


export const handleUpvote = async (id, setActive) => {
    try {
      setActive(true);
      await api.get(`add_votes/${id}/`);
    } catch (error) {
      console.error("Error upvoting:", error); // Optionally handle the error, such as logging it
    }
  };
  
export const fetchCurrentPrice = async (item, navigation, setPrice, setCommentLoading) => {
    try {
      const response = await api.get(`/get_current_price/${item.id}/`);
      setPrice(response.data.amount);
    } catch (error) {
      if (!error.response) {
        // No Internet Connection Error
        navigation.navigate("NoNetwork");
        return;
      }
  
      if (error.response.status === 500 || error.response.status === 502) {
        // Server Error
        navigation.navigate("ServerScreen");
        return;
      }
      setCommentLoading(false);
    }
  };
  