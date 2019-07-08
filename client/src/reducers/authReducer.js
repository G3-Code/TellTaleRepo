import { FETCH_USER } from "../actions/types";

export default function(state = {}, action) {
  console.log(`:::: ACTIONS :::: ${JSON.stringify(action)}`);
  switch (action.type) {
    case FETCH_USER:
      return action.payload;

    default:
      return state;
  }
}
