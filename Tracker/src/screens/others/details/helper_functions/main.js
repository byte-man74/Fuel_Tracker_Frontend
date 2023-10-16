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
        setComments(response.data.comments);
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
