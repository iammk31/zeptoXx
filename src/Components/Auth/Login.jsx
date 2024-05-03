import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState,useEffect, useContext } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useFirebaseAuth } from "../../store/auth-context";
import {  getDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import style from './Login.module.css'
import PathContext from "../../store/path-context";

function Login() {
  // const [authUser, setAuthUser] = useState(null);
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [userType, setUserType] = useState();
  const [path, setPath] = useState();

  const authUser = useFirebaseAuth();
  const auth = getAuth();
  const pathCtx = useContext(PathContext);
  const logIn = (e) => {
    setLoading(true);
    pathCtx.onPathChange({path: path, userEmail: email});
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        getData();
        console.log(path);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect( () => {
    getData();
  }, []);

  const getData = () => {
    
    const docId = pathCtx.email;
    const colPath = pathCtx.path;

    if (docId && colPath) {
    const promises = getDoc(doc(collection(db, colPath), docId));

    Promise.all(promises)
      .then((snapshots) => {
        const data = snapshots.reduce((acc, snapshot) => {
          if (snapshot.exists()) {
            return { ...acc, ...snapshot.data() };
          }
          return acc;
        }, {});
        console.log(data);
        console.log(data.userType);
        setPath(`users/${data.userType}/data`);
        console.log(path);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className={style.Login}> 
    <div className="container col-md-6">
      {authUser ? (
        <>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>
                {`Logged In as ${authUser.email}`}
                <button
                  className="btn btn-sm btn-outline-warning"
                  onClick={userSignOut}
                >
                  LogOut
                </button>
              </p>
              <Dashboard collectionPath={pathCtx.path} currentUserEmail={pathCtx.email} />
            </>
          )}
        </>
      ) : (
        <form onSubmit={logIn} className={style.Login.form}>
          
          <input
            className={style.Login.input &&"form-control"}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={style.Login.input &&"form-control"}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select onChange={(e) => setPath(`users/${e.target.value}/data`)}>
          <option value="">You are a?</option>
          <option value={"teacher"}>Teacher</option>
          <option value={"student"}>Student</option>
          </select>
          <button className="btn btn-lg btn-outline-secondary" type="submit">
            LogIn
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
    </div>
  );
}
export default Login;
