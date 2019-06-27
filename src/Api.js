import axios from "axios";

const request = axios.create({
  baseURL: `https://rich-james-nc-news.herokuapp.com/api/`
});

export const getTopics = topic => {
  return request.get(`topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticleSummaries = (topic, author) => {
  return request
    .get("/articles", {
      params: {
        topic: topic,
        author: author
        // sort_by: sortBy
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
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
  return request.post(`articles/${articleId}/comments`, comment).then(res => {
    return res;
  });
};
export const patchArticleVotes = (article_id, increment) => {
  return request
    .patch(`/articles/${article_id}`, { inc_votes: increment })
    .then(({ data }) => {
      return data.article;
    });
};
// {
//   params: {
//     topic: topic,
//       author: author,
//     //sort by etc
//     }
// })
//     .then(({ data }) => {
//   return data.articles;
// })
