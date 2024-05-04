import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect, useContext } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useFirebaseAuth } from "../../store/auth-context";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import style from "./Login.module.css";

function Login() {
  // const [authUser, setAuthUser] = useState(null);
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({});
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [userType, setUserType] = useState();
  const [path, setPath] = useState();

  const authUser = useFirebaseAuth();
  const auth = getAuth();

  const logIn = (e) => {
    setLoading(true);
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

  useEffect(() => {
    setEmail(localStorage.getItem("userEmail"));
    getData();
  }, []);

  const getData = () => {
    if (email) {
      getDoc(doc(collection(db, "users"), email))
        .then((currentDoc) => {
          console.log(currentDoc.data());
          setUserData(currentDoc.data());
        })
        .catch((error) => console.error(error));
    }
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        console.log("Signed out successfully");

      })
      .catch((error) => console.error(error));
  };
  return (
    <div
      className={
        "container d-flex flex-column justify-content-center align-items-center vh-100"
      }
      style={{
        backgroundImage: "url('../../images/img7.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="container overflow-scroll">
        {authUser ? (
          <>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="text-center">
                <p className="w-50 text-center text-bg-info ">
                  {`Logged In as ${authUser.email}`}
                  <button
                    className="btn btn-sm btn-outline-warning"
                    onClick={userSignOut}
                  >
                    LogOut
                  </button>
                </p>
                <Dashboard userData={userData} />
              </div>
            )}
          </>
        ) : (
          <form
            onSubmit={logIn}
            className={"container d-flex flex-column w-50"}
          >
            <input
              className={"form-control"}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={"form-control"}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

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
