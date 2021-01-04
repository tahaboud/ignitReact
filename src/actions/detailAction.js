import axios from "axios";
import { gameDetailsURL, gameScreenShotURL } from "../api";

export const loadDetail = (id) => (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  axios.get(gameDetailsURL(id)).then((data) => {
    dispatch({
      type: "GET_DETAIL",
      payload: {
        game: data.data,
      },
    });
  });
  axios.get(gameScreenShotURL()).then((data) => {
    dispatch({
      type: "GET_SCREENSHOTS",
      payload: {
        screen: data.data,
      },
    });
  });
};
