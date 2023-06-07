// create an initial state and export it
export const INITS_STATE = {
  count:0,
};

// let action={
//     type: 'INCREASE_BY_ANY_AMOUNT',
//     payload: 5
// }
export function countReducer(state,action){

    if(action.type=== 'INCREASE'){
        return {count : state.count + 1}
    }
    if (action.type === "DECREASE") {
      return { count: state.count - 1 };
    }
    if (action.type === "RESET") {
      return { count: 0};
    }
     if (action.type === "INCREASE_BY_ANY_AMOUNT") {
       return { count: state.count + action.payload};
     } else {
       return state;
     }
}