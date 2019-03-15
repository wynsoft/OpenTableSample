import { FETCH_RESTAURANTS, REFINE_RESTAURANTS } from "../actions/types";

const initialState = {
  restaurantList: [],
  filteredList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurantList: action.payload,
        filteredList: action.payload
      };
    case REFINE_RESTAURANTS:
      return {
        ...state,
        filteredList: state.restaurantList.filter(
          res =>
            res.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            res.address.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    default:
      return state;
  }
}
