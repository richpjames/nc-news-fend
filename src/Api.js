import axios from "axios";

const request = axios.create({
  baseURL: `https://rich-james-nc-news.herokuapp.com/api/`
});

export const getTopics = () => {
  return request.get(`topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticleSummaries = (topic, sort_by) => {
  return request
    .get("/articles", {
      params: {
        topic,
        sort_by
      }
    })
    .then(({ data }) => {
      return data.articles;
    })
};

export const getArticleById = id => {
  return request.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = article_id => {
  return request.get(`articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (comment, articleId) => {
  return request
    .post(`articles/${comment.article_id}/comments`, comment)
    .then(res => {
      return res;
    });
};
export const patchArticleVotes = (article_id, increment) => {
  return request
    .patch(`/articles/${article_id}`, { inc_votes: increment })
    .then(votes => {
      return votes;
    });
};

export const deleteComment = comment_id => {
  return request.delete(`comments/${comment_id}`)
};
