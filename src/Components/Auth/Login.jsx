import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect, useContext } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useFirebaseAuth } from "../../store/auth-context";
import { getDoc, doc, getDocs, collection, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import style from "./Login.module.css";
import { useSearchParams } from "react-router-dom";

function Login() {
  // const [authUser, setAuthUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const searchQuery = useSearchParams()[0];
  const paymentRef = searchQuery.get("referenceid");

  const authUser = useFirebaseAuth();
  const auth = getAuth();

  const logIn = (e) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setEmail(localStorage.getItem("userEmail"));
    getData();
    addPayment();
  }, []);

  const getData = () => {
    if (email) {
      getDoc(doc(collection(db, "users"), email))
        .then((currentDoc) => {
          console.log(currentDoc.data());
          localStorage.setItem("userData", JSON.stringify(currentDoc.data()));
        })
        .catch((error) => console.error(error));
    }
  };

  const addPayment = async () => {
    if (paymentRef) {
      console.log("adding payment");
      console.log(paymentRef);
      const customerId = localStorage.getItem("userEmail");
      const productId = localStorage.getItem("productId");
      const docRef = await setDoc(doc(collection(db, "payments"), paymentRef), {
        customerId,
        productId,
        status: "success"
      });
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
        " d-flex flex-column justify-content-center align-items-center vh-100 vw-100"
      }
      style={{
        backgroundImage: "url('../../images/img7.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="container ">
        {authUser ? (
          <>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="text-center">
                <p>
                  {`Logged In as ${authUser.email}`}
                  <button
                    className="btn btn-sm btn-outline-warning"
                    onClick={userSignOut}
                  >
                    LogOut
                  </button>
                </p>
                <Dashboard />
              </div>
            )}
          </>
        ) : (
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <form
            onSubmit={logIn}
            className=""
          >
            <input
              className={"form-control"}
              type="email"
              placeholder="Enter your email"
              value={email}
              style={{width: "25vw"}}
              onChange={(e) => {
                setEmail(e.target.value);
                localStorage.setItem("userEmail", e.target.value);
              }}
            />
            <input
              className={"form-control"}
              type="password"
              placeholder="Enter your password"
              style={{width: "25vw",marginTop: "15px"}}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

              <div style={{textAlign: "center"}}>
              <button className="btn btn-outline-danger btn-sm" type="submit" style={{width: "7vw",marginTop: "15px"}}>
              Login
            </button>
              </div>
            
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
          </div>
        )}
      </div>
    </div>
  );
}
export default Login;
