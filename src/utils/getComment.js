import axios from 'axios';

const Comments = (id) => {
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${process.env.REACT_APP_API_KEY}&textFormat=plainText&part=snippet&videoId=${id}`
    )
    .then((res) => res);
};

export default Comments;
