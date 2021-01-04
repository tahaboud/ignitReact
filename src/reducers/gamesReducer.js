const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
      };
    case "FETCH_UPCOMINGGAMES":
      return {
        ...state,
        upcomingGames: action.payload.upcoming,
      };
    case "FETCH_NEWGAMES":
      return {
        ...state,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
