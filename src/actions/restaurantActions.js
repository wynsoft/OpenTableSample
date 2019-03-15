import { FETCH_RESTAURANTS, REFINE_RESTAURANTS } from "./types";

export const fetchRestaurants = city => dispatch => {
  fetch(
    "https://opentable.herokuapp.com/api/restaurants?per_page=100&city=" + city
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: data.restaurants
      })
    );
};

export const refineRestaurants = filterBy => dispatch => {
  dispatch({
    type: REFINE_RESTAURANTS,
    payload: filterBy
  });
};
