import { FETCH_ALL, CREATE,UPDATE, DELETE, LIKE } from './types';
import axios from '../api/axios';

const loadPosts = posts => ({
  type: FETCH_ALL,
  payload: posts
});
const addPost = post => ({
  type: CREATE,
  payload: post
});
const update = post =>(
  { type: UPDATE, 
    payload: post
  }
)
const deleteP = id =>(
  { type: DELETE, 
    payload: id
  }
)
const like = post =>(
  { type: LIKE, 
    payload: post
  }
)
export const getPosts = () =>  (dispatch) => {
  axios.get('/posts')
    .then(res=>dispatch(loadPosts(res.data)))
    .catch(error=> console.log(error.message))
  
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await axios.post('/posts', post);

    dispatch(addPost(data));//bch l update ysir 9odemi directement fl front en modifiant le payload
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/posts/${id}`, post);

    dispatch(update(data));
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/posts/${id}`);

    dispatch(deleteP(id));
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/posts/${id}/likePost`);

   dispatch(like(data));
  } catch (error) {
    console.log(error.message);
  }
};