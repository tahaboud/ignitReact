import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// Actions Creator

export const loadGames = () => (dispatch) => {
  // Fetch Axios
  const popularData = axios.get(popularGamesURL()).then((data) => {
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        popular: data.data.results,
      },
    });
  });
  const upcomingData = axios.get(upcomingGamesURL()).then((data) => {
    dispatch({
      type: "FETCH_UPCOMINGGAMES",
      payload: {
        upcoming: data.data.results,
      },
    });
  });
  const newData = axios.get(newGamesURL()).then((data) => {
    dispatch({
      type: "FETCH_NEWGAMES",
      payload: {
        newGames: data.data.results,
      },
    });
  });
};
