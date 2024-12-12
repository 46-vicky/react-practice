import React, { useReducer } from 'react'

const initialState = {  name : { 

                                firstName : "", 
                                lastName : ""
                            },
                        count: 0
                    };

const ACTION = {
    INCREASE : "increase",
    DECREASE : "decrease",
    FIRSTNAME : "first-name",
    LASTNAME : "last-name"
}

const reducer = (state,action)=>{
    switch (action.type){
        case ACTION.INCREASE :
            return {...state, count: state.count+1};
        case ACTION.DECREASE :
            return {...state, count: state.count-1};
        case ACTION.FIRSTNAME:
            return {...state, name :{...state.name, firstName:action.payload}};
        case ACTION.LASTNAME: 
            return {...state, name:{...state.name, lastName:action.payload} };
        default :
            return state;
    }
}

const Counter = () => {

    const [state,dispatch] = useReducer(reducer,initialState)

    const increaseCount = ()=>{
        dispatch({type : ACTION.INCREASE})
    }

    const decreaseCount = ()=>{
        dispatch({type : ACTION.DECREASE})
    }

    const changeFirstName = (e)=>{
        dispatch({type : ACTION.FIRSTNAME, payload:e.target.value})
    }

    const changeLastName = (e)=>{
        dispatch({type : ACTION.LASTNAME, payload:e.target.value})
    }

  return (
    <div>
        <p>Count: {state.count}</p>
        <p>FirstName : {state.name.firstName}</p>
        <p>LastName: {state.name.lastName}</p>
        <input type="text" onChange={(e)=>changeFirstName(e)} placeholder='Enter Fisrtname' />
        <input type="text" onChange={(e)=>changeLastName(e)} placeholder='Enter LastName'/>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default Counter