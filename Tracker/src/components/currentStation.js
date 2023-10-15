import api from "../services/api";

export const handleUpvote = async (id) => {
  try {
    await api.get(`add_votes/${id}/`);
  } catch (error) {
    console.error("Error upvoting:", error);
  }
};
