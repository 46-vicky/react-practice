import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ACTION = {
  TITLEVAL: "title_val",
  TITLEVALID: "title_valid",
  CONTENTVAL: "content_val",
  CONTENTVALID: "content_valid",
  RESET: "reset",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION.TITLEVAL:
      return { ...state, title: { ...state.title, titleVal: action.payload } };
    case ACTION.TITLEVALID:
      return {
        ...state,
        title: { ...state.title, titleValid: action.payload },
      };
    case ACTION.CONTENTVAL:
      return {
        ...state,
        content: { ...state.content, contentVal: action.payload },
      };
    case ACTION.CONTENTVALID:
      return {
        ...state,
        content: { ...state.content, contentValid: action.payload },
      };
    case ACTION.RESET:
      return (
        action.payload || {
          title: { titleVal: "", titleValid: true },
          content: { contentVal: "", contentValid: true },
        }
      );
    default:
      return state;
  }
};

const EditPost = () => {
  
  const [formError, setFormError] = useState(false);
  const [modified,setModified] = useState({});

  let { id } = useParams();
  const {
    data: post,
    error,
    loading,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const {
    data: editPost,
    error: editError,
    loading: editLoading,
    optionData,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, "PATCH");

  useEffect(() => {
    if (post) {
      const initialState = {
        title: { titleVal: post.title || "", titleValid: true },
        content: { contentVal: post.body || "", contentValid: true },
      };
      dispatch({ type: ACTION.RESET, payload: initialState });
    }
  }, [post]);

  const [state, dispatch] = useReducer(formReducer, {
    title: { titleVal: "", titleValid: null },
    content: { contentVal: "", contentValid: null },
  });




  const handleEditTitle = (event) => {
    setFormError(false);
    dispatch({ type: ACTION.TITLEVAL, payload: event.target.value });
    dispatch({
      type: ACTION.TITLEVALID,
      payload: event.target.value.length > 5,
    });
    setModified({...modified,title:event.target.value});
  };

  const handleEditContent = (event) => {
    setFormError(false);
    dispatch({ type: ACTION.CONTENTVAL, payload: event.target.value });
    dispatch({
      type: ACTION.CONTENTVALID,
      payload: event.target.value.length > 20,
    });
    setModified({...modified,body:event.target.value});
  };

  const isValid = state.title?.titleValid && state.content?.contentValid;

  const handleForm = (event) => {
    event.preventDefault();
    if (isValid && Object.keys(modified).length) {
      optionData(modified);
    } else {
      setFormError(true);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="c-post-cnt">
      <p className="form-title">Edit Post</p>
      {formError && !state.title.titleValid ? (
        <p className="err-msg">Please Enter Valid Title</p>
      ) : formError && !state.content.contentValid ? (
        <p className="err-msg">Please Enter Valid Content</p>
      ) : (
        ""
      )}
      {post && (
        <form onSubmit={handleForm}>
          <div className="field-secs">
            <label htmlFor="post-title">Title</label>
            <input
              type="text"
              id="post-title"
              value={state.title.titleVal}
              onChange={handleEditTitle}
            />
          </div>
          <div className="field-secs">
            <label htmlFor="post-body">Content</label>
            <textarea
              name="post-body"
              id="post-body"
              value={state.content.contentVal}
              onChange={handleEditContent}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EditPost;
