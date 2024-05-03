import React, { useState, useReducer } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import UserType from "../UserType";
import AuthContext, { useFirebaseAuth } from "../../store/auth-context";



const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
};

function SignUp() {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const [isSignedUp, setIsSignedUp] = useState(false);
  const authUser = useFirebaseAuth();
  const auth = getAuth();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailState.value,
        passwordState.value
      );
      console.log(userCredential);
      setIsSignedUp(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="row bg-dark" style={{ height: "105vh" , display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: "url('https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="container d-flex justify-content-center">
        {isSignedUp ? (
          <div className="container bg-light" style={{backgroundImage:"url('https://images.unsplash.com/photo-1547127796-06bb04e4b315?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: "cover", backgroundPosition: "center",  'minHeight': "100vh",'minWidth':'100%', }}>
            <UserType email={emailState.value} />
          </div>
        ) : (
          <form onSubmit={signUp} className="col g-3">
            <div className="col-4">
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
                value={emailState.value}
                onChange={(e) => emailChangeHandler(e)}
                onBlur={validateEmailHandler}
              />
            </div>
            <div className="col-4">
              <input
                className="form-control"
                type="password"
                placeholder="Enter your password"
                value={passwordState.value}
                onChange={(e) => passwordChangeHandler(e)}
                onBlur={validatePasswordHandler}
              />
            </div>
            <div className="col-6">
              <button className="btn btn-outline-danger btn-sm" type="submit">
                SignUp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
export default SignUp;
