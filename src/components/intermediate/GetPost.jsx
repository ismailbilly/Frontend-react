import { useEffect, useReducer } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { INITIAL_STATE, postReducer } from "./postReducer";
 const GetPost = () => {
const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

   //first time [],true,false
   //its a success [{},{}...], false, false
   //its an error [], false,true

//   
  useEffect(() => {
    const getPosts = () => {  
      dispatch({ type: "START_FETCH" });
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((bShuk) => {
          
        dispatch({ type: "DATA_FETCHED", payload: bShuk });
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: "FETCH_ERROR" });
        });
    };
    getPosts();
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      {state.error && "wat a gwain!"}
      {state.loading ? (
        <ClipLoader color="#d67036" loading={state.loading} size={150} />
      ) : (
        state.posts.map((post) => {
          return (
            <div
              key={post.id}
              style={{
                marginBottom: 20,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                padding: ".5rem 1rem",
                borderRadius: ".5rem",
              }}
            >
              {/* <img src={post.url} alt="" /> */}
               <h4>{post.title}</h4>
              <p>{post.body}</p> 
            </div>
          );
        })
      )}
    </div>
  )
};

 export default GetPost;
