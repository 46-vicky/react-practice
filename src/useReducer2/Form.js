import React, { useReducer } from "react";
import classes from "./form.module.css";
import { type } from "@testing-library/user-event/dist/type";

const handleReducer = (state, action) => {
    switch (action.type){
        case ACTION.EMAILVAl :
            return {...state, email : {...state.email, emailVal : action.payload}};
        case ACTION.PASSVAL :
            return {...state, pass : {...state.pass, passVal : action.payload}};
        case ACTION.EMAILVALID : 
            return {...state, email : {...state.email, isEmailValid : action.payload}};
        case ACTION.PASSVALID :
            return {...state, pass: {...state.pass, isPassValid : action.payload}};
        case ACTION.RESET :
            return initialState;
        default :
            return state;
    }
};

const initialState = {
  email: { emailVal: "", isEmailValid: null },
  pass: { passVal: "", isPassValid: null },
};

const ACTION = {
    EMAILVAl : "email_val",
    PASSVAL : "pass_val",
    EMAILVALID : "email_valid",
    PASSVALID : "pass_valid",
    RESET : "reset"
}

const Form = () => {
  const [state, dispatch] = useReducer(handleReducer, initialState);

  const isValid = state.email.isEmailValid && state.pass.isPassValid;

  const handleForm = (event) => {
    event.preventDefault();
    if (isValid) {
        console.log("Form Submitted Successfully");
        console.log("Email:", state.email.emailVal);
        console.log("Password:", state.pass.passVal);
        dispatch({type:ACTION.RESET})
      } else {
        console.log("Form is invalid");
      }
  };

  const handleEmail = (event) => {
    dispatch({type : ACTION.EMAILVAl, payload : event.target.value});
    dispatch({type : ACTION.EMAILVALID, payload : event.target.value.includes("@")})
  };

  const handlePass = (event) => {
    dispatch({type : ACTION.PASSVAL, payload : event.target.value})
    dispatch({type : ACTION.PASSVALID, payload : event.target.value.trim().length > 3})
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleForm}>
        <div className={classes.formField}>
          <label htmlFor="email">Email:</label>
          <input type="text" onChange={handleEmail} value={state.email.emailVal}/>
        </div>
        <div className={classes.formField}>
          <label htmlFor="pass">Password:</label>
          <input type="password" onChange={handlePass}  value={state.pass.passVal}/>
        </div>
        <button type="submit" disabled={!isValid}>Login</button>
      </form>
    </div>
  );
};

export default Form;
