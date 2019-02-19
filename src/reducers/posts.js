// reducers take in the action and copy of current state
export function posts(state = [], action){
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      return [
        ...state.slice(0,i), // take state until the one we update
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we update
      ];
      break;
    case 'ADD_COMMENT' :
      console.log('hey comments!');
      break;
    default:
      return state;
  }
} 

export default posts;