import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer, useState } from 'react'
import useFetch from '../hooks/useFetch';

const initialState = {
    title : {titleVal : "", titleValid : null},
    content : {contentVal : "", contentValid : null},
}

const formReducer = (state,action)=>{
    switch(action.type){
        case ACTION.TITLEVAL :
            return {...state, title : {...state.title, titleVal : action.payload}};
        case ACTION.TITLEVALID : 
            return {...state, title : {...state.title, titleValid : action.payload}};
        case ACTION.CONTENTVAL :
            return {...state, content : {...state.content, contentVal : action.payload}};
        case ACTION.CONTENTVALID : 
            return {...state, content : {...state.content, contentValid : action.payload}};
        case ACTION.RESET : 
            return initialState;    
        default :
            return state;
    }

}

const ACTION = {
    TITLEVAL : "title_val",
    TITLEVALID : "title_valid",
    CONTENTVAL : "content_val",
    CONTENTVALID : "content_valid",
    RESET : "reset"
}

const CreatePost = () => {

    const [state,dispatch] = useReducer(formReducer,initialState);
    const [error, setError] = useState(false);

    const {data,error : createError , loading, optionData} = useFetch("https://jsonplaceholder.typicode.com/posts","POST")

    const handleTitle = (event)=>{
        setError(false)
        dispatch({type : ACTION.TITLEVAL, payload : event.target.value})
        dispatch({type : ACTION.TITLEVALID, payload : event.target.value.length > 5})
    }

    const handleContent = (event)=>{
        setError(false)
        dispatch({type : ACTION.CONTENTVAL, payload : event.target.value})
        dispatch({type : ACTION.CONTENTVALID, payload : event.target.value.length > 20})
    }

    const isValid = state.title?.titleValid && state.content?.contentValid;

    const handleForm = (event)=>{
        event.preventDefault();
        if(isValid){
            optionData({title : state.title.titleVal, body : state.content.contentVal});
            dispatch({type:ACTION.RESET})
        }else{
            setError(true)
        }
    }
    
  return (
    <div className='c-post-cnt'>
        <p className="form-title">Create New Post</p>
        {error && !state.title.titleValid ? <p className='err-msg'>Please Enter Valid Title</p> : (error && !state.content.contentValid ? <p className='err-msg'>Please Enter Valid Content</p> : "")}
        <form onSubmit={handleForm}>
            <div className='field-secs'>
                <label htmlFor="post-title">Title</label>
                <input type="text" id="post-title" value={state.title.titleVal} onChange={handleTitle}/>
            </div>
            <div className='field-secs'>
                <label htmlFor="post-body">Content</label>
                <textarea name="post-body" id="post-body" value={state.content.contentVal} onChange={handleContent}></textarea>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreatePost