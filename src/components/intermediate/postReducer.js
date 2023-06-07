export const INITIAL_STATE = {
    loading: false,
    posts: [],
    error: false
}


export const postReducer = (state,action)=>{
    // if(action.type==="START_FETCH"){
    //   return { loading: true, posts: [], error: false };
    // }
    switch (action.type) {
      case "START_FETCH":
        return { loading: true, posts: [], error: false };
        break;
      case "DATA_FETCHED":
        return { loading: false, posts: action.payload, error: false };
        break;
      case "FETCH_ERROR":
        return { loading: false, posts: [], error: true };
        break;
      default:
        return state  
    }
}
// export const INITIAL_STATE = {
// export const countReducer=(state,action)=>{
//   console.log(action)
//     switch (action.type) {
//       case "INCREASE":
       
//           return { counter: state.counter + 1 };
         
//         break;
//       case "DECREASE":
//         if (state.counter !== 0) {
//           return { counter: state.counter - 1 };
//         }
//         return state;
//         break;
//       case "RESET":
//         return { counter: 0 };
//         break;
//       case "INCREASE_BY_FIVE":
//         return { counter: state.counter + action.payload};
//         break;

//       default:
//         return state;
//     }
// }